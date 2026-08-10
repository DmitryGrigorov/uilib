import { Meta } from "@storybook/react-vite";
import Cluster from "../";
import doc from "./Cluster.doc.mdx";

export default {
  title: "Components/Foundations/Cluster",
  component: Cluster,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Cluster>;

export const Demo = {
  args: {
    children: "P1-s"
  }
};
