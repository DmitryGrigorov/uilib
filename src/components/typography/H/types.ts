export type THFontSize = 64 | 56 | 40 | 32 | 28 | 24 | 20 | 16;
export type THFontType =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpius"
  | "capricornus"
  | "saggitarius";
type THFontTag = "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface IHProps {
  type?: THFontType;
  fontFamily?: string;
  size?: THFontSize;
  color?: string;
  onClick?: (event: any) => void;
  as?: THFontTag;
}
