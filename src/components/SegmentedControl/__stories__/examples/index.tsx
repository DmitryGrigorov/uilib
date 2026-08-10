import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { SegmentedControl } from "../../";

export const SegmentedControlDefaultValue2: React.FC = () => (
  <SegmentedControl
    options={[
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" }
    ]}
    value="2"
    size="l"
  />
);

export const SegmentedControlLabelIcon: React.FC = () => (
  <SegmentedControl
    options={[
      { label: "1", value: "1" },
      { label: <IconSetting1 />, value: "2" },
      { label: "3", value: "3" }
    ]}
    value="2"
  />
);

export const SegmentedControlSizeS: React.FC = () => (
  <SegmentedControl
    options={[
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" }
    ]}
    value="2"
    size="s"
  />
);

export const SegmentedControlOptionDisabled: React.FC = () => (
  <SegmentedControl
    options={[
      { label: "1", value: "1" },
      { label: "2", value: "2", isDisabled: true },
      { label: "3", value: "3" }
    ]}
    value="1"
  />
);

export const SegControlExamples: React.FC = () => {
  const SEGCONTROL_EXAMPLES = [
    {
      key: "SegmentedControl",
      segmentedControl: (
        <SegmentedControl
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" }
          ]}
          value="1"
        />
      )
    }
  ];

  const SIZE_TABS = [
    { label: "xs", value: "xs" },
    { label: "s", value: "s" },
    { label: "m", value: "m" },
    { label: "l", value: "l" }
  ];

  return (
    <StorybookDocExamples items={SEGCONTROL_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
