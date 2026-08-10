import React from "react";

export enum LabelStatus {
  Filled = "filled",
  Info = "info",
  Focused = "focused",
  Error = "error",
  Success = "success",
  Warning = "warning"
}

export const labelStatus = [
  "filled",
  "info",
  "focused",
  "error",
  "success",
  "warning"
] as const;

export type TLabelStatus = (typeof labelStatus)[number];

export type TLabelSize = "m" | "s";

export interface ILabelProps {
  children?: string;
  status: TLabelStatus;
  size?: TLabelSize;
  isRequired?: boolean;
  icon?: JSX.Element;
  isIcon?: boolean;
  isDisabled?: boolean;
  as?: React.ElementType;
  className?: string;
  testId?: string;
}

export type TLabelIcon = Record<TLabelStatus, React.ElementType>;
