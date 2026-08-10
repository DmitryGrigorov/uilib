import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { DingDing } from "../../DingDing";

export const DingDingExamples: React.FC = () => {
  const BADGES_EXAMPLES = [
    {
      key: "DingDing",
      default: <DingDing size="l" />,
      selected: <DingDing isSelected size="l" />,
      disabled: <DingDing isDisabled size="l" />,
      notification: <DingDing notificationCount={1} size="l" />
    }
  ];

  const SIZE_BADGES = [
    { label: "Size S", value: "s" },
    { label: "Size M", value: "m" },
    { label: "Size L", value: "l" }
  ];

  return (
    <StorybookDocExamples items={BADGES_EXAMPLES} sizeTabs={SIZE_BADGES} />
  );
};
