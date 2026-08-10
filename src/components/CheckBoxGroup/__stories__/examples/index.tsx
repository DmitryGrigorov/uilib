import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import CheckBoxGroup from "../../";

const OPTIONS = [
  {
    label: "CheckBox 1",
    value: "one"
  },
  {
    label: "CheckBox 2",
    value: "two",
    isDisabled: true
  }
];

const CheckBoxGroupExample: React.FC = () => {
  const CHECK_BOXES_EXAMPLE = [
    {
      key: "default",
      default: <CheckBoxGroup options={OPTIONS} value={[]} />
    },
    {
      key: "disabled",
      default: <CheckBoxGroup options={OPTIONS} isDisabled value={[]} />
    }
  ];

  return <StorybookDocExamples items={CHECK_BOXES_EXAMPLE} />;
};

export default CheckBoxGroupExample;
