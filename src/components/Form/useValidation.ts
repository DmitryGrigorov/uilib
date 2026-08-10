import { useEffect, useState } from "react";
import { IFormInstance, TUseValidation } from "./types";

export const useValidation: TUseValidation<any> = <TValues>(
  form: IFormInstance<TValues>
) => {
  const [isValid, setIsValid] = useState(form.isValid());

  useEffect(() => {
    const handleValidationChange = (): void => {
      const currentIsValid = form.isValid();
      setIsValid(currentIsValid);
    };

    const unsubscribe = form.getInternalHooks().registerWatchField(() => {
      handleValidationChange();
    });

    return () => {
      unsubscribe();
    };
  }, [form]);

  return { isValid };
};
