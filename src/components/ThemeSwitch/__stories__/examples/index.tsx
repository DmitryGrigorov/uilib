import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ThemeSwitchExample,
  ThemeSwitchExampleXL
} from "./ThemeSwitchExamples";
export const ThemeSwitchExamples: React.FC = () => {
  const THEME_SWITCH_EXAMPLES = [
    {
      key: "primary",
      sizeL: <ThemeSwitchExample />,
      sizeXl: <ThemeSwitchExampleXL />
    }
  ];

  return <StorybookDocExamples items={THEME_SWITCH_EXAMPLES} />;
};
