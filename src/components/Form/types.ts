import React from "react";
import { RuleItem } from "async-validator";
import type {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";

export type TRenderProps<TValues = Record<string, any>> = (
  values: TValues,
  form: IFormInstance<TValues>
) => JSX.Element | React.ReactNode;

export interface IFormProps<TValues = Record<string, any>> {
  initialValues?: TValues;
  form?: IFormInstance<TValues>;
  children?: TRenderProps<TValues> | React.ReactNode;
  component?: string | React.FC<any>;
  name?: string;
  onValuesChange?: IFormCallbacks<TValues>["onValuesChange"];
  onFinish?: IFormCallbacks<TValues>["onFinish"];
  onFinishFailed?: IFormCallbacks<TValues>["onFinishFailed"];
  className?: string;
  validateTrigger?: string | string[];
  validateMessages?: IValidateMessages;
  isDotSeparator?: boolean;
  onFieldChange?: IFormCallbacks<TValues>["onFieldChange"];
}

export interface IFormInstance<TValues = Record<string, any>> {
  getFieldValue: <P extends TKeyObjectType<TValues>>(
    name: P | [string, string]
  ) => TValueObjectType<TValues, P> | undefined;
  getFieldsValue: <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ) => TValues | Partial<TValues>;
  resetFields: <P extends TKeyObjectType<TValues>>(fields?: P[]) => void;
  setFields: (fields: IFieldData<TValues>[]) => void;
  setFieldValue: <P extends TKeyObjectType<TValues>>(
    name: P | [string, string],
    value: TValueObjectType<TValues, P>
  ) => void;
  setFieldsValue: (values: Partial<TValues>) => void;
  submit: () => void;
  getInternalHooks: () => IInternalHooks<TValues>;
  validateFields: <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ) => Promise<Partial<TValues> | TValues>;
  getFieldError: <P extends TKeyObjectType<TValues>>(name: P) => string[];
  getFieldsError: <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ) => IFieldError[];
  deleteValue: <P extends TKeyObjectType<TValues>>(name: P) => void;
  isFieldsTouched: (<P extends TKeyObjectType<TValues>>(
    names?: P[],
    allFieldsTouched?: boolean
  ) => boolean) &
    ((allFieldsTouched?: boolean) => boolean);
  isFieldTouched: <P extends TKeyObjectType<TValues>>(name: P) => boolean;
  isFieldValidating: <P extends TKeyObjectType<TValues>>(name: P) => boolean;
  isFieldsValidating: <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ) => boolean;
  isValid: () => boolean;
}

export interface IFieldData<
  TValues = Record<string, any>,
  P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
> {
  name: P;
  value: TValueObjectType<TValues, P> | undefined;
  errors: string[];
  isFieldTouched: boolean;
  isFieldValidating: boolean;
  isValid: boolean;
}

export interface IFieldEntity<
  TValues = Record<string, any>,
  P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
> {
  onStoreChangeValue: (value: TValueObjectType<TValues, P> | undefined) => void;
  onReset?: () => void;
  validateRules: (
    value: TValueObjectType<TValues, P> | undefined,
    options: IFieldValidateOptions
  ) => Promise<IRuleError<TValues>[]>;
  getErrors: () => string[];
  getWarnings: () => string[];
  isFieldTouched: boolean;
  isFieldValidating: boolean;
  isValid: boolean;
  props: {
    name: P;
    dependencies?: P[];
    initialValue?: TValueObjectType<TValues, P>;
    rules?: IFormRule<TValues>[];
  };
}

export interface IValidateErrorEntity<TValues = Record<string, any>> {
  values: TValues;
  errorFields: { name: string; errors: string[] }[];
}

export interface IFormCallbacks<TValues = Record<string, any>> {
  onValuesChange?: (
    changedValues: Partial<TValues>,
    values: Partial<TValues>
  ) => void;
  onFieldChange?: <P extends TKeyObjectType<TValues>>(
    changedField: IFieldData<TValues, P>,
    allFields: IFieldData<TValues, P>[]
  ) => void;
  onFinish?: (values: TValues) => void;
  onFinishFailed?: (errorInfo?: IValidateErrorEntity<TValues>) => void;
}

export type TWatchValueFieldCallback<TValues> = (
  values: TValues,
  namePathList: string[]
) => void;

export type TWatchFieldCallback<
  TValues,
  P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
> = (fields: IFieldEntity<TValues, P>[]) => void;

