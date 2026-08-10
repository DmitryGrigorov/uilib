import React, { createContext, PropsWithChildren } from "react";
import { IFormInstance } from "./types";

export const FormContext = createContext<IFormInstance<any> | null>(null);

export const FormProvider = <TValues,>({
  children,
  form
}: PropsWithChildren<{ form: IFormInstance<TValues> }>): JSX.Element => (
  <FormContext.Provider value={form}>{children}</FormContext.Provider>
);
