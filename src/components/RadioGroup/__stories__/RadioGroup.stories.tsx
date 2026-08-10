import { Meta } from "@storybook/react-vite";
import { RadioGroup } from "../";
import doc from "./RadioGroup.doc.mdx";

export default {
  title: "Components/Protons/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    headerText: { controle: { type: "text" } },
    value: {
      control: {
        type: "text"
      }
    },
    status: {
      options: [undefined, "error", "warning", "success"],
      control: {
        type: "select"
      }
    },
    statusText: { control: { type: "text" } }
  }
} as Meta<typeof RadioGroup>;

export const Default = {
  args: {
    options: [
      {
        label: "one",
        value: "one"
      },
      {
        label: "two",
        value: "two"
      }
    ]
  }
};
