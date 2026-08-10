import { Meta } from "@storybook/react-vite";
import ListComponent from "../components/List";
import doc from "./List.doc.mdx";

export default {
  title: "Components/Molecules/List",
  component: ListComponent,
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
    },
    viewType: {
      control: "select",
      options: ["basic", "arrow", "collapse"]
    }
  }
} as Meta<typeof ListComponent>;

const dataSource = [
  {
    label: "Item1"
  },
  {
    label: "Item2"
  },
  {
    label: "Item3"
  }
];

export const List = {
  args: {
    header: {
      content: "List Header"
    },
    dataSource,
    size: "m"
  }
};
