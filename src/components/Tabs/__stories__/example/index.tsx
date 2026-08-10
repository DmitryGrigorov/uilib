import StorybookDocExamples from "../.././../helpers/StorybookDocExamples";
import { TabsExampleLight } from "./TabsExamplesLight";

export const TabsExamples: React.FC = () => {
  const TABS_EXAMPLES = [
    {
      key: "default",
      example1: <TabsExampleLight />
    }
  ];

  const SIZE_TABS = [
    { label: "Size L", value: "l" },
    { label: "Size M", value: "m" }
  ];

  return <StorybookDocExamples items={TABS_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
