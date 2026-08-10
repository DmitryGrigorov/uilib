import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  TooltipExampleBottom,
  TooltipExampleBottomRight,
  TooltipExampleLeft,
  TooltipExampleBottomLeft,
  TooltipExampleRight,
  TooltipExampleTop,
  TooltipExampleTopRight,
  TooltipExampleTopLeft
} from "./TooltipExamples";

export const TooltipExamples: React.FC = () => {
  const TOOLTIP_EXAMPLES = [
    {
      key: "bottom",
      left: <TooltipExampleBottomLeft />,
      right: <TooltipExampleBottomRight />,
      bottom: <TooltipExampleBottom />,
      sideRight: <TooltipExampleRight />
    },
    {
      key: "top",
      left: <TooltipExampleTopLeft />,
      right: <TooltipExampleTopRight />,
      top: <TooltipExampleTop />,
      sideLeft: <TooltipExampleLeft />
    }
  ];

  return <StorybookDocExamples items={TOOLTIP_EXAMPLES} />;
};
