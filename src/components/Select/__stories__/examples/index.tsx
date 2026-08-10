import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  SelectExample,
  SelectRequired,
  SelectIconLeft,
  SelectRequiredIconLeft,
  SelectDisabled,
  SelectRequiredDisabled,
  SelectIconLeftDisabled,
  SelectRequiredIconLeftDisabled,
  SelectError,
  SelectErrorRequired,
  SelectErrorIsIcon,
  SelectErrorIsIconRequired,
  SelectWarning,
  SelectWarningRequired,
  SelectWarningIsIcon,
  SelectWarningIsIconRequired,
  SelectSuccess,
  SelectSuccessRequired,
  SelectSuccessIsIcon,
  SelectSuccessIsIconRequired
} from "./SelectExamples";

export const SelectExamples: React.FC = () => {
  const EXAMPLES = [
    {
      key: "default",
      example1: <SelectExample />,
      example2: <SelectRequired />
    },
    {
      key: "iconLeft",
      example1: <SelectIconLeft />,
      example2: <SelectRequiredIconLeft />
    },
    {
      key: "disabled",
      example1: <SelectDisabled />,
      example2: <SelectRequiredDisabled />
    },
    {
      key: "iconLeftDisabled",
      example1: <SelectIconLeftDisabled />,
      example2: <SelectRequiredIconLeftDisabled />
    },
    {
      key: "error",
      example1: <SelectError />,
      example2: <SelectErrorRequired />
    },
    {
      key: "errorIsIcon",
      example1: <SelectErrorIsIcon />,
      example2: <SelectErrorIsIconRequired />
    },
    {
      key: "warning",
      example1: <SelectWarning />,
      example2: <SelectWarningRequired />
    },
    {
      key: "warningIsIcon",
      example1: <SelectWarningIsIcon />,
      example2: <SelectWarningIsIconRequired />
    },
    {
      key: "success",
      example1: <SelectSuccess />,
      example2: <SelectSuccessRequired />
    },
    {
      key: "successIsIcon",
      example1: <SelectSuccessIsIcon />,
      example2: <SelectSuccessIsIconRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "L", value: "l" },
    { label: "M", value: "m" }
  ];

  return <StorybookDocExamples items={EXAMPLES} sizeTabs={SIZE_TABS} />;
};
