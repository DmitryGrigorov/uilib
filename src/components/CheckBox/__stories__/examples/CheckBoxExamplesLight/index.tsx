import React from "react";
import CheckBox from "../../../";

export const CheckBoxStateExample: React.FC = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <CheckBox label="Unchecked" />
    <CheckBox label="Checked" isChecked />
    <CheckBox label="Intermediate" isIndeterminate />
    <CheckBox label="Disabled" isDisabled />
  </div>
);
