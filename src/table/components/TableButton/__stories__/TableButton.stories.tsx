import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import TableButton from "../";
import doc from "./TableButton.doc.mdx";

export default {
  title: "Components/Table/Components/TableButton",
  component: TableButton,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["s", "xs"]
    },
    isPressed: {
      control: "boolean"
    }
  }
} as Meta<typeof TableButton>;

export const Demo = {
  args: {
    size: "xs",
    children: "P1-s",
    icon: <IconSetting1 />
  }
};
