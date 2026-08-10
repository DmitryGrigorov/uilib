import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import PageHeader from "../";
import doc from "./PageHeader.doc.mdx";

export default {
  title: "Components/Foundations/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof PageHeader>;

export const Demo = {
  args: {
    text: "Heading text",
    isLeadIcon: true,
    trailIcon: <IconSetting1 />
  }
};
