import "styled-components";
import type { ITheme } from "@dmitrygrigorov/components";

// Same fix as src/shims/styles.d.ts, duplicated here (rather than included
// via a relative path) so this workspace's tsc program doesn't pull in raw
// src/components source files and trip its own rootDir/outDir checks.
// The JSX-namespace fix lives in ./shims-jsx.d.ts (kept separate so root's
// unified tsc program, which already has src/shims/jsx.d.ts in scope, can
// exclude just the JSX half here without losing this theme augmentation).
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ITheme {}
}

export {};
