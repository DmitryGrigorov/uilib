import { HSV } from "../../utils/colorConvectors/types";
import { hsvToRgb } from "../../utils/colorConvectors/hsvToRgb";

export const getRgbBackground = (hsv: HSV): string => {
  const { r, g, b } = hsvToRgb(hsv);
  return `${r} ${g} ${b}`;
};
