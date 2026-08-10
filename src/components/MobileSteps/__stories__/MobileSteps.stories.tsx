import { Meta, StoryObj } from "@storybook/react-vite";
import MobileSteps from "../";
import doc from "./MobileSteps.doc.mdx";

export default {
  title: "Components/Molecules/MobileSteps",
  component: MobileSteps,
  argTypes: {
    type: {
      options: ["progress", "gallery"],
      control: { type: "radio" }
    },
    onChange: (step: number): void => {
      // eslint-disable-next-line no-console
      console.log(step);
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/YGG-%7C-Basic?node-id=14844-134531&t=P7RPcpQI2UPbJDxJ-0"
    }
  }
} as Meta<typeof MobileSteps>;

export const Demo: StoryObj<typeof MobileSteps> = {
  args: {
    steps: 6,
    current: 2,
    type: "progress",
    width: "600px"
  }
};
