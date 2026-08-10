export type TStatusDivider =
  | "default"
  | "active"
  | "filled"
  | "disabled"
  | "error"
  | "warning"
  | "success";

export interface IPropsDivider {
  id?: string;
  className?: string;
  status?: TStatusDivider;
  direction?: "row" | "column";
  align?: "left" | "right" | "center";
  testId?: string;
  width?: string;
  height?: string;
  children?: JSX.Element | string;
}
