import { HSV } from "./types";
import { hsvToRgb } from "./hsvToRgb";
import { rgbToHex } from "./rgbToHex";

export const hsvToHex = (hsv: HSV): string => {
  const rgb = hsvToRgb(hsv);
  return rgbToHex(rgb);
};
