import { createContext } from "react";
import { TThemeContext } from "./types";

export const ThemeContext = createContext<TThemeContext>({
  selectedTheme: "light",
  toggleTheme: () => null
});
