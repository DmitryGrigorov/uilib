import styled from "styled-components";
import { Meta, StoryFn } from "@storybook/react-vite";
import ProgressBar from "../";
import doc from "./ProgressBar.doc.mdx";

const WrapperProgressBar = styled.div`
  width: 90vw;
  padding: 0 15px;
`;

export default {
  title: "Components/Neutrons/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    variant: {
      options: ["info", "success", "warning", "error"],
      control: {
        type: "select"
      }
    },
    type: {
      options: ["Linear", "LinearSectioned"],
      control: {
        type: "select"
      }
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 }
    }
  }
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <WrapperProgressBar>
    <ProgressBar {...args} />
  </WrapperProgressBar>
);

export const Demo = {
  render: Template,
  args: {
    variant: "info",
    type: "Linear",
    progress: 20,
    label: "Info Label",
    size: "s"
  }
};
