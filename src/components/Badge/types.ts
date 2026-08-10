import React from "react";

export type TBadgeSize = "m" | "l";
export type TBadgeColor = "blue" | "teal" | "red" | "amber" | "extra";

export interface IBadgeProps {
  className?: string;
  children?: React.ReactNode;
  colorType?: TBadgeColor;
  isDisabled?: boolean;
  size?: TBadgeSize;
  isClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
}
