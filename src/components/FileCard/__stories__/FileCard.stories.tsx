import { Meta, StoryObj } from "@storybook/react-vite";
import { IconTrash1 } from "@dmitrygrigorov/icons";
import FileCard from "../";
import { FILE_CARD_STATUSES } from "../types";
import doc from "./FileCard.doc.mdx";

export default {
  title: "Components/Molecules/FileCard",
  component: FileCard,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    status: {
      control: "select",
      options: [...FILE_CARD_STATUSES, undefined]
    },
    isEditable: {
      control: "boolean"
    }
  }
} as Meta<typeof FileCard>;

export const Demo: StoryObj<typeof FileCard & { isButton: boolean }> = {
  render: (args) => <FileCard {...args} />,
  args: {
    fileName: "File name",
    buttonIcon: <IconTrash1 />
  }
};
