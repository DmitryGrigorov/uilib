import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InputPhoneExampleDefault,
  InputPhoneExampleIsDisabled,
  InputPhoneExampleIsRequired,
  InputPhoneExampleStatus
} from "./InputPhoneExamples";

export const InputPhoneExamples: React.FC = () => {
  const INPUT_PHONE_EXAMPLES = [
    {
      key: "default",
      example1: <InputPhoneExampleDefault />,
      example2: <InputPhoneExampleIsDisabled />
    },
    {
      key: "status",
      example1: <InputPhoneExampleStatus status="error" statusText="Error" />,
      example2: (
        <InputPhoneExampleStatus status="warning" statusText="Warning" />
      )
    },
    {
      key: "status-2",
      example1: (
        <InputPhoneExampleStatus status="success" statusText="Success" />
      ),
      example2: <InputPhoneExampleIsRequired />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" }
  ];

  return (
    <StorybookDocExamples items={INPUT_PHONE_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
