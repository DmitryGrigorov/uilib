import { Meta, StoryFn } from "@storybook/react-vite";
import { ChangeEvent, MouseEvent, useState } from "react";
import InputPhone from "../";
import doc from "./InputPhone.doc.mdx";

export default {
  title: "Components/Molecules/InputPhone",
  component: InputPhone,
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
    viewType: {
      control: "radio",
      options: ["round", "line"]
    }
  }
} as Meta<typeof InputPhone>;

const Template: StoryFn<typeof InputPhone> = (args) => {
  const [phone, setPhone] = useState(args.value);
  const handleChange = (
    _: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
    value: string
  ): void => {
    setPhone(value);
  };
  return (
    <div>
      <InputPhone {...args} value={phone} onChange={handleChange} />
    </div>
  );
};

export const Demo = {
  render: Template,

  args: {
    placeholder: "Phone number"
  }
};
