import { useRef } from "react";
import { IFormInstance } from "./types";
import FormStore from "./FormStore";

export function useForm<
  TValues extends Record<string, any> = Record<string, any>
>(form?: IFormInstance<TValues>): IFormInstance<TValues> {
  const formRef = useRef<IFormInstance<TValues> | undefined>(undefined);

  // Lazy-init singleton form instance, kept alive for the component's lifetime
  // via a ref (not state, since it must never itself trigger a re-render).
  /* eslint-disable react-hooks/refs */
  if (formRef.current === undefined) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore<TValues>();
      formRef.current = formStore.getForm();
    }
  }

  return formRef.current;
  /* eslint-enable react-hooks/refs */
}
