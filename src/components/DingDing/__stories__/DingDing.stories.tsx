import { Meta, StoryObj } from "@storybook/react-vite";
import { DingDing } from "../DingDing";
import doc from "./DingDing.doc.mdx";

export default {
  title: "Components/Protons/DingDing",
  component: DingDing,
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof DingDing>;

export const Demo: StoryObj<typeof DingDing> = {};
