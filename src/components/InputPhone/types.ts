import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import {
  TInputAlignText,
  TInputSize,
  TStatusInput,
  TViewTypeInput
} from "../InputBase/interfaces";
import { TDirection } from "../helpers/getPosition/types";

export interface IInputPhoneProps {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isAutoFocus?: boolean;
  value?: string;
  id?: string;
  name?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string,
    id?: string
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  testId?: string;
  tooltipPosition?: TDirection;
  status?: TStatusInput;
  statusText?: string;
  size?: TInputSize;
  alignText?: TInputAlignText;
  error?: string | boolean;
  placeholder?: string;
  tooltipContent?: string;
  title?: string;
  className?: string;
  isRequired?: boolean;
  isShowClearIcon?: boolean;
  viewType?: TViewTypeInput;
  autoComplete?: string;
  form?: string;
  list?: string;
  accessKey?: string;
  width?: string;
}
