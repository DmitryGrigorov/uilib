import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import CheckBox from "../../";

const CheckBoxesExample: React.FC = () => {
  const CHECK_BOXES_EXAMPLE = [
    {
      key: "default",
      unselected: <CheckBox />,
      selected: <CheckBox isChecked />,
      indeterminate: <CheckBox isIndeterminate />,
      disabled: <CheckBox isDisabled />
    },
    {
      key: "label",
      unselected: <CheckBox label="P2-l" />,
      selected: <CheckBox isChecked label="P2-l" />,
      indeterminate: <CheckBox isIndeterminate label="P2-l" />,
      disabled: <CheckBox isDisabled label="P2-l" />
    }
  ];

  return <StorybookDocExamples items={CHECK_BOXES_EXAMPLE} />;
};

export default CheckBoxesExample;