export interface IInternalHooks<TValues = Record<string, any>> {
  registerField: <P extends TKeyObjectType<TValues>>(
    entity: IFieldEntity<TValues, P>
  ) => void;
  setCallbacks: (callbacks: IFormCallbacks<TValues>) => void;
  getFields: <P extends TKeyObjectType<TValues>>(
    namePathList?: P[]
  ) => IFieldData<TValues, P>[];
  getInitialValue: <P extends TKeyObjectType<TValues>>(
    namePath: P
  ) => TValueObjectType<TValues, P> | undefined;
  setInitialValues: (initialValues?: TValues) => void;
  unRegisterField: (
    entity: Omit<
      IFieldEntity<TValues>,
      | "onStoreChangeValue"
      | "getWarnings"
      | "getErrors"
      | "isFieldTouched"
      | "isFieldValidating"
      | "isValid"
    >
  ) => void;
  setValidateMessages: (validateMessages: IValidateMessages) => void;
  registerWatchValueField: (
    callback: TWatchValueFieldCallback<TValues>
  ) => () => void;
  registerWatchField: <P extends TKeyObjectType<TValues>>(
    callback: TWatchFieldCallback<TValues, P>
  ) => () => void;
  setIsDotSeparator: (isDotSeparator: boolean) => void;
  setFieldErrors: <P extends TKeyObjectType<TValues>>(
    name: P,
    errors: string[]
  ) => void;
  setFieldWarnings: (name: string, warnings: string[]) => void;
  updateFields: <P extends TKeyObjectType<TValues>>(
    name: P,
    paramsField: Partial<IFieldEntity<TValues>>
  ) => void;
}

export interface IFieldProps<TValues = Record<string, any>> {
  dependencies?: TKeyObjectType<TValues>[];
  name: TKeyObjectType<TValues> | [string, string];
  initialValue?: TValueObjectType<TValues, TKeyObjectType<TValues>>;
  onReset?: () => void;
  trigger?: string;
  children: React.ReactElement;
  valuePropName?: string;
  rules?: IFormRule<TValues>[];
  validateTrigger?: string | string[];
  validateDebounce?: number;
  messageVariables?: Record<string, string>;
  successText?: string;
  isDotSeparator?: boolean;
}

export type TFormValidator<TValue = Record<string, any>> = (
  rule: TFormRuleObject<TValue>,
  value: TValueObjectType<TValue, TKeyObjectType<TValue>>,
  callback: (error?: string) => void
) => Promise<void | any> | void;

export interface IFormValidatorRule<TValue = Record<string, any>> {
  isWarning?: boolean;
  message?: string | React.ReactElement;
  validator: TFormValidator<TValue>;
}

export type TFormRuleObject<TValues = Record<string, any>> = TFormBaseRule &
  Partial<IFormValidatorRule<TValues>>;

export type TFormBaseRule = Omit<RuleItem, "validator" | "asyncValidator"> & {
  minDate?: string;
  maxDate?: string;
  rangeDate?: boolean;
};

export type TFormRuleRender = <TValues = Record<string, any>>(
  form: IFormInstance<TValues>
) => TFormRuleObject<TValues>;

export type IFormRule<TValues> = TFormRuleObject<TValues> | TFormRuleRender;

export interface IRuleError<TValues = Record<string, any>> {
  errors: string[];
  rule: TFormRuleObject<TValues>;
}

type TValidateMessage = string | (() => string);

export interface IValidateMessages {
  default?: TValidateMessage;
  required?: TValidateMessage;
  enum?: TValidateMessage;
  whitespace?: TValidateMessage;
  date?: {
    format?: TValidateMessage;
    parse?: TValidateMessage;
    invalid?: TValidateMessage;
  };
  types?: {
    string?: TValidateMessage;
    method?: TValidateMessage;
    array?: TValidateMessage;
    object?: TValidateMessage;
    number?: TValidateMessage;
    date?: TValidateMessage;
    boolean?: TValidateMessage;
    integer?: TValidateMessage;
    float?: TValidateMessage;
    regexp?: TValidateMessage;
    email?: TValidateMessage;
    url?: TValidateMessage;
    hex?: TValidateMessage;
  };
  string?: {
    len?: TValidateMessage;
    min?: TValidateMessage;
    max?: TValidateMessage;
    range?: TValidateMessage;
  };
  number?: {
    len?: TValidateMessage;
    min?: TValidateMessage;
    max?: TValidateMessage;
    range?: TValidateMessage;
  };
  array?: {
    len?: TValidateMessage;
    min?: TValidateMessage;
    max?: TValidateMessage;
    range?: TValidateMessage;
  };
  pattern?: {
    mismatch?: TValidateMessage;
  };
}

export interface IFieldValidateOptions {
  validateMessages?: IValidateMessages;
  isHiddenMessages?: boolean;
}

export interface IFieldError<P = string> {
  name: P;
  errors: string[];
  warnings: string[];
}

export interface IFormListField<
  TValues = Record<string, any>,
  P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
> {
  name: `${P}[${number}]` | `${P}.${number}`;
  key: number;
}

export interface IFormListOperations<TFieldValue = any> {
  add: (defaultValue?: TFieldValue | any, index?: number) => void;
  remove: (index: number | number[]) => void;
}

export interface IFormListProps<
  TValues = Record<string, any>,
  K extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
> {
  name: K;
  children: (
    fields: IFormListField<TValues, K>[],
    operations: IFormListOperations<TValueObjectType<TValues, K>>
  ) => React.JSX.Element;
}

export type TUseValidation<TValues = Record<string, any>> = (
  form: IFormInstance<TValues>
) => {
  isValid: boolean;
};
