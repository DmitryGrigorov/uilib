import { Meta } from "@storybook/react-vite";
import doc from "./CriticalError.doc.mdx";
import CriticalError from ".";

export default {
  title: "Components/Feedback/CriticalError",
  component: CriticalError,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof CriticalError>;

export const Demo = {};
