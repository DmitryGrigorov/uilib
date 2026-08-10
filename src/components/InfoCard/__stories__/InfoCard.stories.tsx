import { Meta } from "@storybook/react-vite";
import InfoCard from "../";
import doc from "./InfoCard.doc.mdx";

export default {
  title: "Components/Molecules/InfoCard",
  component: InfoCard,
  parameters: {
    docs: {
      page: doc
    }
  },
  argTypes: {
    label: {
      control: "text"
    },
    status: {
      control: "select",
      options: ["error", "success", "info", "warning"]
    },
    size: {
      options: ["l", "m"],
      control: { type: "radio" }
    }
  }
} as Meta<typeof InfoCard>;

export const Demo = {
  args: {
    status: "info",
    width: "382px",
    label: "Info Label",
    message: "Detailed message text",
    moreButtonText: "Show more",
    isClosableIcon: true,
    collapseButtonText: "Collapse",
    size: "l"
  }
};
