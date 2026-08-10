import React, { useContext } from "react";
import { IconMoon, IconSun } from "@dmitrygrigorov/icons";
import Switch from "../../../components/Switch";
import { ThemeContext } from "../../containers/App/components/AppTheme/themeContext";
import { ThemeSwitcherRoot } from "./style";

export const ThemeSwitcher = (): JSX.Element => {
  const ctx = useContext(ThemeContext);

  return (
    <ThemeSwitcherRoot>
      <Switch
        iconAfter={<IconMoon />}
        iconBefore={<IconSun />}
        hasTextOrIcon
        onChange={ctx.toggleTheme}
        isChecked={ctx.selectedTheme === "dark"}
      />
    </ThemeSwitcherRoot>
  );
};
