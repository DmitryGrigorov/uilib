import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  SnackBarExampleWithoutAction,
  SnackBarExampleWithAction
} from "./SnackBarExamples";

export const SnackBarExamples: React.FC = () => {
  const SNACK_BAR_EXAMPLES = [
    {
      key: "withoutAction",
      withoutAction: <SnackBarExampleWithoutAction />
    },
    {
      key: "withAction",
      withoutAction: <SnackBarExampleWithAction />
    }
  ];

  return <StorybookDocExamples items={SNACK_BAR_EXAMPLES} />;
};
