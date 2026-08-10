import React from "react";
import CheckBoxGroup from "../../../";

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

export const CheckBoxGroupExampleDefault: React.FC = () => (
  <CheckBoxGroup options={OPTIONS} value={[]} />
);

export const CheckBoxGroupExampleDisabled: React.FC = () => (
  <CheckBoxGroup options={OPTIONS} isDisabled value={[]} />
);

export const CheckBoxGroupExampleDirectionColumn: React.FC = () => (
  <CheckBoxGroup options={OPTIONS} direction="column" value={[]} />
);

export const CheckBoxGroupExampleDirectionRow: React.FC = () => (
  <CheckBoxGroup options={OPTIONS} direction="row" value={[]} />
);

export const CheckBoxGroupExampleStatusError: React.FC = () => (
  <CheckBoxGroup
    options={OPTIONS}
    direction="column"
    value={[]}
    status="error"
    statusText="error label"
    headerText="Error group"
  />
);

export const CheckBoxGroupExampleStatusWarning: React.FC = () => (
  <CheckBoxGroup
    options={OPTIONS}
    direction="column"
    value={[]}
    status="warning"
    statusText="warning label"
    headerText="Warning group"
  />
);

export const CheckBoxGroupExampleStatusSuccess: React.FC = () => (
  <CheckBoxGroup
    options={OPTIONS}
    direction="column"
    value={[]}
    status="success"
    statusText="success label"
    headerText="Success group"
  />
);
