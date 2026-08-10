import StorybookDocExamples from "../../../../../components/helpers/StorybookDocExamples";
import {
  TableButtonTextDisabled,
  TableButtonIconDefault,
  TableButtonIconDisabled,
  TableButtonIconPressed,
  TableButtonTextDefault,
  TableButtonTextIconDefault,
  TableButtonTextIconDisabled,
  TableButtonTextIconPressed,
  TableButtonTextPressed
} from "./TableButtonExamples";

export const TableButtonExamples: React.FC = () => {
  const TABLE_BUTTON_EXAMPLES = [
    {
      key: "Default",
      default: <TableButtonTextIconDefault />,
      pressed: <TableButtonTextIconPressed />,
      disabled: <TableButtonTextIconDisabled />
    },
    {
      key: "Icon",
      default: <TableButtonIconDefault />,
      pressed: <TableButtonIconPressed />,
      disabled: <TableButtonIconDisabled />
    },
    {
      key: "Text",
      default: <TableButtonTextDefault />,
      pressed: <TableButtonTextPressed />,
      disabled: <TableButtonTextDisabled />
    }
  ];

  const SIZE_TABS = [
    { label: "s", value: "s" },
    { label: "xs", value: "xs" }
  ];

  return (
    <StorybookDocExamples items={TABLE_BUTTON_EXAMPLES} sizeTabs={SIZE_TABS} />
  );
};
