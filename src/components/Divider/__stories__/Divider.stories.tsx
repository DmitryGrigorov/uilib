import { Meta, StoryFn } from "@storybook/react-vite";
import Divider from "../Divider";
import doc from "./Divider.doc.mdx";

export default {
  title: "Components/Protons/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => (
  <Divider {...args}>{args.children}</Divider>
);

export const Demo = {
  render: Template,

  args: {
    width: "350px",
    height: "320px",
    children: "P2-l",
    direction: "row",
    align: "center",
    status: "default"
  }
};
