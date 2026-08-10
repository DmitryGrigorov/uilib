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
} from "./InputExamples";

export const InputExamples: React.FC = () => {
  const INPUT_EXAMPLES = [
    { key: "default", example1: <InputExample />, example2: <InputRequired /> },
    {
      key: "iconLeft",
      example1: <InputIconLeft />,
      example2: <InputRequiredIconLeft />
    },
    {
      key: "iconRight",
      example1: <InputIconRight />,
      example2: <InputRequiredIconRight />
    },
    {
      key: "disabled",
      example1: <InputDisabled />,
      example2: <InputRequiredDisabled />
    },
    {
      key: "iconLeftDisabled",
      example1: <InputIconLeftDisabled />,
      example2: <InputRequiredIconLeftDisabled />
    },
    {
      key: "iconRightDisabled",
      example1: <InputIconRightDisabled />,
      example2: <InputRequiredIconRightDisabled />
    },
    {
      key: "error",
      example1: <InputError />,
      example2: <InputErrorRequired />
    },
    {
      key: "errorIsIcon",
      example1: <InputErrorIsIcon />,
      example2: <InputErrorIsIconRequired />
    },
    {
      key: "warning",
      example1: <InputWarning />,
      example2: <InputWarningRequired />
    },
    {
      key: "warningIsIcon",
      example1: <InputWarningIsIcon />,
      example2: <InputWarningIsIconRequired />
    },
    {
      key: "success",
      example1: <InputSuccess />,
      example2: <InputSuccessRequired />
    },
    {
      key: "successIsIcon",
      example1: <InputSuccessIsIcon />,
      example2: <InputSuccessIsIconRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" }
  ];

  return <StorybookDocExamples items={INPUT_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
