import type { JSX as ReactJSX } from "react";

// Same fix as src/shims/jsx.d.ts, duplicated here (rather than included via
// a relative path) so this workspace's tsc program doesn't pull in raw
// src/components source files and trip its own rootDir/outDir checks.
// Excluded from root's unified tsc program (see root tsconfig.json) since
// src/shims/jsx.d.ts already provides this globally there.
declare global {
  namespace JSX {
    type ElementType = ReactJSX.ElementType;
    type Element = ReactJSX.Element;
    type ElementClass = ReactJSX.ElementClass;
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty;
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute;
    type IntrinsicAttributes = ReactJSX.IntrinsicAttributes;
    type IntrinsicClassAttributes<T> = ReactJSX.IntrinsicClassAttributes<T>;
    type IntrinsicElements = ReactJSX.IntrinsicElements;
  }
}

export {};
