import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ProgressBarExampleDefaultInfoLinear,
  ProgressBarExampleDefaultErrorLinear,
  ProgressBarExampleDefaultSuccessLinear,
  ProgressBarExampleDefaultWarningLinear,
  ProgressBarExampleDefaultInfoLinearSizeM,
  ProgressBarExampleDefaultSuccessLinearSizeM,
  ProgressBarExampleDefaultWarningLinearSizeM,
  ProgressBarExampleDefaultErrorLinearSizeM
} from "./ProgressbarExamples";

const ProgressBarExamples: React.FC = () => {
  const EXAMPLES = [
    {
      key: "default",
      default: <ProgressBarExampleDefaultInfoLinear />,
      sizeM: <ProgressBarExampleDefaultInfoLinearSizeM />
    },
    {
      key: "success",
      default: <ProgressBarExampleDefaultSuccessLinear />,
      sizeM: <ProgressBarExampleDefaultSuccessLinearSizeM />
    },
    {
      key: "warning",
      default: <ProgressBarExampleDefaultWarningLinear />,
      sizeM: <ProgressBarExampleDefaultWarningLinearSizeM />
    },
    {
      key: "error",
      default: <ProgressBarExampleDefaultErrorLinear />,
      sizeM: <ProgressBarExampleDefaultErrorLinearSizeM />
    }
  ];

  return <StorybookDocExamples items={EXAMPLES} />;
};

export default ProgressBarExamples;
