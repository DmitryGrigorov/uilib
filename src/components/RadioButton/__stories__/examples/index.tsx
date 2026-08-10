import React from "react";
import RadioButton from "../../index";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";

const RadioButtonsExample: React.FC = () => {
  const RADIO_BUTTONS_ITEMS = [
    {
      key: "default",
      default: <RadioButton />,
      checked: <RadioButton isChecked />,
      disabled: <RadioButton isDisabled />,
      disabledChecked: <RadioButton isChecked isDisabled />,
      defaultLabel: <RadioButton label="P2-l" />,
      checkedLabel: <RadioButton isChecked label="P1-s" />,
      disabledLabel: <RadioButton isDisabled label="P2-l" />,
      disabledCheckedLabel: <RadioButton isChecked isDisabled label="P2-l" />
    }
  ];

  return <StorybookDocExamples items={RADIO_BUTTONS_ITEMS} />;
};

export default RadioButtonsExample;
