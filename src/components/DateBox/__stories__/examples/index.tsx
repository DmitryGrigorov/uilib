import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  DateBoxExampleDefault,
  DateBoxExampleWeekend,
  DateBoxExampleCurrent,
  DateBoxExampleSelected,
  DateBoxExampleStart,
  DateBoxExampleIn,
  DateBoxExampleFinish,
  DateBoxExampleIsDisable
} from "./DateBoxExamples";

export const DateBoxExamples: React.FC = () => {
  const DATEBOX_EXAMPLES = [
    {
      key: "datebox",
      default: <DateBoxExampleDefault />,
      weekend: <DateBoxExampleWeekend />,
      current: <DateBoxExampleCurrent />,
      selected: <DateBoxExampleSelected />,
      start: <DateBoxExampleStart />,
      in: <DateBoxExampleIn />,
      finish: <DateBoxExampleFinish />,
      disabled: <DateBoxExampleIsDisable />
    }
  ];

  const SIZE_TABS = [
    { label: "l", value: "l" },
    { label: "m", value: "m" }
  ];

  return <StorybookDocExamples items={DATEBOX_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
