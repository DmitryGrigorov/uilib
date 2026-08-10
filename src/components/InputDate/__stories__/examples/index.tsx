import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InputExample,
  InputRequired,
  InputIconLeft,
  InputRequiredIconLeft,
  InputIconRight,
  InputRequiredIconRight,
  InputDisabled,
  InputRequiredDisabled,
  InputIconLeftDisabled,
  InputRequiredIconLeftDisabled,
  InputIconRightDisabled,
  InputRequiredIconRightDisabled,
  InputError,
  InputErrorRequired,
  InputErrorIsIcon,
  InputErrorIsIconRequired,
  InputWarning,
  InputWarningRequired,
  InputWarningIsIcon,
  InputWarningIsIconRequired,
  InputSuccess,
  InputSuccessRequired,
  InputSuccessIsIcon,
  InputSuccessIsIconRequired
} from "./inputDateExamples";

export const InputDateExamples = ({
  isRangeMode = false
}: {
  isRangeMode: boolean;
}): JSX.Element => {
  const INPUT_EXAMPLES = [
    {
      key: "default",
      example1: <InputExample isRangeMode={isRangeMode} />,
      example2: <InputRequired isRangeMode={isRangeMode} />
    },
    {
      key: "iconLeft",
      example1: <InputIconLeft isRangeMode={isRangeMode} />,
      example2: <InputRequiredIconLeft isRangeMode={isRangeMode} />
    },
    {
      key: "iconRight",
      example1: <InputIconRight isRangeMode={isRangeMode} />,
      example2: <InputRequiredIconRight isRangeMode={isRangeMode} />
    },
    {
      key: "disabled",
      example1: <InputDisabled isRangeMode={isRangeMode} />,
      example2: <InputRequiredDisabled isRangeMode={isRangeMode} />
    },
    {
      key: "iconLeftDisabled",
      example1: <InputIconLeftDisabled isRangeMode={isRangeMode} />,
      example2: <InputRequiredIconLeftDisabled isRangeMode={isRangeMode} />
    },
    {
      key: "iconRightDisabled",
      example1: <InputIconRightDisabled isRangeMode={isRangeMode} />,
      example2: <InputRequiredIconRightDisabled isRangeMode={isRangeMode} />
    },
    {
      key: "error",
      example1: <InputError isRangeMode={isRangeMode} />,
      example2: <InputErrorRequired isRangeMode={isRangeMode} />
    },
    {
      key: "errorIsIcon",
      example1: <InputErrorIsIcon isRangeMode={isRangeMode} />,
      example2: <InputErrorIsIconRequired isRangeMode={isRangeMode} />
    },
    {
      key: "warning",
      example1: <InputWarning isRangeMode={isRangeMode} />,
      example2: <InputWarningRequired isRangeMode={isRangeMode} />
    },
    {
      key: "warningIsIcon",
      example1: <InputWarningIsIcon isRangeMode={isRangeMode} />,
      example2: <InputWarningIsIconRequired isRangeMode={isRangeMode} />
    },
    {
      key: "success",
      example1: <InputSuccess isRangeMode={isRangeMode} />,
      example2: <InputSuccessRequired isRangeMode={isRangeMode} />
    },
    {
      key: "successIsIcon",
      example1: <InputSuccessIsIcon isRangeMode={isRangeMode} />,
      example2: <InputSuccessIsIconRequired isRangeMode={isRangeMode} />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" }
  ];

  return <StorybookDocExamples items={INPUT_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
