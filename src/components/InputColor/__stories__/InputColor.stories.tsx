import { Meta } from "@storybook/react-vite";
import InputColor from "../";
import doc from "./InputColor.doc.mdx";

export default {
  title: "Components/Molecules/InputColor",
  component: InputColor,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof InputColor>;

export const Demo = {
  args: {
    color: "#FFFFFF",
    statusText: "Error label"
  }
};
