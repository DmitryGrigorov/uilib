import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InputColorDisabled,
  InputColorDisabledRequired,
  InputColorError,
  InputColorErrorRequired,
  InputColorExample,
  InputColorLine,
  InputColorLineRequired,
  InputColorReadOnly,
  InputColorReadOnlyRequired,
  InputColorRequired,
  InputColorSuccess,
  InputColorSuccessRequired,
  InputColorWarning,
  InputColorWarningRequired
} from "./InputColorExamples";

export const InputColorExamples = (): JSX.Element => {
  const INPUT_COLOR_EXAMPLES = [
    {
      key: "default",
      example1: <InputColorExample />,
      example2: <InputColorRequired />
    },
    {
      key: "disabled",
      example1: <InputColorDisabled />,
      example2: <InputColorDisabledRequired />
    },
    {
      key: "error",
      example1: <InputColorError />,
      example2: <InputColorErrorRequired />
    },
    {
      key: "warning",
      example1: <InputColorWarning />,
      example2: <InputColorWarningRequired />
    },
    {
      key: "success",
      example1: <InputColorSuccess />,
      example2: <InputColorSuccessRequired />
    },
    {
      key: "readOnly",
      example1: <InputColorReadOnly />,
      example2: <InputColorReadOnlyRequired />
    },
    {
      key: "line",
      example1: <InputColorLine />,
      example2: <InputColorLineRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" }
  ];

  return (
    <StorybookDocExamples items={INPUT_COLOR_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
