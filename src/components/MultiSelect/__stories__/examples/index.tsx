import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  MultiSelectExample,
  MultiSelectRequired,
  MultiSelectIconLeft,
  MultiSelectRequiredIconLeft,
  MultiSelectDisabled,
  MultiSelectRequiredDisabled,
  MultiSelectIconLeftDisabled,
  MultiSelectRequiredIconLeftDisabled,
  MultiSelectError,
  MultiSelectErrorRequired,
  MultiSelectErrorIsIcon,
  MultiSelectErrorIsIconRequired,
  MultiSelectWarning,
  MultiSelectWarningRequired,
  MultiSelectWarningIsIcon,
  MultiSelectWarningIsIconRequired,
  MultiSelectSuccess,
  MultiSelectSuccessRequired,
  MultiSelectSuccessIsIcon,
  MultiSelectSuccessIsIconRequired
} from "./MultiSelectExamples";

export const MultiSelectExamples: React.FC = () => {
  const EXAMPLES = [
    {
      key: "default",
      example1: <MultiSelectExample />,
      example2: <MultiSelectRequired />
    },
    {
      key: "iconLeft",
      example1: <MultiSelectIconLeft />,
      example2: <MultiSelectRequiredIconLeft />
    },
    {
      key: "disabled",
      example1: <MultiSelectDisabled />,
      example2: <MultiSelectRequiredDisabled />
    },
    {
      key: "iconLeftDisabled",
      example1: <MultiSelectIconLeftDisabled />,
      example2: <MultiSelectRequiredIconLeftDisabled />
    },
    {
      key: "error",
      example1: <MultiSelectError />,
      example2: <MultiSelectErrorRequired />
    },
    {
      key: "errorIsIcon",
      example1: <MultiSelectErrorIsIcon />,
      example2: <MultiSelectErrorIsIconRequired />
    },
    {
      key: "warning",
      example1: <MultiSelectWarning />,
      example2: <MultiSelectWarningRequired />
    },
    {
      key: "warningIsIcon",
      example1: <MultiSelectWarningIsIcon />,
      example2: <MultiSelectWarningIsIconRequired />
    },
    {
      key: "success",
      example1: <MultiSelectSuccess />,
      example2: <MultiSelectSuccessRequired />
    },
    {
      key: "successIsIcon",
      example1: <MultiSelectSuccessIsIcon />,
      example2: <MultiSelectSuccessIsIconRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "L", value: "l" },
    { label: "M", value: "m" }
  ];

  return <StorybookDocExamples items={EXAMPLES} sizeTabs={SIZE_TABS} />;
};
