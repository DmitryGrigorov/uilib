import { MouseEvent } from "react";
import { ITheme } from "../Pallette/themes";
import { TDirection } from "../helpers/getPosition/types";

export const inputSize = ["l", "m"] as const;
export const inputViewType = ["round", "line"] as const;
export const inputStatus = ["error", "warning", "success"] as const;

export type TInputSize = (typeof inputSize)[number];
export type TTypeInput =
  "text" | "password" | "tel" | "number" | "file" | "email" | "url" | "search";
export type TInputAlignText = "left" | "right" | "center";

export type TViewTypeInput = (typeof inputViewType)[number];

export type TStatusInput = (typeof inputStatus)[number];
export type TPlaceholder = string | [string, string];

export interface IInputBaseProps {
  tooltipPosition?: TDirection;
  type?: TTypeInput;
  status?: TStatusInput;
  statusText?: string;
  size?: TInputSize;
  alignText?: TInputAlignText;
  error?: string | boolean;
  placeholder?: TPlaceholder;
  tooltipContent?: string;
  title?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  onIconRightClick?: () => void;
  onIconLeftClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  isShowClearIcon?: boolean;
  isShowMask?: boolean;
  width?: string;
  isRequired?: boolean;
  classNameIconBox?: string;
  isShowLabel?: boolean;
  classNameAddonsRight?: string;
  classNameContent?: string;
  classNamePlaceholder?: string;
  viewType?: TViewTypeInput;
  readOnlyEmptyText?: string;
}

export interface ISharedInputBase extends IInputBaseProps {
  isFocused: boolean;
  isPasswordVisible?: boolean;
  isHasValue: boolean;
  onClear?: (event: MouseEvent<HTMLDivElement>) => void;
  onPasswordToggle?: () => void;
  testId?: string;
  isReadOnly?: boolean;
}

export interface IIconsBox {
  isHasValue: boolean;
  isDisabled?: boolean;
  type?: TTypeInput;
  isPasswordVisible?: boolean;
  tooltipContent?: string;
  tooltipPosition?: TDirection;
  isShowClearIcon?: boolean;
  onClear?: (event: MouseEvent<HTMLDivElement>) => void;
  onPasswordToggle?: () => void;
  testId?: string;
  classNameIconBox?: string;
  isReadOnly?: boolean;
  isRightContent?: boolean;
  size?: TInputSize;
}

export interface IInput {
  theme: ITheme;
  status?: TStatusInput;
  isFocused?: boolean;
}

export interface IInputWrapperProps extends IInput {
  isDisabled?: boolean;
  isFocused: boolean;
  size?: TInputSize;
  width?: string;
  alignText?: TInputAlignText;
  status?: TStatusInput;
  isReadOnly?: boolean;
  isHasValue: boolean;
  viewType?: TViewTypeInput;
  statusText?: string;
  error?: string | boolean;
  theme: ITheme;
}

export interface IPlaceholder extends IInput {
  size?: TInputSize;
  isHasValue: boolean;
  isDisabled?: boolean;
  isFocused: boolean;
  error?: string | boolean;
  status?: TStatusInput;
  iconLeft?: boolean;
  iconRight?: boolean;
  isReadOnly?: boolean;
}

export interface IStylesIcon extends IInput {
  isHasValue?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  isFocused: boolean;
}
