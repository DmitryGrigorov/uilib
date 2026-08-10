import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  InfoCardInfo,
  InfoCardWarning,
  InfoCardError,
  InfoCardSuccess
} from "./InfoCardExamples";

export const InfoCardExamples: React.FC = () => {
  const INFOCARD_EXAMPLES = [
    {
      key: "info",
      info: <InfoCardInfo />
    },
    {
      key: "warning",
      warning: <InfoCardWarning />
    },
    {
      key: "error",
      error: <InfoCardError />
    },
    {
      key: "success",
      success: <InfoCardSuccess />
    }
  ];

  const SIZE_TABS = [
    { label: "m", value: "m" },
    { label: "l", value: "l" }
  ];

  return (
    <StorybookDocExamples items={INFOCARD_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
