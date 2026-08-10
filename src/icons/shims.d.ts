import "styled-components";

// Icons is a standalone package (no dependency on @dmitrygrigorov/components),
// so this only needs the one optional property its own styles.ts reads off
// the theme, not the full ITheme shape.
// The JSX-namespace fix lives in ./shims-jsx.d.ts (kept separate so root's
// unified tsc program, which already has src/shims/jsx.d.ts in scope, can
// exclude just the JSX half here without losing this theme augmentation).
declare module "styled-components" {
  export interface DefaultTheme {
    colorIcon?: string;
  }
}

export {};
