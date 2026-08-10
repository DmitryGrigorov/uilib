import { Meta } from "@storybook/react-vite";
import CheckBoxGroup from "../";
import doc from "./CheckBoxGroup.doc.mdx";

export default {
  title: "Components/Protons/CheckBoxGroup",
  component: CheckBoxGroup,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=1478%3A10575"
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
} as Meta<typeof CheckBoxGroup>;

export const Demo = {
  args: {
    value: ["two"],
    options: [
      {
        label: "CheckBox 1",
        value: "one"
      },
      {
        label: "CheckBox 2",
        value: "two"
      }
    ]
  }
};
