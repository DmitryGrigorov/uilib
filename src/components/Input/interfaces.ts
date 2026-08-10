import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";

import {
  IInputBaseProps,
  TStatusInput,
  TTypeInput
} from "../InputBase/interfaces";

export type TInputMode =
  "decimal" | "numeric" | "email" | "none" | "search" | "tel" | "url" | "text";

export interface IInputProps extends IInputBaseProps {
  id?: string;
  value?: string;
  isAutoFill?: boolean;
  isAutoFocus?: boolean;
  isAutoSelect?: boolean;
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
  maxLength?: number;
  inputMode?: TInputMode;
  pattern?: string;
  testId?: string;
  status?: TStatusInput;
  statusText?: string;
  isReadOnly?: boolean;
  autoComplete?: string;
  type?: TTypeInput;
  form?: string;
  list?: string;
  accessKey?: string;
}

export interface IShared {
  id?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  autoFocus?: boolean;
  value: string;
  inputMode?: TInputMode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  pattern?: string;
  status?: TStatusInput;
  statusText?: string;
  readOnly?: boolean;
  autoComplete?: string;
  type?: TTypeInput;
  form?: string;
  list?: string;
  accessKey?: string;
}
