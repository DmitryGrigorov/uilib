import { Meta } from "@storybook/react-vite";
import ListItemComponent from "../components/ListItem";

export default {
  title: "Components/Molecules/List",
  component: ListItemComponent,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["l", "m", "s", "xl"]
      }
    }
  }
} as Meta<typeof ListItemComponent>;

export const ListItem = {
  args: {
    children: "List Item"
  }
};
