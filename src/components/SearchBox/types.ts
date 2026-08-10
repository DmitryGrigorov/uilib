import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  Ref,
  CSSProperties,
  FocusEvent
} from "react";
import { ITheme } from "../Pallette/themes";
import { TViewTypeInput } from "../InputBase/interfaces";

export interface ISearchBoxIdentifiersHandlers {
  id?: string | number;
  name?: string;
}

export const searchBoxSize = ["l", "m"] as const;

export const searchBoxStatus = ["error"] as const;

export const searchBoxType = ["global", "basic"] as const;

export type TSearchBoxSize = (typeof searchBoxSize)[number];

export type TSearchBoxStatus = (typeof searchBoxStatus)[number];

export type TSearchBoxType = (typeof searchBoxType)[number];
export interface ISearchBoxProps {
  placeholder?: string;
  isDisabled?: boolean;
  size?: TSearchBoxSize;
  value?: string;
  status?: TSearchBoxStatus;
  statusText?: string;
  isStatusIcon?: boolean;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string,
    identifiers: ISearchBoxIdentifiersHandlers
  ) => void;
  id?: string | number;
  name?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  isFocused?: boolean;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  tabIndex?: number;
  inputRef?: Ref<HTMLInputElement>;
  width?: string;
  className?: string;
  style?: CSSProperties;
  onKeyDown?: (
    event: KeyboardEvent<HTMLInputElement>,
    value: string,
    identifiers: ISearchBoxIdentifiersHandlers
  ) => void;
  wait?: number;
  type?: TSearchBoxType;
  viewType?: TViewTypeInput;
  testId?: string;
}

export interface ISearchBox {
  theme: ITheme;
  status?: "error";
  statusText?: string;
  isStatusIcon?: boolean;
  width?: string;
}

export interface ISearchBoxComponent extends ISearchBox {
  size: TSearchBoxSize;
  isFocused?: boolean;
  isDisabled?: boolean;
  error?: string | boolean;
  viewType?: TViewTypeInput;
  isHasValue: boolean;
}
