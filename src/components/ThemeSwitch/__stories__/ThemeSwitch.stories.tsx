import { Meta } from "@storybook/react-vite";
import ThemeSwitch from "..";
import doc from "./ThemeSwitch.doc.mdx";

export default {
  title: "Components/Neutrons/ThemeSwitch",
  component: ThemeSwitch,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof ThemeSwitch>;

export const Default = {
  args: {
    themeSelected: "light"
  }
};
