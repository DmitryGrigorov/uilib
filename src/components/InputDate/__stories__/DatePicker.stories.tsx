import { Meta, StoryObj } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import DatePicker from "../DatePicker";
import doc from "./InputDate.doc.mdx";

export default {
  title: "Components/Molecules/InputDate",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    status: {
      options: ["default", "error", "warning", "success"],
      control: { type: "radio" }
    },
    isReadOnly: {
      control: {
        type: "boolean"
      }
    },
    isShowClearIcon: {
      control: {
        type: "boolean"
      }
    },
    isRangeMode: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<typeof DatePicker>;

export const Default: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    id: "id",
    isAutoFill: false,
    isAutoSelect: false,
    isAutoFocus: false,
    name: "name",
    isDisabled: false,
    iconLeft: <IconSetting1 width={14} height={14} />,
    className: "class-name-here",
    testId: "testId",
    statusText: "Error label"
  }
};

export const Placeholder: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isRequired: false,
    isShowClearIcon: false
  }
};

export const IsRequired: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isRequired: true
  }
};

export const IconLeft: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    iconLeft: <IconSetting1 />
  }
};

export const IconRight: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px"
  }
};

export const WithValue: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isShowClearIcon: true
  }
};

export const ClearIcon: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isShowClearIcon: true
  }
};

export const ClearAndRightIcon: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isShowClearIcon: true
  }
};

export const Disabled: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isDisabled: true
  }
};

export const DisabledWithValue: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isDisabled: true
  }
};

export const DisabledRequired: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isDisabled: true,
    isRequired: true
  }
};

export const DisabledWithValueRequired: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isDisabled: true,
    isRequired: true
  }
};

export const InputWithInfo: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    isShowClearIcon: false
  }
};

export const InputWithError: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "error",
    statusText: "Error label"
  }
};

export const InputSuccess: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "success"
  }
};

export const Success: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "success",
    statusText: "Success"
  }
};

export const Warning: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "warning"
  }
};

export const WarningWithText: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "warning",
    statusText: "warning"
  }
};

export const InputErrorThroughStatus: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "error"
  }
};

export const ErrorThroughStatusWithText: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px",
    status: "error",
    statusText: "status error text"
  }
};

export const InputMaskWithGuide: StoryObj<typeof DatePicker> = {
  args: {
    isGuide: true,
    placeholder: "Select a date",
    value: "",
    width: "400px"
  }
};
