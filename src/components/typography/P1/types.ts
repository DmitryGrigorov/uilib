export type TP1FontSize = 20 | 16 | 14;
export type TP1FontType = "aquilla" | "phoenix" | "cygnus";

export interface IP1Props {
  type: TP1FontType;
  size?: TP1FontSize;
  color?: string;
  onClick?: (event: any) => void;
  as?: keyof JSX.IntrinsicElements | undefined;
  title?: string;
}
