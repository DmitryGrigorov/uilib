import { Meta } from "@storybook/react-vite";
import ColorPicker from "../";
import doc from "./ColorPicker.doc.mdx";

export default {
  title: "Components/Molecules/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof ColorPicker>;

export const Demo = {
  args: {
    color: "#C7514C",
    alpha: 0.3,
    isInput: true,
    lastColors: [
      "#6fc74c",
      "#5BB9FF",
      "#835b11",
      "#ff5bd1",
      "#3b0a08",
      "#C7514C",
      "#628141",
      "#4c56c7"
    ]
  }
};
