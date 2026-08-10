import { HSV, HSL } from "../../../utils/colorConvectors/types";

export interface IHueProps {
  hsl: HSL;
  hsv: HSV;
  setHsl: (hsl: HSL) => void;
  setHsv: (hsv: HSV) => void;
  setColorInput: (color: string) => void;
}
