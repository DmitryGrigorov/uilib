import React, { useState } from "react";
import ThemeSwitch from "../../..";

export const ThemeSwitchExample: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeSwitch
      onChange={(_e, val) => setTheme(val)}
      themeSelected={theme}
      size="l"
    />
  );
};

export const ThemeSwitchExampleXL: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeSwitch
      onChange={(_e, val) => setTheme(val)}
      themeSelected={theme}
      size="xl"
    />
  );
};
