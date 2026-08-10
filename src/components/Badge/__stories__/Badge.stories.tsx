import { Meta } from "@storybook/react-vite";
import Badge from "../";
import doc from "./Badge.doc.mdx";

export default {
  title: "Components/Protons/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Badge>;

export const Demo = {
  args: {
    children: "P2-s"
  }
};
