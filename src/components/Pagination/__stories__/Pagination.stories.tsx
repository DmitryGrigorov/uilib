import { Meta } from "@storybook/react-vite";
import Pagination from "../";
import doc from "./Pagination.doc.mdx";

export default {
  title: "Components/Molecules/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      page: doc
    }
  },
  argTypes: {
    width: {
      type: "string"
    },
    isFill: {
      type: "boolean"
    }
  }
} as Meta<typeof Pagination>;

export const Demo = {
  args: {
    isShowSwitchers: true,
    totalPages: 100
  }
};
