export type TP2FontSize = 20 | 16 | 14 | 12 | 10;
export type TP2FontType =
  | "pisces"
  | "aquarius"
  | "corvus"
  | "lynx"
  | "cetus"
  | "pavo"
  | "musca"
  | "columba";

export interface IP2Props {
  type: TP2FontType;
  size?: TP2FontSize;
  color?: string;
  onClick?: (event: any) => void;
  as?: keyof JSX.IntrinsicElements;
}
