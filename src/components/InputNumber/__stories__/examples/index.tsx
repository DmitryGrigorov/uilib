import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InputNumberExample,
  InputNumberRequired,
  InputNumberDisabled,
  InputNumberRequiredDisabled,
  InputNumberStep,
  InputNumberStepDisabled,
  InputNumberDecimalScale,
  InputNumberMaxLength,
  InputNumberSuffix,
  InputNumberThousandSeparator,
  InputNumberError,
  InputNumberErrorRequired,
  InputNumberWarning,
  InputNumberWarningRequired,
  InputNumberSuccess,
  InputNumberSuccessRequired
} from "./InputNumberExamples";

export const InputNumberExamples: React.FC = () => {
  const INPUT_EXAMPLES = [
    {
      key: "default",
      example1: <InputNumberExample />,
      example2: <InputNumberRequired />
    },
    {
      key: "disabled",
      example1: <InputNumberDisabled />,
      example2: <InputNumberRequiredDisabled />
    },
    {
      key: "step",
      example1: <InputNumberStep />,
      example2: <InputNumberStepDisabled />
    },
    {
      key: "scaleAndMaxLength",
      example1: <InputNumberDecimalScale />,
      example2: <InputNumberMaxLength />
    },
    {
      key: "suffixAndSeparator",
      example1: <InputNumberSuffix />,
      example2: <InputNumberThousandSeparator />
    },
    {
      key: "error",
      example1: <InputNumberError />,
      example2: <InputNumberErrorRequired />
    },
    {
      key: "warning",
      example1: <InputNumberWarning />,
      example2: <InputNumberWarningRequired />
    },
    {
      key: "success",
      example1: <InputNumberSuccess />,
      example2: <InputNumberSuccessRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "Size L", value: "l" },
    { label: "Size M", value: "m" }
  ];

  return <StorybookDocExamples items={INPUT_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
