import { Meta, StoryObj } from "@storybook/react-vite";
import UploadDragFile from "../";
import doc from "./UploadDragFile.doc.mdx";

export default {
  title: "Components/Organisms/UploadDragFile",
  component: UploadDragFile,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    maxFileSize: {
      control: "number"
    }
  }
} as Meta<typeof UploadDragFile>;

export const Demo: StoryObj<typeof UploadDragFile> = {
  args: {
    isDisabled: false,
    description: "P2-l",
    accept: "image/*",
    onChange: (files) => console.log(files)
  }
};
