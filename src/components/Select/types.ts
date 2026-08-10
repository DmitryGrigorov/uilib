import { OnChangeValue, ActionMeta } from "react-select";
import {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import { ISelectBaseCommonProps } from "../SelectBase/types";

export type TInstanceOnChange<TOption> = (
  newValue: OnChangeValue<TOption, false>,
  actionMeta: ActionMeta<TOption>
) => void;

export type TValueOnChange<
  TOption,
  TFieldNameValue extends TKeyObjectType<TOption> = TKeyObjectType<TOption>
> = (
  newValue: TValueObjectType<TOption, TFieldNameValue> | null,
  actionMeta: ActionMeta<TOption>
) => void;

type TOnChangeSelect<TOption, TFieldNameValue extends TKeyObjectType<TOption>> =
  | {
      onChange?: TInstanceOnChange<TOption>;
      onChangeReturnType: "instance";
    }
  | {
      onChange?: TValueOnChange<TOption, TFieldNameValue>;
      onChangeReturnType: "value";
    }
  | {
      onChange?: TInstanceOnChange<TOption>;
      onChangeReturnType?: never;
    };

export type TSelectProps<
  TOption = {
    label: string;
    value: string;
    url?: string;
    isDisabled?: boolean;
  },
  TFieldNameValue extends TKeyObjectType<TOption> = TKeyObjectType<TOption>,
  TFieldNameLabel extends TKeyObjectType<TOption> = TKeyObjectType<TOption>
> = Omit<
  ISelectBaseCommonProps<TOption, false, TFieldNameValue, TFieldNameLabel>,
  "onMenuInputFocus"
> &
  TOnChangeSelect<TOption, TFieldNameValue>;
