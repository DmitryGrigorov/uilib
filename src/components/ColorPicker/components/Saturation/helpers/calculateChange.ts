import React from "react";
import { HSV, HSL } from "../../../../utils/colorConvectors/types";

export const calculateChange = (
  e: MouseEvent | React.MouseEvent | React.TouchEvent<HTMLDivElement>,
  hsl: HSL,
  container: HTMLDivElement
): HSV => {
  const { width: containerWidth, height: containerHeight } =
    container.getBoundingClientRect();

  let x = 0;
  let y = 0;

  if ("pageX" in e) {
    x = e.pageX;
  }
  if ("pageY" in e) {
    y = e.pageY;
  }

  let left = x - (container.getBoundingClientRect().left + window.scrollX);
  let top = y - (container.getBoundingClientRect().top + window.scrollY);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  const saturation = left / containerWidth;
  const bright = 1 - top / containerHeight;

  return {
    h: hsl.h,
    s: saturation,
    v: bright
  };
};
