import React, { useState, PropsWithChildren } from "react";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { DarkThemeSite } from "../../../../themes/dark";
import { LightThemeSite } from "../../../../themes/light";
import { ThemeSwitcher } from "../../../../components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "./themeContext";
import { SELECTED_THEME_STORE_KEY } from "./constants";
import { getSavedTheme } from "./helpers";

// Only DOM tag targets ("div", "button", ...) need filtering — a component
// target manages its own props already, so everything is forwarded to it.
const shouldForwardProp = (propName: string, target: unknown): boolean =>
  typeof target === "string" ? isPropValid(propName) : true;

const savedTheme = getSavedTheme();

const AppThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState(savedTheme.selectedTheme);

  const toggleTheme = (): void => {
    if (selectedTheme === LightThemeSite.name) {
      setSelectedTheme(DarkThemeSite.name);
      localStorage.setItem(SELECTED_THEME_STORE_KEY, DarkThemeSite.name);
    }
    if (selectedTheme === DarkThemeSite.name) {
      setSelectedTheme(LightThemeSite.name);
      localStorage.setItem(SELECTED_THEME_STORE_KEY, LightThemeSite.name);
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider
          theme={
            selectedTheme === LightThemeSite.name
              ? LightThemeSite
              : DarkThemeSite
          }>
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    </ThemeContext.Provider>
  );
};

AppThemeProvider["ThemeSwitcher"] = ThemeSwitcher;

export default AppThemeProvider;
