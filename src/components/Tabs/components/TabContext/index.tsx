import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren
} from "react";
import { ITabContextProps, ITabContextValue } from "./types";

const TabContext = createContext<ITabContextValue | null>(null);
TabContext.displayName = "TabContext";

export const TabProvider: React.FC<PropsWithChildren<ITabContextProps>> = ({
  children,
  value,
  isLazy
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (currentValue: string | number): void => {
    setSelectedValue(currentValue);
  };

  const context = useMemo(
    () => ({
      value: selectedValue,
      onChange: handleChange,
      isLazy
    }),
    [selectedValue]
  );

  return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
};

export const useTabContext = (): ITabContextValue | null =>
  useContext(TabContext);
