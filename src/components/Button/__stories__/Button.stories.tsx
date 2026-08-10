import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../";
import doc from "./Button.doc.mdx";

export default {
  title: "Components/Foundations/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    color: {
      options: [undefined, "red", "yellow", "green", "gray"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["l", "m", "s", "xs"],
      control: {
        type: "select"
      }
    },
    viewType: {
      options: ["primary", "ghost", "link", "icon", "secondary"],
      control: {
        type: "select"
      }
    }
  }
} as Meta<typeof Button>;

export const Demo = {
  args: {
    children: "P1-s",
    icon: <IconSetting1 />,
    viewType: "primary",
    size: "l",
    isLoading: false,
    isDisabled: false
  }
};
