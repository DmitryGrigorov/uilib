import { Meta, StoryObj } from "@storybook/react-vite";
import InputMask from "../";
import doc from "./InputMask.doc.mdx";

export default {
  title: "Components/Molecules/InputMask",
  component: InputMask,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    iconLeft: {
      control: "text"
    },
    iconRight: {
      control: "text"
    },
    type: {
      options: ["text", "password", "tel", "email", "url", "search"],
      control: { type: "select" }
    },
    isReadOnly: {
      control: "boolean"
    },
    isDisabled: {
      control: "boolean"
    }
  }
} as Meta<typeof InputMask>;

export const InputMaskWithShowMask: StoryObj<typeof InputMask> = {
  args: {
    type: "text",
    placeholder: "input mask with guide",
    value: "111111",
    mask: "******",
    width: "300px",
    isShowMask: true
  }
};
