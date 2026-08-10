import { ActionMeta } from "react-select";
import {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import { ISelectBaseCommonProps } from "../SelectBase/types";

export type TInstanceOnChange<TOption> = (
  newValue: TOption[],
  actionMeta: ActionMeta<TOption>
) => void;

export type TValueOnChange<
  TOption,
  TFieldNameValue extends TKeyObjectType<TOption>
> = (
  newValue: TValueObjectType<TOption, TFieldNameValue>[],
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

export type TMultiSelectProps<
  TOption = {
    label: string;
    value: string;
    url?: string;
    isDisabled?: boolean;
  },
  TFieldNameValue extends TKeyObjectType<TOption> = TKeyObjectType<TOption>,
  TFieldNameLabel extends TKeyObjectType<TOption> = TKeyObjectType<TOption>
> = Omit<
  ISelectBaseCommonProps<TOption, true, TFieldNameValue, TFieldNameLabel>,
  "onMenuInputFocus"
> &
  TOnChangeSelect<TOption, TFieldNameValue>;
