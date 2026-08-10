import { InputActionMeta, SelectInstance } from "react-select";
import { KeyboardEventHandler, ReactNode, RefObject } from "react";
import {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import {
  TPlaceholder,
  TInputSize,
  TStatusInput,
  TViewTypeInput
} from "../InputBase/interfaces";
import { ITheme } from "../Pallette/themes";

export interface IPropsItem {
  label: string | number | null;
  value: string | number | null;
  isDisabled?: boolean;
  url?: string;
  [propName: string]: any;
}

export interface IItem extends IPropsItem {
  isSelected?: boolean;
}

export interface ISelectBaseCommonProps<
  TOption = unknown,
  IsMulti extends boolean = boolean,
  TFieldNameValue extends TKeyObjectType<TOption> = TKeyObjectType<TOption>,
  TFieldNameLabel extends TKeyObjectType<TOption> = TKeyObjectType<TOption>
> {
  size?: TInputSize;
  placeholder?: TPlaceholder;
  name?: string;
  width?: string;
  options?: TOption[];
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  onBlur?: (value: any) => void;
  onFocus?: (e: any) => void;
  isDisabled?: boolean;
  menuIsOpen?: boolean;
  defaultValue?: IsMulti extends true ? TOption[] : TOption;
  isClearable?: boolean;
  isError?: boolean;
  isSearchable?: boolean;
  errorMessage?: string;
  value?: IsMulti extends true
    ? TOption[] | TValueObjectType<TOption, TFieldNameValue>[]
    : TOption | TValueObjectType<TOption, TFieldNameValue>;
  className?: string;
  onInnerMenuOpen?: (clientRect: ClientRect) => void;
  isRequired?: boolean;
  status?: TStatusInput;
  statusText?: string;
  fieldNames?: { label: TFieldNameLabel; value: TFieldNameValue };
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  isAutoFocus?: boolean;
  onKeyDown?: KeyboardEventHandler;
  id?: string;
  /** Associates the internal react-select input with an external label. */
  inputId?: string;
  type?: "avatar" | "basic";
  isDrawer?: boolean;
  viewType?: TViewTypeInput;
  isReadOnly?: boolean;
  testId?: string;
  buttonMenu?: JSX.Element;
  classNameButtonMenu?: string;
  onMenuInputFocus?: () => void;
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
  selectRef?: TSelectInstanceRef<TOption, IsMulti>;
}

export type TSelectInstanceRef<
  TOption = unknown,
  IsMulti extends boolean = boolean
> = RefObject<SelectInstance<TOption, IsMulti>> | null | undefined;

export interface ISelectStyle extends ISelectBaseCommonProps {
  menuIsOpen?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  hasValue?: boolean;
  isError?: boolean;
  width?: string;
  theme: ITheme;
  ref?: TSelectInstanceRef;
  iconRight?: JSX.Element;
  isMulti: boolean;
}
