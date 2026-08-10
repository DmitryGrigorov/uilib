import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import {
  IInputBaseProps,
  TInputAlignText,
  TInputSize,
  TStatusInput
} from "../InputBase/interfaces";
import { TDirection } from "../helpers/getPosition/types";

export interface ITextareaProps extends IInputBaseProps {
  id?: string;
  value?: string;
  isAutoFocus?: boolean;
  name?: string;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement> | MouseEvent<HTMLDivElement>,
    value: string,
    id?: string
  ) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
  testId?: string;
  statusText?: string;
  tooltipPosition?: TDirection;
  status?: TStatusInput;
  size?: TInputSize;
  alignText?: TInputAlignText;
  error?: string | boolean;
  placeholder?: string;
  tooltipContent?: string;
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isShowClearIcon?: boolean;
  rows?: number;
  cols?: number;
  minRows?: number;
  maxRows?: number;
  isAutoSize?: boolean;
  iconLeft?: JSX.Element;
  statusLabel?: string;
  isReadOnly?: boolean;
  readOnlyEmptyText?: string;
}
