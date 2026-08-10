import React, { CSSProperties } from "react";

export type TSize = "l" | "m";

export interface ITabProps {
  icon?: JSX.Element;
  label?: string;
  className?: string;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLazy?: boolean;
  isDisabled?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
  size?: TSize;
  testId?: string;
  isSelected?: boolean;
}
