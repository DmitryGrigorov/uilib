import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import ListRadioButtonsComponent from "../components/ListRadioButtons";
import doc from "./List.doc.mdx";

export default {
  title: "Components/Molecules/List",
  component: ListRadioButtonsComponent,
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
} as Meta<typeof ListRadioButtonsComponent>;

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

export const ListRadioButtons = {
  args: {
    header: {
      content: "List Header"
    },
    dataSource: dataSource.map((item) => ({
      ...item,
      trailIcon: <IconSetting1 />
    }))
  },

  argTypes: {
    viewType: {
      control: "select",
      options: ["basic", "arrow", "collapse"]
    }
  }
};
