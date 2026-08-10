import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { execFileSync } from "child_process";
import puppeteer, { LaunchOptions } from "puppeteer";

// browser.close() acknowledging over DevTools doesn't guarantee the OS
// process tree actually exits, and a *failed* launch (e.g. the "already
// running" error below) never even hands back a `browser` to call
// .process() on in the first place - either way, Chrome's
// renderer/GPU/crashpad-handler children can outlive it. Across a real test
// run those pile up into dozens of zombie chrome.exe processes competing
// for CPU/disk, which is what actually causes puppeteer's misleading
// "browser is already running for <dir>" error on later launches (Chrome's
// own startup gets starved and dies partway through, after creating its
// lockfile). Every chrome.exe launched for a given profile carries that
// profile's --user-data-dir on its command line, so killing by that path
// cleans up the whole tree regardless of whether we ever got a `browser`
// handle for it.
const killByUserDataDir = (userDataDir: string): void => {
  if (process.platform !== "win32") {
    return;
  }
  try {
    execFileSync(
      "powershell",
      [
        "-NoProfile",
        "-Command",
        `Get-CimInstance Win32_Process -Filter "Name='chrome.exe'" |` +
          ` Where-Object { $_.CommandLine -like '*${userDataDir}*' } |` +
          ` ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }`
      ],
      { stdio: "ignore" }
    );
  } catch {
    // best-effort; nothing left to clean up if this fails
  }
};

interface ITakeScreenshotOptions {
  launch?: LaunchOptions;
  targetSelector?: string;
  viewport?: {
    width: number;
    height: number;
  };
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const LAUNCH_RETRIES = 4;

// Retries launch as a last-resort safety net (each attempt gets its own
// fresh userDataDir) in case a launch still fails despite the process-tree
// cleanup in takeScreenshot below.
const launchWithRetry = async (
  launchOptions: Omit<LaunchOptions, "userDataDir">
): Promise<{ browser: Awaited<ReturnType<typeof puppeteer.launch>>; userDataDir: string }> => {
  let lastErr: unknown;
  for (let attempt = 0; attempt < LAUNCH_RETRIES; attempt++) {
    const userDataDir = mkdtempSync(
      join(tmpdir(), "puppeteer_dev_chrome_profile-")
    );
    try {
      const browser = await puppeteer.launch({ ...launchOptions, userDataDir });
      return { browser, userDataDir };
    } catch (err: unknown) {
      lastErr = err;
      killByUserDataDir(userDataDir);
      try {
        rmSync(userDataDir, { recursive: true, force: true });
      } catch {
        // best-effort cleanup; the OS will reclaim the temp dir eventually
      }
      if (attempt < LAUNCH_RETRIES - 1) {
        await sleep(200 * (attempt + 1));
      }
    }
  }
  throw lastErr;
};

export const takeScreenshot = async (
  opts: ITakeScreenshotOptions
): Promise<Buffer> => {
  const launchOptions: Omit<LaunchOptions, "userDataDir"> = {
    ...opts.launch,
    args:
      process.env.CI === "true"
        ? ["--no-sandbox", "--font-render-hinting=none"]
        : ["--font-render-hinting=none"]
  };
  const { browser, userDataDir } = await launchWithRetry(launchOptions);
  try {
    const page = await browser.newPage();
    opts.viewport &&
      page.setViewport({
        width: opts.viewport.width,
        height: opts.viewport.height
      });
    const html = document.documentElement.outerHTML;
    await page.setContent(html);
    let clip;
    if (opts.targetSelector) {
      clip = await page.evaluate(
        ({ targetSelector }) => {
          const target = document.querySelector(targetSelector);

          return target !== null && target instanceof HTMLElement
            ? {
                x: target.offsetLeft,
                y: target.offsetTop,
                width: target.offsetWidth,
                height: target.offsetHeight
              }
            : undefined;
        },
        { targetSelector: opts.targetSelector }
      );
    }

    const image = await page.screenshot({ clip });
    await browser.close();
    return Buffer.from(image);
  } catch (err: unknown) {
    throw new Error(err as string, { cause: err });
  } finally {
    // browser.close() resolving only means Chrome acknowledged the command
    // over DevTools - it doesn't guarantee the OS process tree actually
    // exited by the time we get here, so force-kill it to be sure (see the
    // comment on killByUserDataDir for why this matters).
    killByUserDataDir(userDataDir);
    // Windows doesn't always release Chrome's profile file locks (e.g. the
    // SQLite-backed "Affiliation Database"/"Account Web Data") immediately
    // after the process is gone, so a synchronous rmSync right after can
    // still race and throw EBUSY. maxRetries/retryDelay give the OS a
    // chance to catch up, but even so it's best-effort: a `finally` throw
    // would discard an already-successful screenshot and fail the test over
    // nothing but leftover temp-dir cleanup, so failures here are swallowed.
    try {
      rmSync(userDataDir, {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 200
      });
    } catch {
      // best-effort cleanup; the OS will reclaim the temp dir eventually
    }
  }
};
