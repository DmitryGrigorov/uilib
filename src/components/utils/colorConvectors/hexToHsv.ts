import { HSV } from "./types";
import { hexToRgb } from "./hexToRgb";
import { rgbToHsv } from "./rgbToHsv";

export const hexToHsv = (hex: string): HSV | null => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return null;
  }
  return rgbToHsv(rgb);
};
