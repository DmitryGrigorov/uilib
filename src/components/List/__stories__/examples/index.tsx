import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ListExampleBasic,
  ListExampleBasicWithItemTrailIcon,
  ListExampleBasicPressed,
  ListExampleArrow,
  ListExampleCollapse,
  ListExampleBasicCheckBox,
  ListExampleBasicRadio,
  ListExampleBasicSwitch,
  ListExampleBasicAvatar
} from "./ListExamples";

export const ListExamples: React.FC = () => {
  const LIST_EXAMPLES = [
    {
      key: "default",
      example1: <ListExampleBasic />,
      example2: <ListExampleBasicWithItemTrailIcon />
    },
    {
      key: "pressedAndArrow",
      example1: <ListExampleBasicPressed />,
      example2: <ListExampleArrow />
    },
    {
      key: "checkBoxAndSwitch",
      example1: <ListExampleBasicCheckBox />,
      example2: <ListExampleBasicSwitch />
    },
    {
      key: "radioAndAvatar",
      example1: <ListExampleBasicRadio />,
      example2: <ListExampleBasicAvatar />
    },
    {
      key: "collapse",
      example1: <ListExampleCollapse />,
      example2: <div style={{ width: "400px" }} />
    }
  ];

  const SIZE_TABS = [
    { label: "Size L", value: "l" },
    { label: "Size M", value: "m" }
  ];

  return <StorybookDocExamples items={LIST_EXAMPLES} sizeTabs={SIZE_TABS} />;
};
