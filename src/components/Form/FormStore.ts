import deepmerge from "../utils/deepmerge";
import getValueObject from "../utils/getValueObject";
import setValueObject from "../utils/setValueObject";
import type {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import { deleteValueObject } from "./helpers/utils";
import type {
  IFormCallbacks,
  IFieldData,
  IFieldEntity,
  IInternalHooks,
  IFormInstance,
  IFieldError,
  IValidateMessages,
  IRuleError,
  TWatchValueFieldCallback,
  TWatchFieldCallback
} from "./types";
import { defaultValidateMessages } from "./constants/messages";

class FormStore<TValues extends Record<string, any> = Record<string, any>> {
  private initialValues: TValues = {} as TValues;
  private values: TValues = {} as TValues;
  private callbacks: IFormCallbacks<TValues> = {};
  private fieldEntities: IFieldEntity<TValues>[] = [];
  private validateMessages: IValidateMessages | null = null;
  private watchListValueField: TWatchValueFieldCallback<TValues>[] = [];
  private watchListField: TWatchFieldCallback<TValues>[] = [];
  private isDotSeparator: boolean = true;

  public getForm = (): IFormInstance<TValues> => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    resetFields: this.resetFields,
    setFields: this.setFields,
    setFieldValue: this.setFieldValue,
    setFieldsValue: this.setFieldsValue,
    submit: this.submit,
    getInternalHooks: this.getInternalHooks,
    validateFields: this.validateFields,
    getFieldError: this.getFieldError,
    getFieldsError: this.getFieldsError,
    deleteValue: this.deleteValue,
    isFieldsTouched: this.isFieldsTouched,
    isFieldTouched: this.isFieldTouched,
    isFieldsValidating: this.isFieldsValidating,
    isFieldValidating: this.isFieldValidating,
    isValid: this.isValid
  });

  private readonly getInternalHooks = (): IInternalHooks<TValues> => ({
    registerField: this.registerField,
    setInitialValues: this.setInitialValues,
    setCallbacks: this.setCallbacks,
    getInitialValue: this.getInitialValue,
    getFields: this.getFields,
    unRegisterField: this.unRegisterField,
    setValidateMessages: this.setValidateMessages,
    registerWatchValueField: this.registerWatchValueField,
    setIsDotSeparator: this.setIsDotSeparator,
    setFieldErrors: this.setFieldErrors,
    setFieldWarnings: this.setFieldWarnings,
    updateFields: this.updateFields,
    registerWatchField: this.registerWatchField
  });

  private readonly setFieldErrors = <P extends TKeyObjectType<TValues>>(
    name: P,
    errors: string[]
  ): void => {
    const index = this.fieldEntities.findIndex(
      (field) => field.props.name === name
    );
    if (index !== -1) {
      const field = {
        ...this.fieldEntities[index],
        isValid: !!errors.length,
        getErrors: () => errors
      };
      this.fieldEntities[index] = {
        ...field
      };
      this.notifyWatchField([field]);
    }
  };

  private readonly setFieldWarnings = (
    name: string,
    warnings: string[]
  ): void => {
    const index = this.fieldEntities.findIndex(
      (field) => field.props.name === name
    );
    if (index !== -1) {
      const field = {
        ...this.fieldEntities[index],
        getWarnings: () => warnings
      };
      this.fieldEntities[index] = {
        ...field
      };
      this.notifyWatchField([field]);
    }
  };

  private readonly deleteValue = <P extends TKeyObjectType<TValues>>(
    name: P
  ): void => {
    this.values = deleteValueObject(this.values, name);
    this.notifyWatchValueField([name]);
  };

  private readonly registerWatchValueField: IInternalHooks<TValues>["registerWatchValueField"] =
    (callback) => {
      this.watchListValueField.push(callback);

      return () => {
        this.watchListValueField = this.watchListValueField.filter(
          (fn) => fn !== callback
        );
      };
    };

  private readonly registerWatchField = <P extends TKeyObjectType<TValues>>(
    callback: TWatchFieldCallback<TValues, P>
  ): (() => void) => {
    (this.watchListField as unknown as TWatchFieldCallback<TValues, P>[]).push(
      callback
    );

    return () => {
      this.watchListField = (
        this.watchListField as unknown as TWatchFieldCallback<TValues, P>[]
      ).filter(
        (fn) => fn !== callback
      ) as unknown as TWatchFieldCallback<TValues>[];
    };
  };

  private readonly notifyWatchValueField = <P extends TKeyObjectType<TValues>>(
    name: P[] = []
  ): void => {
    if (this.watchListValueField.length) {
      const values = this.getFieldsValue();
      this.watchListValueField.forEach((callback) => {
        callback(values, name);
      });
    }
  };

  private readonly notifyWatchField = <P extends TKeyObjectType<TValues>>(
    fields: IFieldEntity<TValues, P>[]
  ): void => {
    if (this.watchListField.length) {
      this.watchListField.forEach((callback) => {
        (callback as unknown as TWatchFieldCallback<TValues, P>)(fields);
      });
    }
  };

  private readonly updateValues = <P extends TKeyObjectType<TValues>>(
    values: TValues
  ): void => {
    this.values = values;
    const names: P[] = [];
    this.getFieldEntities().forEach((entity) => {
      names.push(entity.props.name as P);
      entity.onStoreChangeValue(
        this.isDotSeparator
          ? getValueObject(values, entity.props.name)
          : values?.[entity.props.name as unknown as string]
      );
    });
    this.notifyWatchValueField(names);
  };

  private readonly setInitialValues = (initialValues?: TValues): void => {
    this.initialValues = initialValues || ({} as TValues);
    this.updateValues(this.initialValues);
  };

  private readonly getInitialValue = <P extends TKeyObjectType<TValues>>(
    name: P
  ): TValueObjectType<TValues, P> | undefined => {
    if (this.isDotSeparator) {
      return getValueObject(this.initialValues, name);
    }
    return this.initialValues?.[name as string];
  };

  private readonly setCallbacks = (
    callbacks: IFormCallbacks<TValues>
  ): void => {
    this.callbacks = callbacks;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  private readonly getFieldsValue: {
    (): TValues;
    <P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>>(
      nameList?: P[]
    ): Partial<TValues>;
  } = <P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>>(
    nameList?: P[]
  ): TValues | Partial<TValues> => {
    if (Array.isArray(nameList)) {
      let partialValues: Partial<TValues> = {};
      nameList.forEach((name) => {
        if (name in this.values) {
          partialValues = setValueObject(
            partialValues,
            name as any,
            this.getFieldValue(name)
          );
        }
      });

      return partialValues;
    } else {
      return this.values;
    }
  };

  private readonly getFieldValue = <P extends TKeyObjectType<TValues>>(
    name: P | [string, string]
  ): TValueObjectType<TValues, P> | undefined => {
    if (Array.isArray(name)) {
      const [listKey, fieldKey] = name;
      const listValue = this.isDotSeparator
        ? getValueObject(this.values, listKey as P)
        : this.values?.[listKey];
      if (!listValue) {
        return undefined;
      }

      return this.isDotSeparator
        ? getValueObject(listValue, fieldKey)
        : listValue?.[fieldKey];
    }

    if (this.isDotSeparator) {
      return getValueObject(this.values, name);
    } else {
      const value =
        this.values && name in this.values
          ? this.values[name as unknown as keyof typeof this.values]
          : undefined;
      return value;
    }
  };

  private readonly setFields = <P extends TKeyObjectType<TValues>>(
    fields: IFieldData<TValues, P>[]
  ): void => {
    const names: P[] = [];
    fields.forEach((fieldData) => {
      const { name, ...data } = fieldData;
      names.push(name);
      if ("value" in data) {
        this.updateValues(
          this.isDotSeparator
            ? setValueObject(this.values, name, data.value)
            : {
                ...this.values,
                [name]: data.value
              }
        );
      }
    });
    this.notifyWatchValueField(names);
  };

  private readonly getFieldEntities = <P extends TKeyObjectType<TValues>>(
    names?: P[] | null
  ): IFieldEntity<TValues, P>[] => {
    if (names) {
      return this.fieldEntities.filter((field) =>
        names.includes(field.props.name as P)
      ) as unknown as IFieldEntity<TValues, P>[];
    }
    return this.fieldEntities as unknown as IFieldEntity<TValues, P>[];
  };

  private readonly getFields = <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ): IFieldData<TValues, P>[] => {
    let entities = this.getFieldEntities<P>();
    if (names) {
      entities = entities.filter((entity) => names.includes(entity.props.name));
    }

    return entities.map((field) => {
      const name = field.props.name;
      return {
        name,
        value: this.getFieldValue(name),
        errors: [],
        isFieldValidating: field.isFieldValidating,
        isFieldTouched: field.isFieldTouched,
        isValid: field.isValid
      };
    });
  };

  private readonly registerField = <P extends TKeyObjectType<TValues>>(
    entity: IFieldEntity<TValues, P>
  ): void => {
    const name = Array.isArray(entity.props.name)
      ? entity.props.name.join(".")
      : entity.props.name;
    const { initialValue } = entity.props;
    this.fieldEntities.push(entity);
    this.notifyWatchValueField([name as P]);

    const prevValue = this.isDotSeparator
      ? getValueObject(this.values, name as P)
      : this.values?.[name];

    if (prevValue === undefined) {
      this.updateValues(
        this.isDotSeparator
          ? setValueObject(this.values, name as P, initialValue)
          : {
              ...this.values,
              [name]: initialValue
            }
      );
    }
    this.notifyWatchField([entity]);
  };

  private readonly submit = (): void => {
    const { onFinish, onFinishFailed } = this.callbacks;
    this.validateFields()
      .then((values) => {
        if (onFinish) {
          try {
            onFinish(values);
          } catch (e) {
            window.console.error(e);
          }
        }
      })
      .catch((e) => {
        if (onFinishFailed) {
          onFinishFailed?.(e);
        }
      });
  };

  private readonly setFieldValue = <
    P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
  >(
    name: P | [string, string],
    value: TValueObjectType<TValues, P>
  ): void => {
    const fieldName = (Array.isArray(name) ? name.join(".") : name) as P;
    this.setFields([
      {
        name: fieldName,
        value,
        errors: [],
        isFieldTouched: false,
        isFieldValidating: false,
        isValid: false
      }
    ]);

    const { onValuesChange, onFieldChange } = this.callbacks;
    if (onValuesChange) {
      onValuesChange(
        this.isDotSeparator
          ? getValueObject(this.values, fieldName)
          : this.values?.[fieldName as string],
        this.getFieldsValue()
      );
    }
    if (onFieldChange) {
      onFieldChange<P>(
        {
          name: fieldName,
          value,
          errors: [],
          isFieldTouched: false,
          isFieldValidating: false,
          isValid: false
        },
        this.getFields()
      );
    }
  };

  private readonly unRegisterField = <P extends TKeyObjectType<TValues>>(
    entity: Omit<
      IFieldEntity<TValues, P>,
      | "onStoreChangeValue"
      | "getErrors"
      | "getWarnings"
      | "isFieldTouched"
      | "isFieldValidating"
      | "isValid"
    >
  ): void => {
    this.fieldEntities = this.fieldEntities.filter(
      (field) => field.props.name !== entity.props.name
    );
  };

  private readonly resetFields = <P extends TKeyObjectType<TValues>>(
    fields?: P[]
  ): void => {
    if (!fields) {
      this.updateValues(this.initialValues);
      this.notifyWatchValueField();
    } else {
      fields.forEach((field) => {
        const initialValue = this.getInitialValue(field);
        this.updateValues(
          this.isDotSeparator
            ? setValueObject(this.values, field, initialValue)
            : {
                ...this.values,
                [field]: initialValue
              }
        );
      });
      this.getFieldEntities(fields).forEach((field) => {
        field.onReset?.();
      });
      this.notifyWatchValueField(fields);
      this.notifyWatchField(this.getFieldEntities(fields));
    }
  };

  private readonly setFieldsValue = (values: Partial<TValues>): void => {
    this.updateValues(deepmerge(this.values, values));
  };

  private readonly updateFields = <P extends TKeyObjectType<TValues>>(
    name: P,
    paramsField: Partial<IFieldEntity<TValues, P>>
  ): void => {
    const index = this.fieldEntities.findIndex(
      (field) => field.props.name === name
    );
    if (index !== -1) {
      const field = {
        ...this.fieldEntities[index],
        ...paramsField
      };
      (this.fieldEntities as unknown as IFieldEntity<TValues, P>[])[index] = {
        ...field
      } as IFieldEntity<TValues, P>;
      this.notifyWatchField([field as IFieldEntity<TValues, P>]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  private readonly validateFields: {
    (): Promise<TValues>;
    <P extends TKeyObjectType<TValues>>(names?: P[]): Promise<Partial<TValues>>;
  } = <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ): Promise<TValues> | Promise<Partial<TValues>> => {
    const promiseList: Promise<IFieldError<TValues>>[] = [];
    this.getFieldEntities(names).forEach((field) => {
      if (field.props.rules?.length) {
        const promise = field.validateRules(
          this.getFieldValue(field.props.name),
          {
            validateMessages: {
              ...defaultValidateMessages,
              ...this.validateMessages
            }
          }
        );
        promiseList.push(
          promise.then<any, IRuleError<TValues>>((ruleErrors) => {
            const mergedErrors: string[] = [];
            const mergedWarnings: string[] = [];
            ruleErrors.forEach(({ rule, errors }) => {
              if (rule.isWarning) {
                mergedWarnings.push(...errors);
              } else {
                mergedErrors.push(...errors);
              }
            });
            if (mergedErrors.length) {
              // eslint-disable-next-line promise/no-return-wrap
              return Promise.reject({
                name: field.props.name,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }

            return {
              name: field.props.name,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          })
        );
      }
    });

    return (
      Promise.all(promiseList)
        // eslint-disable-next-line promise/no-return-wrap
        .then(() => Promise.resolve(this.getFieldsValue(names)))
        .catch((results) =>
          // eslint-disable-next-line promise/no-return-wrap
          Promise.reject({
            values: this.getFieldsValue(names),
            errors: results.errors
          })
        )
    );
  };

  private readonly setValidateMessages = (
    validateMessages: IValidateMessages
  ): void => {
    this.validateMessages = validateMessages;
  };

  private readonly getFieldsError = <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ): IFieldError<P>[] =>
    this.getFieldEntities(names).map((entity) => ({
      name: entity.props.name,
      errors: entity.getErrors(),
      warnings: entity.getWarnings()
    }));

  private readonly getFieldError = <P extends TKeyObjectType<TValues>>(
    name: P
  ): string[] => this.getFieldsError([name])[0].errors;

  private readonly setIsDotSeparator = (isDotSeparator: boolean): void => {
    this.isDotSeparator = isDotSeparator;
  };

  private readonly isFieldsTouched: IFormInstance<TValues>["isFieldsTouched"] =
    (...args: [TKeyObjectType<TValues>[]?, boolean?] | [boolean?]) => {
      const [arg0, arg1] = args;
      let names: TKeyObjectType<TValues>[] | null;
      let isAllFieldsTouched = false;
      if (args.length === 0) {
        names = null;
      } else if (args.length === 1) {
        if (Array.isArray(arg0)) {
          names = arg0;
          isAllFieldsTouched = false;
        } else {
          names = null;
          isAllFieldsTouched = arg0 || false;
        }
      } else {
        names = arg0 as TKeyObjectType<TValues>[];
        isAllFieldsTouched = arg1 || false;
      }
      const isFieldTouched = (field: IFieldEntity<TValues>): boolean =>
        field.isFieldTouched;
      if (!names) {
        const fieldEntities = this.getFieldEntities();
        if (fieldEntities.length === 0) {
          return false;
        }
        return isAllFieldsTouched
          ? fieldEntities.every(isFieldTouched)
          : fieldEntities.some(isFieldTouched);
      }

      const fieldEntities = this.getFieldEntities(names);
      if (fieldEntities.length === 0) {
        return false;
      }

      return isAllFieldsTouched
        ? fieldEntities.every(isFieldTouched)
        : fieldEntities.some(isFieldTouched);
    };

  private readonly isFieldTouched: IFormInstance<TValues>["isFieldTouched"] = (
    name
  ) => this.isFieldsTouched([name]);

  private readonly isFieldsValidating = <P extends TKeyObjectType<TValues>>(
    names?: P[]
  ): boolean => {
    if (!names) {
      return this.getFieldEntities().some((field) => field.isFieldValidating);
    }
    return this.getFieldEntities(names).some(
      (field) => field.isFieldValidating
    );
  };

  private readonly isFieldValidating = <P extends TKeyObjectType<TValues>>(
    name: P
  ): boolean => this.isFieldsValidating([name]);

  private readonly isValid = (): boolean => {
    const fieldEntities = this.getFieldEntities();
    if (fieldEntities.length) {
      return fieldEntities.every((field) => field.isValid);
    }
    return false;
  };
}

export default FormStore;
