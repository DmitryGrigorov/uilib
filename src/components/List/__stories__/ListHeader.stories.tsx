import { Meta } from "@storybook/react-vite";
import ListHeaderComponent from "../components/ListHeader";

export default {
  title: "Components/Molecules/List",
  component: ListHeaderComponent,
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
} as Meta<typeof ListHeaderComponent>;

export const ListHeader = {
  args: {
    children: "H-s"
  }
};

export const ListHeaderAvatar = {
  args: {
    children: "H-s",
    avatar: {
      status: "online",
      text: "HS"
    }
  }
};
