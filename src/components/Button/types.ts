import React from "react";

export const buttonViewTypeWithoutColor = ["ghost", "link", "icon"] as const;
export const buttonSize = ["l", "m", "s", "xs"] as const;
export const buttonPrimaryColor = ["red", "green", "yellow"] as const;
export const buttonSecondaryColor = ["gray"] as const;
export const buttonSizeDefault = buttonSize[0];

export type TButtonViewTypeWithoutColor =
  (typeof buttonViewTypeWithoutColor)[number];

export type TButtonSize = (typeof buttonSize)[number];

export type TButtonPrimaryColor = (typeof buttonPrimaryColor)[number];

export type TButtonSecondaryColor = (typeof buttonSecondaryColor)[number];

export interface IButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  size?: TButtonSize;
  href?: string;
  width?: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  testId?: string;
  isPressed?: boolean;
  isLoading?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}

export interface IButtonPropsPrimary extends IButtonBaseProps {
  viewType: "primary";
  color?: TButtonPrimaryColor;
}

export interface IButtonPropsSecondary extends IButtonBaseProps {
  viewType: "secondary";
  color?: TButtonSecondaryColor;
}

export interface IButtonPropsOther extends IButtonBaseProps {
  viewType: TButtonViewTypeWithoutColor;
}

export type IButtonProps = Partial<
  IButtonBaseProps &
    (IButtonPropsPrimary | IButtonPropsSecondary | IButtonPropsOther)
>;
