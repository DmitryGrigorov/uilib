import React from "react";
import { RadioGroup } from "../../../";

const OPTIONS = [
  { value: "one", label: "one" },
  { value: "two", label: "two", isDisabled: true },
  { value: "three", label: "three" }
];

const RadioGroupOptions: React.FC = () => (
  <RadioGroup value="one" options={OPTIONS} />
);

export default RadioGroupOptions;
