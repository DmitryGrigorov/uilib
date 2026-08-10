import React from "react";
export const buttonSize = ["s", "xs"] as const;
export const buttonSizeDefault = buttonSize[0];

export type TButtonSize = (typeof buttonSize)[number];

export interface ITableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  size?: TButtonSize;
  href?: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isPressed?: boolean;
}
