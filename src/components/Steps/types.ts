import { MouseEvent } from "react";

export type TStepsDirection = "horizontal" | "vertical";
export type TStepsSize = "l" | "m" | "s";
export type TStepsStatus =
  "waiting" | "error" | "warning" | "completed" | "default";

export interface IStepsItem {
  title?: string | JSX.Element;
  isDisabled?: boolean;
  status?: TStepsStatus;
  description?: string;
  key: number;
}

export type TStepOnChangeCurrent = (item: IStepsItem) => void;
export type TStepGetItemStatus = (item: IStepsItem) => TStepsStatus | undefined;
export type TStepOnClick = (event: MouseEvent, item: IStepsItem) => void;
export type TStepGetItemKey = (item: IStepsItem) => string | number | undefined;
export type TStepGetItemTitle = (item: IStepsItem) => string | undefined;
export type TStepGetItemDisabled = (item: IStepsItem) => boolean | undefined;
export type TStepGetItemOnClick = (
  item: IStepsItem
) => TStepOnClick | undefined;

export interface IStepsProps {
  steps: IStepsItem[];
  className?: string;
  classNameItem?: string;
  onItemClick?: TStepOnClick;
  onChangeCurrent?: TStepOnChangeCurrent;
  getItemStatus?: TStepGetItemStatus;
  getItemDisabled?: TStepGetItemDisabled;
  getItemTitle?: TStepGetItemTitle;
  getItemKey?: TStepGetItemKey;
  getItemOnClick?: TStepGetItemOnClick;
  current: number;
  size: TStepsSize;
  direction: TStepsDirection;
  width?: string;
  height?: string;
}
