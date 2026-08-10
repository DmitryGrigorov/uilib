import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  SearchBoxExampleLabel,
  SearchBoxExampleIsDisabled,
  SearchBoxExampleDefault,
  SearchBoxExampleValue
} from "./SearchBoxExamples";

export const SearchBoxExamples: React.FC = () => {
  const SEARCHBOX_EXAMPLES = [
    {
      key: "default",
      example1: <SearchBoxExampleDefault type="basic" />,
      example2: <SearchBoxExampleDefault type="global" />
    },
    {
      key: "disabled",
      example1: <SearchBoxExampleIsDisabled />,
      example2: <SearchBoxExampleIsDisabled type="global" />
    },
    {
      key: "error",
      example1: <SearchBoxExampleLabel />,
      example2: <SearchBoxExampleLabel type="global" />
    },
    {
      key: "value",
      example1: <SearchBoxExampleValue />,
      example2: <SearchBoxExampleValue type="global" />
    }
  ];

  const SIZE_TABS = [
    { label: "Size L", value: "l" },
    { label: "Size M", value: "m" }
  ];

  return (
    <StorybookDocExamples items={SEARCHBOX_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
