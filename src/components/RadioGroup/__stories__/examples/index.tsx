import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import RadioGroupOptions from "./RadioGroupOptions";
import RadioGroupDisabled from "./RadioGroupDisabled";

const RadioButtonsExample: React.FC = () => {
  const RADIO_BUTTONS_ITEMS = [
    {
      key: "default",
      default: <RadioGroupOptions />,
      disabled: <RadioGroupDisabled />
    }
  ];

  return <StorybookDocExamples items={RADIO_BUTTONS_ITEMS} />;
};

export default RadioButtonsExample;
