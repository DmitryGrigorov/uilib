import React from "react";

export type TDateBoxViewType =
  "current" | "selected" | "start" | "in" | "finish" | "weekend";

export interface IDateBoxProps {
  viewType?: TDateBoxViewType;
  isDisabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: TDateBoxSize;
}

export type TDateBoxSize = "l" | "m";
