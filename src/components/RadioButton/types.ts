import {
  KeyboardEvent,
  MouseEvent,
  Ref,
  ReactNode,
  FocusEventHandler
} from "react";

export interface IRadioButtonProps {
  value?: string | number;
  label?: ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  name?: string;
  isError?: boolean;
  onChange?: (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>,
    value?: string | number
  ) => void;
  onClick?: (
    event: MouseEvent<HTMLDivElement>,
    value?: string | number
  ) => void;
  className?: string;
  inputRef?: Ref<HTMLInputElement>;
  inputId?: string;
  testId?: string;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}
