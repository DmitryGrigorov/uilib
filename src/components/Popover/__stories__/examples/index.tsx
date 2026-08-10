import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  PopoverExampleBottom,
  PopoverExampleBottomRight,
  PopoverExampleLeft,
  PopoverExampleBottomLeft,
  PopoverExampleRight,
  PopoverExampleTop,
  PopoverExampleTopRight,
  PopoverExampleTopLeft
} from "./PopoverExamples";

export const PopoverExamples: React.FC = () => {
  const Popover_EXAMPLES = [
    {
      key: "bottom",
      left: <PopoverExampleBottomLeft />,
      right: <PopoverExampleBottomRight />,
      bottom: <PopoverExampleBottom />,
      sideRight: <PopoverExampleRight />
    },
    {
      key: "top",
      left: <PopoverExampleTopLeft />,
      right: <PopoverExampleTopRight />,
      top: <PopoverExampleTop />,
      sideLeft: <PopoverExampleLeft />
    }
  ];

  return <StorybookDocExamples items={Popover_EXAMPLES} />;
};
