import { Meta } from "@storybook/react-vite";
import SearchBox from "../";
import doc from "./SearchBox.doc.mdx";

export default {
  title: "Components/Molecules/SearchBox",
  component: SearchBox,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    value: {
      control: {
        type: "text"
      }
    },
    placeholder: {
      control: {
        type: "text"
      }
    },
    isDisabled: {
      control: {
        type: "boolean"
      }
    },
    label: {
      control: {
        type: "object"
      }
    },
    id: {
      control: {
        type: "text"
      }
    },
    name: {
      control: {
        type: "text"
      }
    },
    maxLength: {
      control: {
        type: "number"
      }
    },
    type: {
      control: {
        type: "select",
        options: ["basic", "global"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["l", "m"]
      }
    },
    wait: {
      control: "number"
    },
    status: {
      options: ["default", "error"],
      control: { type: "radio" }
    },
    statusText: {
      control: "text"
    },
    isStatusIcon: {
      type: "boolean"
    },
    viewType: {
      control: "radio",
      options: ["round", "line"]
    }
  }
} as Meta<typeof SearchBox>;

export const Demo = {
  args: {
    isDisabled: false,
    width: "400px"
  }
};
