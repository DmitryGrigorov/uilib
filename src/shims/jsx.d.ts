import type { JSX as ReactJSX } from "react";

// @types/react 19 stopped putting the JSX namespace in the global scope
// (everything moved under React.JSX to avoid global pollution). This
// codebase uses the bare `JSX.Element` return-type convention pervasively,
// so restore the global alias rather than touching every component.
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
