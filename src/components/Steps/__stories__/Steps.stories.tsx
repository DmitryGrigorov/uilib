import { Meta, StoryObj } from "@storybook/react-vite";
import Steps from "../";
import { IStepsItem } from "../types";
import doc from "./Steps.doc.mdx";

export default {
  title: "Components/Molecules/Steps",
  component: Steps,
  parameters: {
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/YGG-%7C-Basic?node-id=14844-134531&t=P7RPcpQI2UPbJDxJ-0"
    }
  }
} as Meta<typeof Steps>;

const items = [
  { key: 1, title: "P1-s", description: "P2-m" },
  { key: 2, title: "P1-s", description: "P2-m" },
  { key: 3, title: "P1-s", description: "P2-m" },
  { key: 4, title: "P1-s", description: "P2-m" },
  { key: 5, title: "P1-s", description: "P2-m" },
  { key: 6, title: "P1-s", description: "P2-m" }
] as IStepsItem[];

export const Demo: StoryObj<typeof Steps> = {
  args: {
    size: "l",
    current: 3,
    direction: "horizontal",
    steps: items
  }
};
