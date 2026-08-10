#!/usr/bin/env node
/**
 * Minimal chromium-cli-style driver for uilib, built on the project's own
 * `puppeteer` devDependency (already used by the Jest visual-regression
 * suite, so its Chromium binary is already present — no separate browser
 * install needed).
 *
 * Reads newline-separated commands from stdin (or a file given as argv[2])
 * and runs them against one headless page, mirroring chromium-cli's
 * vocabulary closely enough that the two are interchangeable in docs.
 *
 * Commands:
 *   nav <url>                    goto url, wait for network to go idle
 *   wait-for text=<text>         wait until <text> appears anywhere in the page
 *   wait-for <selector>          wait until a CSS selector matches
 *   click <selector>             click a CSS selector
 *   click text=<text>            click the first element whose text matches
 *   fill <selector> <value...>   focus + type into a CSS selector
 *   press <key>                  press a keyboard key (e.g. Enter)
 *   screenshot [name]            save a PNG to ./screenshots/<name|seq>.png
 *   console-errors               print all console.error/pageerror seen so far
 *   eval <js>                    page.evaluate(js) and print the JSON result
 *   sleep <ms>                   raw wait, escape hatch only
 *
 * Usage:
 *   node driver.mjs script.txt
 *   node driver.mjs <<'EOF'
 *   nav http://localhost:6006
 *   wait-for text=Button
 *   screenshot button-story
 *   EOF
 */
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = path.join(__dirname, "screenshots");
fs.mkdirSync(SHOTS_DIR, { recursive: true });

const readScript = () => {
  const file = process.argv[2];
  const raw = file ? fs.readFileSync(file, "utf8") : fs.readFileSync(0, "utf8");
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
};

const consoleLog = [];

const findByText = async (page, text) =>
  page.evaluateHandle((needle) => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT
    );
    let node = walker.currentNode;
    while (node) {
      if (
        node.children.length === 0 &&
        node.textContent &&
        node.textContent.includes(needle)
      ) {
        return node;
      }
      node = walker.nextNode();
    }
    return null;
  }, text);

async function run() {
  const commands = readScript();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--font-render-hinting=none"]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleLog.push(`[console.error] ${msg.text()}`);
    }
  });
  page.on("pageerror", (err) => consoleLog.push(`[pageerror] ${err.message}`));

  let shotSeq = 0;
  let exitCode = 0;

  for (const line of commands) {
    const [cmd, ...rest] = line.split(" ");
    const arg = rest.join(" ");
    try {
      if (cmd === "nav") {
        await page.goto(arg, { waitUntil: "networkidle2", timeout: 60000 });
        console.log(`[nav] ${arg} -> ${page.url()}`);
      } else if (cmd === "wait-for") {
        if (arg.startsWith("text=")) {
          const text = arg.slice("text=".length);
          await page.waitForFunction(
            (needle) => document.body.innerText.includes(needle),
            { timeout: 30000 },
            text
          );
          console.log(`[wait-for] text="${text}" found`);
        } else {
          await page.waitForSelector(arg, { timeout: 30000 });
          console.log(`[wait-for] selector="${arg}" found`);
        }
      } else if (cmd === "click") {
        if (arg.startsWith("text=")) {
          const handle = await findByText(page, arg.slice("text=".length));
          const el = handle.asElement();
          if (!el) throw new Error(`no element with text "${arg.slice(5)}"`);
          await el.click();
        } else {
          await page.click(arg);
        }
        console.log(`[click] ${arg}`);
      } else if (cmd === "fill") {
        const [selector, ...valueParts] = rest;
        const value = valueParts.join(" ");
        await page.focus(selector);
        await page.evaluate((sel) => {
          document.querySelector(sel).value = "";
        }, selector);
        await page.type(selector, value);
        console.log(`[fill] ${selector} = "${value}"`);
      } else if (cmd === "press") {
        await page.keyboard.press(arg);
        console.log(`[press] ${arg}`);
      } else if (cmd === "screenshot") {
        shotSeq += 1;
        const name = arg || `shot-${shotSeq}`;
        const outPath = path.join(SHOTS_DIR, `${name}.png`);
        await page.screenshot({ path: outPath });
        console.log(`[screenshot] ${outPath}`);
      } else if (cmd === "console-errors") {
        if (consoleLog.length === 0) {
          console.log("[console-errors] none");
        } else {
          console.log(`[console-errors]\n${consoleLog.join("\n")}`);
        }
      } else if (cmd === "eval") {
        const result = await page.evaluate(arg);
        console.log(`[eval] ${JSON.stringify(result)}`);
      } else if (cmd === "sleep") {
        await new Promise((r) => setTimeout(r, Number(arg)));
        console.log(`[sleep] ${arg}ms`);
      } else {
        console.log(`[skip] unknown command: ${line}`);
      }
    } catch (err) {
      console.error(`[error] "${line}": ${err.message}`);
      exitCode = 1;
    }
  }

  await browser.close();
  process.exit(exitCode);
}

run();
