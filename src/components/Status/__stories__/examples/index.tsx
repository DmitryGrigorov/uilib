import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  StatusCompleted,
  StatusError,
  StatusProcessing,
  StatusSuccess,
  StatusWarning,
  StatusCompletedFilled,
  StatusErrorFilled,
  StatusProcessingFilled,
  StatusSuccessFilled,
  StatusWarningFilled,
  StatusColorCyan,
  StatusColorGreen,
  StatusColorYellow,
  StatusColorPurple,
  StatusCyanFilled,
  StatusGreenFilled,
  StatusYellowFilled,
  StatusPurpleFilled
} from "./StatusExamples";

export const StatusExamples: React.FC = () => {
  const STATUS_EXAMPLES = [
    {
      key: "borders",
      completed: <StatusCompleted />,
      process: <StatusProcessing />,
      success: <StatusSuccess />,
      warning: <StatusWarning />,
      error: <StatusError />
    },
    {
      key: "bordersColor",
      cyan: <StatusColorCyan />,
      green: <StatusColorGreen />,
      yellow: <StatusColorYellow />,
      purple: <StatusColorPurple />
    },
    {
      key: "filled",
      completed: <StatusCompletedFilled />,
      process: <StatusProcessingFilled />,
      success: <StatusSuccessFilled />,
      warning: <StatusWarningFilled />,
      error: <StatusErrorFilled />
    },
    {
      key: "bordersColor",
      cyan: <StatusCyanFilled />,
      green: <StatusGreenFilled />,
      yellow: <StatusYellowFilled />,
      purple: <StatusPurpleFilled />
    }
  ];

  return <StorybookDocExamples items={STATUS_EXAMPLES} />;
};
