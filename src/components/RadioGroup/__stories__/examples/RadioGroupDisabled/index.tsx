import React from "react";
import { RadioGroup } from "../../../";

const OPTIONS = [
  { value: "one", label: "one" },
  { value: "two", label: "two", isDisabled: true },
  { value: "three", label: "three" }
];

const RadioGroupDisabled: React.FC = () => (
  <RadioGroup value="one" options={OPTIONS} isDisabled />
);

export default RadioGroupDisabled;
