export type TAlignMode = "left" | "right" | "top" | "bottom" | "center";

export interface IPosition {
  top: number;
  left: number;
}

export type TDirection =
  | "topRight"
  | "topLeft"
  | "top"
  | "bottomRight"
  | "bottomLeft"
  | "bottom"
  | "right"
  | "rightTop"
  | "rightBottom"
  | "left"
  | "leftTop"
  | "leftBottom";

export interface IComponentSizeAndPosition {
  width: number;
  height: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  x: number;
  y: number;
}
