import React from "react";
import { HSL } from "../../../../utils/colorConvectors/types";

export const calculateChange = (
  e: MouseEvent | React.MouseEvent<HTMLButtonElement>,
  hsl: HSL,
  container: HTMLDivElement
): HSL => {
  const containerWidth = container.clientWidth;
  const x = e.pageX;
  const left = x - (container.getBoundingClientRect().left + window.scrollX);

  let h: number;
  if (left < 0) {
    h = 0;
  } else if (left > containerWidth) {
    h = 360;
  } else {
    const percent = (left * 100) / containerWidth;
    h = (360 * percent) / 100;
  }

  return {
    h: Math.round(h),
    s: hsl.s,
    l: hsl.l
  };
};
