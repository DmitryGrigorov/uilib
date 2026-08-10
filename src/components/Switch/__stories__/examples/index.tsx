import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import Switch from "../../";
import {
  SwitchExample,
  SwitchExampleIcon,
  SwitchExampleText
} from "./SwitchExamples";
export const SwitchExamples: React.FC = () => {
  const SWITCH_EXAMPLES = [
    {
      key: "primary",
      textPlusIcon: <SwitchExample />,
      iconOrText: <SwitchExampleText />,
      disabled: <Switch isDisabled />,
      disabledChecked: <Switch isDisabled isChecked />,
      iconAfter: <SwitchExampleIcon />
    }
  ];

  return <StorybookDocExamples items={SWITCH_EXAMPLES} />;
};
