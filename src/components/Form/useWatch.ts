import { useContext, useEffect, useState } from "react";
import getValueObject from "../utils/getValueObject";
import {
  TValueObjectType,
  TKeyObjectType
} from "../utils/types/typesDeepObject";
import { IFormInstance } from "./types";
import { FormContext } from "./FormContext";

export const useWatch = <
  TValues = Record<string, any>,
  P extends TKeyObjectType<TValues> = TKeyObjectType<TValues>
>(
  name: P,
  form?: IFormInstance<TValues>
): TValueObjectType<TValues, P> | undefined => {
  const [value, setValue] = useState<
    TValueObjectType<TValues, P> | undefined
  >();

  const fieldContext = useContext<IFormInstance<TValues> | null>(FormContext);
  const formInstance = form || fieldContext;
  // Pulls the current field value from the form store on mount, then subscribes to updates.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!formInstance) {
      return;
    }
    const { getFieldsValue, getInternalHooks } = formInstance;
    const { registerWatchValueField } = getInternalHooks();
    const getWatchValue = (
      values: TValues
    ): TValueObjectType<TValues, P> | undefined => getValueObject(values, name);

    const cancelRegister = registerWatchValueField((values) => {
      const newValue = getWatchValue(values);

      setValue(newValue);
    });

    const initialValue = getWatchValue(getFieldsValue() as TValues);

    if (value !== initialValue) {
      setValue(initialValue);
    }

    return cancelRegister;
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  return value;
};
