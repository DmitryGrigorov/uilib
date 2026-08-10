import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import { SegmentedControl } from "../";
import doc from "./SegmentedControl.doc.mdx";

export default {
  title: "Components/Molecules/SegmentedControl",
  component: SegmentedControl,
  argTypes: {
    status: {
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof SegmentedControl>;

export const Default = {
  args: {
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2", icon: <IconSetting1 /> },
      { label: "3", value: "3", isDisabled: true }
    ],
    value: "1",
    size: "l"
  }
};
