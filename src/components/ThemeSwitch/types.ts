import React from "react";

export type TThemeSwitchSize = "l" | "xl";

export interface IThemeSwitchProps {
  themeSelected: string;
  themes?: [string, string];
  onChange?: (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newTheme: string
  ) => void;
  className?: string;
  size?: TThemeSwitchSize;
  testId?: string;
}
