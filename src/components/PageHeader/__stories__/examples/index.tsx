import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  PageHeaderExampleText,
  PageHeaderExampleLeadIcon,
  PageHeaderExampleTrail,
  PageHeaderExampleAll
} from "./PageHeaderExamples";

export const PageHeaderExamples: React.FC = () => {
  const PAGEHEADER_EXAMPLES = [
    {
      key: "pageHeader",
      example1: <PageHeaderExampleText />,
      example2: <PageHeaderExampleLeadIcon />
    },
    {
      key: "separated",
      example1: <PageHeaderExampleTrail />,
      example2: <PageHeaderExampleAll />
    }
  ];

  return <StorybookDocExamples items={PAGEHEADER_EXAMPLES} />;
};
