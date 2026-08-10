import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import MobileSteps from "../..";

export const MobileStepsExamples: React.FC = () => {
  const MOBILE_STEPS_EXAMPLES = [
    {
      key: "gallery",
      gallerySteps: (
        <MobileSteps
          style={{ margin: "20px 0" }}
          type="gallery"
          steps={10}
          current={3}
        />
      )
    },
    {
      key: "progress",
      progressSteps: (
        <MobileSteps
          style={{ margin: "20px 0" }}
          type="progress"
          steps={6}
          current={3}
        />
      )
    }
  ];

  return <StorybookDocExamples items={MOBILE_STEPS_EXAMPLES} />;
};
