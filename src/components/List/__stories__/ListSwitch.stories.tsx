import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import ListSwitchComponent from "../components/ListSwitch";
import doc from "./List.doc.mdx";

export default {
  title: "Components/Molecules/List",
  component: ListSwitchComponent,
  parameters: {
    docs: {
      page: doc
    }
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["l", "m", "s", "xl"]
      }
    }
  }
} as Meta<typeof ListSwitchComponent>;

const dataSource = [
  {
    label: "Item1",
    value: "Item1"
  },
  {
    label: "Item2",
    value: "Item2"
  },
  {
    label: "Item3",
    value: "Item3"
  }
];

export const ListSwitch = {
  args: {
    header: {
      content: "List Header"
    },
    dataSource: dataSource.map((item) => ({
      ...item,
      leadIcon: <IconSetting1 />
    }))
  },

  argTypes: {
    viewType: {
      control: "select",
      options: ["basic", "arrow", "collapse"]
    }
  }
};
