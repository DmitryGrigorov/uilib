import { createContext } from "react";
import { IRadioGroupOptionContext } from "../types";

export const RadioGroupContext = createContext<IRadioGroupOptionContext>({
  groupValue: null,
  onChange: () => null,
  onClick: () => null
});
