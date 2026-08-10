import React from "react";

export const calculateChange = (
  e: MouseEvent | React.MouseEvent<HTMLButtonElement>,
  container: HTMLDivElement
): number => {
  const containerWidth = container.clientWidth;

  const x = e.pageX;
  const left = x - (container.getBoundingClientRect().left + window.scrollX);

  let alpha: number;

  if (left < 0) {
    alpha = 0;
  } else if (left > containerWidth) {
    alpha = 100;
  } else {
    const percent = (left * 100) / containerWidth;
    alpha = (100 * percent) / 100;
  }

  return Math.round(alpha);
};
