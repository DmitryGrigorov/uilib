import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent
} from "react";
import { ITheme } from "../Pallette/themes";
import { ILocale } from "../Calendar/interfaces";
import { TInputSize, TViewTypeInput } from "../InputBase";

export type TPlaceholder = string | [string, string];

export interface IDatePickerProps {
  id?: string;
  idCalendar?: string;
  isCalendar?: boolean;
  placeholder?: TPlaceholder;
  locale?: ILocale;
  isRangeMode?: boolean;
  minDate?: string;
  maxDate?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string,
    id?: string
  ) => void;
  value?: string;
  name?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
  onDateSelected?: (value: string) => void;
  isShowMask?: boolean;
  isAutoFill?: boolean;
  isAutoFocus?: boolean;
  isAutoSelect?: boolean;
  placeholderChar?: string;
  title?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  className?: string;
  isDisabled?: boolean;
  testId?: string;
  width?: string;
  status?: "error" | "warning" | "success";
  size?: TInputSize;
  statusText?: string;
  isRequired?: boolean;
  isShowClearIcon?: boolean;
  isGuide?: boolean;
  isReadOnly?: boolean;
  viewType?: TViewTypeInput;
  onClear?: (event: React.MouseEvent<HTMLDivElement>) => void;
  autoComplete?: string;
  form?: string;
  list?: string;
  accessKey?: string;
}

export interface IInputDateProps {
  placeholder?: TPlaceholder;
  value: string;
  toggleCalendar?: () => void;
  onDateChange?: (
    event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
    value: string,
    id?: string
  ) => void;
  isRangeMode?: boolean;
  error?: string;
  pipe?: (
    conformedValue: string,
    config: any
  ) => false | string | { value: string; indexesOfPipedChars: number[] };
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  testId?: string;
  autoComplete?: string;
  form?: string;
  list?: string;
  accessKey?: string;
}

export interface IStylesProps {
  theme: ITheme;
}

export interface IStInputDate {
  isCalendarShown?: boolean;
}
