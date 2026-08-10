import React from "react";
import RadioButton from "../../../../RadioButton";
import { RadioGroup } from "../../../";

const RadioGroupChildren: React.FC = () => (
  <RadioGroup value={null}>
    <RadioButton label="one" value="one" />
    <RadioButton label="two" value="two" />
  </RadioGroup>
);

export default RadioGroupChildren;
