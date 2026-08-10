import React from "react";
import { RadioGroup } from "../../../";

const OPTIONS = [
  { value: "one", label: "one" },
  { value: "two", label: "two", isDisabled: true },
  { value: "three", label: "three" }
];

export const RadioGroupStatusError: React.FC = () => (
  <RadioGroup
    value="one"
    status="error"
    statusText="error label"
    headerText="Error group"
    options={OPTIONS}
  />
);

export const RadioGroupStatusWarning: React.FC = () => (
  <RadioGroup
    value="one"
    status="warning"
    statusText="warning label"
    headerText="Warning group"
    options={OPTIONS}
  />
);

export const RadioGroupStatusSuccess: React.FC = () => (
  <RadioGroup
    value="one"
    status="success"
    statusText="success label"
    headerText="Success group"
    options={OPTIONS}
  />
);
