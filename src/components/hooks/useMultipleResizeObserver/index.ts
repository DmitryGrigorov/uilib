import React, { RefObject, useLayoutEffect } from "react";

export const useMultipleResizeObserver = <
  Element extends HTMLElement | SVGGraphicsElement,
  ReturnType
>(
  refs: Array<RefObject<Element | null>>,
  mapper: (el: Element | null) => ReturnType,
  callback?: (entry: DOMRectReadOnly) => void
): ReturnType[] => {
  // Seeds initial dimensions from whatever DOM nodes the refs already hold
  // (e.g. a ref pre-populated with `document.body`); ResizeObserver takes
  // over from there for any refs not yet attached.
  /* eslint-disable react-hooks/refs */
  const [dimensions, setDimensions] = React.useState<ReturnType[]>(() =>
    refs.map((ref) => mapper(ref.current))
  );
  /* eslint-enable react-hooks/refs */

  const mapperRef = React.useRef(mapper);

  useLayoutEffect(() => {
    mapperRef.current = mapper;
  }, [mapper]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (callback) {
          callback(entry.contentRect);
        }
      }
      setDimensions(refs.map((ref) => mapperRef.current(ref.current)));
    });

    for (const ref of refs) {
      ref.current && resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return dimensions;
};
