import { Meta, StoryFn } from "@storybook/react-vite";
import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import Textarea from "../";
import doc from "./TextArea.docs.mdx";

export default {
  title: "Components/Molecules/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    isDisabled: {
      control: "boolean"
    },
    isShowClearIcon: {
      control: "boolean"
    },
    status: {
      control: "select",
      options: ["default", "error", "warning", "success"]
    },
    statusText: {
      control: "text"
    },
    size: {
      control: "select",
      options: ["l", "m"]
    },
    error: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    tooltipContent: {
      control: "text"
    },
    tooltipPosition: {
      control: "select",
      options: [
        "topRight",
        "topLeft",
        "top",
        "bottomRight",
        "bottomLeft",
        "bottom",
        "right",
        "left"
      ]
    },
    isRequired: {
      control: "boolean"
    },
    value: {
      control: "text"
    },
    maxRows: {
      control: "number"
    },
    minRows: {
      control: "number"
    },
    isAutoSize: {
      control: "boolean"
    },
    isReadOnly: {
      control: "boolean"
    }
  }
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => {
  const [text, setText] = useState(args.value);
  const handleChange = (
    _: ChangeEvent<HTMLTextAreaElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setText(value);
  };

  // Keep the story's local text in sync with the Storybook controls panel.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setText(args.value);
  }, [args.value]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return <Textarea {...args} value={text} onChange={handleChange} />;
};

export const Demo = {
  render: Template
};
