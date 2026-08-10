import { FocusEvent, KeyboardEvent, SyntheticEvent } from "react";

import { IInputBaseProps } from "../InputBase/interfaces";

export type TType = "text" | "tel";

export interface NumberFormatValues {
  floatValue: number | undefined;
  formattedValue: string;
  value: string;
}
export interface IInputNumberProps extends Partial<IInputBaseProps> {
  value?: string | number | undefined; // TODO: remove string support over time.
  decimalScale?: number;
  testId?: string;
  type?: TType;
  isNegative?: boolean;
  id?: string;
  maxLength?: number;
  name?: string;
  suffix?: string;
  thousandSeparator?: string;
  decimalSeparator?: string;
  isFixedDecimalScale?: boolean;
  isAutoFocus?: boolean;
  onChange?: (
    event: SyntheticEvent,
    value: number | undefined,
    id?: string
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: number) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onValueChange?: (values: NumberFormatValues) => void;
  step?: number;
  min?: number;
  max?: number;
  isReadOnly?: boolean;
  autoComplete?: string;
  form?: string;
  list?: string;
  accessKey?: string;
}
