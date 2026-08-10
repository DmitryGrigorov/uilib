import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InputMaskDisabled,
  InputMaskErrorIsIcon,
  InputMaskDefaultExample,
  InputMaskError,
  InputMaskIconLeft,
  InputMaskIconRight,
  InputMaskRequired,
  InputMaskRequiredDisabled,
  InputMaskRequiredIconLeft,
  InputMaskRequiredIconRight,
  InputMaskSuccessIsIconRequired,
  InputMaskSuccessUsage,
  InputMaskWarning,
  InputMaskWarningIsIcon
} from "./InputMaskExamples";

export const InputMaskExamples: React.FC = () => {
  const INPUT_MASK_EXAMPLES = [
    {
      key: "default",
      example1: <InputMaskDefaultExample />,
      example2: <InputMaskRequired />
    },
    {
      key: "iconLeft",
      example1: <InputMaskIconLeft />,
      example2: <InputMaskRequiredIconLeft />
    },
    {
      key: "iconRight",
      example1: <InputMaskIconRight />,
      example2: <InputMaskRequiredIconRight />
    },
    {
      key: "disabled",
      example1: <InputMaskDisabled />,
      example2: <InputMaskRequiredDisabled />
    },
    {
      key: "error",
      example1: <InputMaskError />,
      example2: <InputMaskErrorIsIcon />
    },
    {
      key: "warning",
      example1: <InputMaskWarning />,
      example2: <InputMaskWarningIsIcon />
    },
    {
      key: "success",
      example1: <InputMaskSuccessUsage />,
      example2: <InputMaskSuccessIsIconRequired />
    }
  ];

  return <StorybookDocExamples items={INPUT_MASK_EXAMPLES} />;
};
