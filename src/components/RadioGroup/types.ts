import { MouseEvent, ReactElement, KeyboardEvent } from "react";
import { IRadioButtonProps } from "../RadioButton/types";

export const radionGroupStatus = ["error", "warning", "success"] as const;

export type TStatusRadioGroup = (typeof radionGroupStatus)[number];

export interface IRadioGroupProps {
  name?: string;
  value?: string | null | number | undefined;
  onChange?: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
    value?: string | number
  ) => void;
  onClick?: (
    event: MouseEvent<HTMLDivElement>,
    value?: string | number
  ) => void;
  children?: JSX.Element | JSX.Element[];
  direction?: "column" | "row";
  options?: IRadioGroupOption[];
  className?: string;
  classNameButton?: string;
  isDisabled?: boolean;
  status?: TStatusRadioGroup;
  statusText?: string;
  headerText?: string;
  testId?: string;
}

export interface IRadioGroupOption {
  value: string | number;
  label: string | JSX.Element;
  isDisabled?: boolean;
}

export interface IRadioGroupOptionContext {
  groupValue: string | null | number | undefined;
  onChange: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
    value?: string | number
  ) => void;
  onClick: (event: MouseEvent<HTMLDivElement>, value?: string | number) => void;
}

export interface IRadioGroupOptionProps extends IRadioButtonProps {
  children?: ReactElement<IRadioButtonProps>;
}
