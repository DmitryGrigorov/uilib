import { Meta, StoryObj } from "@storybook/react-vite";
import Status from "../index";
import doc from "./Status.doc.mdx";

export default {
  title: "Components/Neutrons/Status",
  component: Status,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    colorType: {
      control: {
        type: "select"
      }
    },
    leadIcon: {
      control: {
        type: "text"
      }
    },
    trailIcon: {
      control: {
        type: "text"
      }
    },
    status: {
      control: {
        type: "select"
      }
    }
  }
} as Meta<typeof Status>;

export const Demo: StoryObj<typeof Status> = {
  args: {
    children: "Label"
  }
};
