import { useMemo, RefObject } from "react";

import { useMultipleResizeObserver } from "../useMultipleResizeObserver";

interface IComponentSize {
  width: number;
  height: number;
}

const getElementSize = (
  el: HTMLElement | SVGGraphicsElement | null
): IComponentSize => {
  if (!el) {
    return { width: 0, height: 0 };
  }

  const { width, height } = el.getBoundingClientRect();

  return {
    width: Math.floor(width),
    height: Math.floor(height)
  };
};

export function useComponentSize(
  ref: RefObject<HTMLElement | SVGGraphicsElement>
): IComponentSize {
  const refs = useMemo(
    () => [ref],
    // Refresh subscriptions when the ref starts pointing to a different element.
    [ref.current]
  );
  const [componentSize] = useMultipleResizeObserver(refs, getElementSize);
  return componentSize;
}
