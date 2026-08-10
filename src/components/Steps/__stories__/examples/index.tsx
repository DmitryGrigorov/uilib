import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  StepsHorizontalSizeL,
  StepsHorizontalSizeM,
  StepsHorizontalSizeS,
  StepsVerticalSizeL,
  StepsVerticalSizeM,
  StepsVerticalSizeS
} from "./StepsExamples";

export const StepsExamples: React.FC = () => {
  const STEPS_EXAMPLES = [
    {
      key: "horizontalSizeL",
      sizeL: <StepsHorizontalSizeL />
    },
    {
      key: "horizontalSizeM",
      sizeM: <StepsHorizontalSizeM />
    },
    {
      key: "horizontalSizeS",
      sizeS: <StepsHorizontalSizeS />
    },
    {
      key: "vertical",
      sizeL: <StepsVerticalSizeL />,
      sizeM: <StepsVerticalSizeM />,
      sizeS: <StepsVerticalSizeS />
    }
  ];

  return <StorybookDocExamples items={STEPS_EXAMPLES} />;
};
