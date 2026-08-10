import { HSV, HSL } from "../../../utils/colorConvectors/types";

export interface ISaturationProps {
  hsv: HSV;
  hsl: HSL;
  setHsv: (hsv: HSV) => void;
  setColorInput: (color: string) => void;
}
