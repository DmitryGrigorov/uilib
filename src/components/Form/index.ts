import { default as InternalForm } from "./Form";
import Field from "./Field";
import List from "./List";
import { useForm } from "./useForm";
import { useWatch } from "./useWatch";
import { useValidation } from "./useValidation";
import type {
  IFormProps,
  IFieldProps,
  IFormInstance,
  IFormCallbacks,
  IValidateErrorEntity,
  IValidateMessages,
  TFormBaseRule,
  IFormValidatorRule,
  TFormRuleObject,
  TFormValidator,
  IFieldError
} from "./types";

type FormType = typeof InternalForm & {
  Field: typeof Field;
  useForm: typeof useForm;
  useWatch: typeof useWatch;
  List: typeof List;
  useValidation: typeof useValidation;
};

const Form = InternalForm as FormType;

Form.useForm = useForm;
Form.Field = Field;
Form.useWatch = useWatch;
Form.List = List;
Form.useValidation = useValidation;

export type {
  IFormProps,
  IFormInstance,
  IFieldProps,
  IFormCallbacks,
  IValidateErrorEntity,
  IValidateMessages,
  TFormBaseRule,
  IFormValidatorRule,
  TFormRuleObject,
  TFormValidator,
  IFieldError
};

export default Form;
