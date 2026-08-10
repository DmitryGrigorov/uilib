import { Meta } from "@storybook/react-vite";
import Preloader from "../";
import doc from "./Preloader.doc.mdx";

export default {
  title: "Components/Neutrons/Preloader",
  component: Preloader,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    type: {
      options: ["star", "circular", "loading"],
      control: {
        type: "select"
      }
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 }
    }
  }
} as Meta<typeof Preloader>;

export const Example = {
  args: {
    type: "star",
    progress: 20,
    isShowLabel: true
  }
};
