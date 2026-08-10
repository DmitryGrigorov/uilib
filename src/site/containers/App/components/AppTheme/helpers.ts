import { DarkThemeSite } from "../../../../themes/dark";
import { LightThemeSite } from "../../../../themes/light";
import { SELECTED_THEME_STORE_KEY } from "./constants";
import { TGetSavedTheme } from "./types";

export const getSavedTheme = (): TGetSavedTheme => {
  let selectedTheme = LightThemeSite.name;

  const savedTheme = localStorage.getItem(SELECTED_THEME_STORE_KEY);

  if (savedTheme === DarkThemeSite.name) {
    selectedTheme = DarkThemeSite.name;
  }

  return { selectedTheme };
};
