import React, {
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  TKeyObjectType,
  TValueObjectType
} from "../utils/types/typesDeepObject";
import { useStateProps } from "../hooks/useStateProps";
import { FormContext } from "./FormContext";
import {
  IFieldProps,
  IFieldValidateOptions,
  IFormInstance,
  IRuleError,
  TFormRuleObject
} from "./types";
import { validateRules } from "./helpers/validate";

const Field = <TValues extends Record<string, any>>({
  children,
  name,
  trigger = "onChange",
  initialValue,
  dependencies,
  onReset,
  valuePropName = "value",
  validateDebounce,
  messageVariables,
  validateTrigger = "onChange",
  rules,
  successText
}: IFieldProps<TValues>): React.JSX.Element => {
  const context = useContext(FormContext) as IFormInstance<TValues>;
  const [value, setValue] = useStateProps<
    TValueObjectType<TValues, TKeyObjectType<TValues>> | undefined
  >(context.getFieldValue(name));
  const [resetCount, setResetCount] = useState(0);
  const { getInternalHooks } = context;
  const {
    registerField,
    unRegisterField,
    setFieldErrors,
    setFieldWarnings,
    updateFields
  } = getInternalHooks();
  const [errors, setErrors] = useState<string[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isShowError, setIsShowError] = useState(true);

  // Race-guard for in-flight validation: only the most recently created
  // promise is allowed to commit its result. A plain closure variable (not
  // state/ref) is intentional here — it must never trigger a re-render.
  let validatePromise: Promise<IRuleError<TValues>[]> | null;

  const _rules = useMemo(
    () =>
      rules?.map((rule): TFormRuleObject<TValues> => {
        if (typeof rule === "function") {
          return rule(context);
        }
        return rule;
      }) ?? [],
    [rules]
  );

  const _name = useMemo(
    () => (Array.isArray(name) ? name.join(".") : name),
    [name]
  );

  const isRequired = useMemo<boolean>(
    () => !!_rules.find((rule) => rule.required),
    [_rules]
  );

  /* eslint-disable react-hooks/immutability */
  const fieldValidateRules = useCallback(
    (
      _value: TValueObjectType<TValues, TKeyObjectType<TValues>> | undefined,
      options?: IFieldValidateOptions
    ): Promise<IRuleError<TValues>[]> => {
      const rootPromise = Promise.resolve().then(
        async (): Promise<IRuleError<TValues>[]> => {
          if (validateDebounce) {
            await new Promise((resolve) => {
              setTimeout(resolve, validateDebounce);
            });
            if (validatePromise !== rootPromise) {
              return [];
            }
          }

          const promise = validateRules<TValues>({
            name: _name as TKeyObjectType<TValues>,
            options,
            value: _value,
            rules: _rules,
            messageVariables
          });
          // eslint-disable-next-line promise/catch-or-return
          promise
            .catch((e) => e)
            .then((ruleErrors: IRuleError<TValues>[]) => {
              if (validatePromise === rootPromise) {
                validatePromise = null;
                const nextErrors: string[] = [];
                const nextWarnings: string[] = [];
                ruleErrors.forEach(({ rule, errors: errorsValidate = [] }) => {
                  if (rule.isWarning) {
                    nextWarnings.push(...errorsValidate);
                  } else {
                    nextErrors.push(...errorsValidate);
                  }
                });
                if (!options?.isHiddenMessages) {
                  setIsShowError(true);
                } else {
                  setIsShowError(false);
                }
                setErrors(nextErrors);
                setWarnings(nextWarnings);
                setFieldErrors(_name as TKeyObjectType<TValues>, nextErrors);
                setFieldWarnings(_name, nextWarnings);
                updateFields(_name as TKeyObjectType<TValues>, {
                  isValid: nextErrors.length === 0
                });
              }
            });
          return promise;
        }
      );
      validatePromise = rootPromise;
      updateFields(_name as TKeyObjectType<TValues>, {
        isFieldValidating: !!validatePromise
      });
      return rootPromise;
    },
    [_name, messageVariables, _rules]
  );
  /* eslint-enable react-hooks/immutability */

  useEffect(() => {
    updateFields(_name as TKeyObjectType<TValues>, {
      validateRules: fieldValidateRules
    });
  }, [fieldValidateRules]);

  const onChange = (
    event: any,
    _value: TValueObjectType<TValues, TKeyObjectType<TValues>>
  ): void => {
    const v: TValueObjectType<TValues, TKeyObjectType<TValues>> = event &&
    event.target
      ? _value
      : event;
    setValue(v);
    context.setFieldValue(_name as TKeyObjectType<TValues>, v);
    (children.props as Record<string, any>)[trigger]?.(event, _value);
    if (
      (!Array.isArray(validateTrigger) && validateTrigger === "onChange") ||
      validateTrigger?.includes("onChange")
    ) {
      fieldValidateRules(v);
    }
    updateFields(_name as TKeyObjectType<TValues>, {
      isFieldTouched: true,
      isFieldValidating: false
    });
  };

  useEffect(() => {
    const _value = context.getFieldValue(_name as TKeyObjectType<TValues>);
    setValue(_value);
    fieldValidateRules(_value, { isHiddenMessages: true });
  }, [initialValue]);

  const status = useMemo(() => {
    if (isShowError) {
      if (errors.length) {
        return {
          status: "error",
          statusText: errors[0]
        };
      }
      if (warnings.length) {
        return {
          status: "warning",
          statusText: warnings[0]
        };
      }
      if (value && successText) {
        return {
          status: "success",
          statusText: successText
        };
      }
    }
    return null;
  }, [errors, warnings, value, isShowError]);

  const childProps = useMemo(() => {
    const validateTriggerProps = Array.isArray(validateTrigger)
      ? validateTrigger.reduce((acc: any, cur) => {
          acc[cur] = () => {
            fieldValidateRules(value);
          };
        }, {})
      : {
          [validateTrigger]: () => {
            fieldValidateRules(value);
          }
        };
    return {
      ...(children.props as Record<string, any>),
      ...validateTriggerProps,
      isRequired,
      [valuePropName]: value,
      statusText: status?.statusText || "",
      status: status?.status,
      [trigger]: (...args: any[]) => {
        context.setFieldValue(
          name,
          value as TValueObjectType<TValues, TKeyObjectType<TValues>>
        );
        (children.props as Record<string, any>)[trigger]?.(...args);
        if (validateTrigger !== trigger && validateTrigger?.includes(trigger)) {
          fieldValidateRules(value);
        }
        updateFields(_name as TKeyObjectType<TValues>, {
          isFieldTouched: true
        });
      },
      onChange
    };
  }, [
    children,
    value,
    status,
    validateTrigger,
    fieldValidateRules,
    context,
    isRequired
  ]);

  const onStoreChangeValue = (
    _value: TValueObjectType<TValues, TKeyObjectType<TValues>> | undefined
  ): void => {
    setValue((prevValue) => {
      if (prevValue !== _value) {
        fieldValidateRules(_value, { isHiddenMessages: true });
      }
      return _value;
    });
  };

  /* eslint-disable react-hooks/immutability */
  useEffect(() => {
    registerField({
      onStoreChangeValue,
      validateRules: fieldValidateRules,
      getErrors: () => [],
      getWarnings: () => [],
      onReset,
      isFieldTouched: false,
      isFieldValidating: false,
      isValid: !errors.length,
      props: {
        name: _name as TKeyObjectType<TValues>,
        initialValue,
        dependencies,
        rules
      }
    });

    return () => {
      unRegisterField({
        validateRules: fieldValidateRules,
        props: {
          name: _name as TKeyObjectType<TValues>,
          initialValue,
          dependencies,
          rules
        }
      });
    };
  }, [dependencies, initialValue, _name]);
  /* eslint-enable react-hooks/immutability */

  // Forces the field to remount (via the `key` below) whenever its dependencies change.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setResetCount((prevState) => prevState + 1);
  }, [dependencies]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <React.Fragment key={resetCount}>
      {cloneElement(children, childProps)}
    </React.Fragment>
  );
};

export default Field;
