import React from "react";

export const COLOR_TYPE_STATUS = [
  "blue",
  "cyan",
  "green",
  "yellow",
  "purple",
  "teal",
  "neutral",
  "amber",
  "red"
] as const;

export type TCompStatus =
  "processing" | "completed" | "warning" | "success" | "error";

export type TColorTypeStatus = (typeof COLOR_TYPE_STATUS)[number];

export interface IStatusProps extends Omit<
  React.HTMLProps<HTMLDivElement>,
  "as" | "children"
> {
  children?: React.ReactNode;
  isFilled?: boolean;
  colorType?: TColorTypeStatus;
  status?: TCompStatus;
  width?: string;
  leadIcon?: JSX.Element;
  trailIcon?: JSX.Element;
  className?: string;
  isDisabled?: boolean;
  isPressed?: boolean;
  canHover?: boolean;
  testId?: string;
}
