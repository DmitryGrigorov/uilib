import { ChangeEvent, KeyboardEvent } from "react";

export const checkBoxGroupStatus = ["error", "warning", "success"] as const;

export type TStatusCheckBoxGroup = (typeof checkBoxGroupStatus)[number];

export interface ICheckBoxGroupProps {
  className?: string;
  options: ICheckGroupOption[];
  value?: Array<ICheckBoxGroupValue>;
  onChange?: (
    event: ChangeEvent | KeyboardEvent,
    value: Array<ICheckBoxGroupValue>
  ) => void;
  classNameCheckBox?: string;
  direction?: "column" | "row";
  isDisabled?: boolean;
  name?: string;
  status?: TStatusCheckBoxGroup;
  statusText?: string;
  headerText?: string;
  testId?: string;
}

export interface ICheckGroupOption {
  label: string;
  value: ICheckBoxGroupValue;
  isDisabled?: boolean;
}

export type ICheckBoxGroupValue = string | number;
