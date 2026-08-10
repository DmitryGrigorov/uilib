import {
  ChangeEvent,
  Ref,
  FocusEventHandler,
  KeyboardEvent,
  ReactNode
} from "react";

export interface ICheckBoxProps {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  label?: ReactNode;
  name?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
    isChecked: boolean
  ) => void;
  className?: string;
  tabIndex?: number;
  inputRef?: Ref<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  testId?: string;
}
