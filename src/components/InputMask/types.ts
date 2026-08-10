import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, Ref } from "react";
import { IMaskMixinProps, IMaskInput, IMask } from "react-imask";

import { IInputBaseProps } from "../InputBase/interfaces";

export type TMask = IMaskMixinProps<HTMLInputElement>["mask"];
export const InputMaskTypes = IMask;
export interface IInputMaskProps extends Omit<IInputBaseProps, "isShowLabel"> {
  isReadOnly?: boolean;
  isShowMask?: boolean;
  isShowMaskOnFocus?: boolean;
  isAutoFocus?: boolean;
  placeholderChar?: string;
  value?: string;
  id?: string;
  name?: string;
  mask: TMask;
  blocks?: object;
  pattern?: string;
  onChange?: (
    event:
      ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement> | InputEvent,
    value: string,
    id?: string
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  testId?: string;
  refMask?: TRefMask;
  onClear?: (event: MouseEvent<HTMLDivElement>) => void;
  autoComplete?: string;
  form?: string;
  list?: string;
  accessKey?: string;
}

export type TRefMask = Ref<typeof IMaskInput>;
