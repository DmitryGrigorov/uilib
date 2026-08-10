import { Meta } from "@storybook/react-vite";
import Calendar from "../Calendar";
import doc from "./Calendar.doc.mdx";

export default {
  title: "Components/Organisms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    minDate: {
      control: "text"
    },
    maxDate: {
      control: "text"
    },
    date: {
      control: "text"
    }
  }
} as Meta<typeof Calendar>;

export const Demo = {
  args: {
    date: "",
    minDate: "",
    maxDate: "",
    locale: "ru"
  }
};
