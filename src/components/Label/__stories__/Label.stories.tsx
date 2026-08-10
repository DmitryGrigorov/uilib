import { Meta } from "@storybook/react-vite";
import { labelStatus } from "../types";
import Label from "../";
import doc from "./Label.doc.mdx";

export default {
  title: "Components/Protons/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    status: {
      options: labelStatus,
      control: {
        type: "select"
      }
    },
    isIcon: {
      control: {
        type: "boolean"
      }
    },
    as: {
      control: {
        type: "select"
      },
      options: ["p", "span", "div", "label"]
    }
  }
} as Meta<typeof Label>;

export const Demo = {
  args: {
    children: "Label",
    isRequired: true,
    size: "s",
    isDisabled: false,
    status: "filled"
  }
};
