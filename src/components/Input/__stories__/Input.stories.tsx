import { FocusEvent, KeyboardEvent, ChangeEvent } from "react";
import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Input from "../";
import doc from "./Input.doc.mdx";

export default {
  title: "Components/Molecules/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    inputMode: {
      options: [
        "decimal",
        "numeric",
        "email",
        "none",
        "search",
        "tel",
        "text",
        "password"
      ],
      control: { type: "radio" }
    },
    type: {
      options: [
        "text",
        "password",
        "tel",
        "number",
        "file",
        "email",
        "url",
        "search"
      ],
      control: { type: "radio" }
    },
    iconRight: {
      control: { type: "text" }
    },
    status: {
      options: ["error", "warning", "success", undefined],
      control: { type: "radio" }
    }
  }
} as Meta<typeof Input>;

export const Default = {
  args: {
    id: "id",
    value: "",
    isAutoFill: false,
    isAutoSelect: false,
    isAutoFocus: false,
    name: "name",
    placeholder: "Error label",
    type: "password",
    isDisabled: false,
    onChange: (event: ChangeEvent, value: string): void => {
      // eslint-disable-next-line no-console
      console.log(event, value);
    },
    onFocus: (event: FocusEvent): void => {
      // eslint-disable-next-line no-console
      console.log(event);
    },
    onBlur: (event: FocusEvent, value: string): void => {
      // eslint-disable-next-line no-console
      console.log(event, value);
    },
    onKeyPress: (event: KeyboardEvent): void => {
      // eslint-disable-next-line no-console
      console.log(event);
    },
    onKeyDown: (event: KeyboardEvent): void => {
      // eslint-disable-next-line no-console
      console.log(event);
    },
    inputMode: "text",
    maxLength: 40,
    width: "500px",
    pattern: "DD/DD/YYYY",
    iconLeft: <IconSetting1 width={14} height={14} />,
    className: "class-name-here",
    testId: "testId",
    statusText: "Error label",
    isReadOnly: false
  }
};

export const Placeholder = {
  args: {
    placeholder: "Filled label",
    value: "",
    isRequired: false,
    isShowClearIcon: false
  }
};

export const isRequired = {
  args: {
    placeholder: "Filled label",
    isRequired: true
  }
};

export const IconLeft = {
  args: {
    placeholder: "Filled label",
    iconLeft: <IconSetting1 />
  }
};

export const IconRight = {
  args: {
    iconRight: <IconSetting1 width={14} height={14} />,
    placeholder: "Filled label"
  }
};

export const WithValue = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    isShowClearIcon: true
  }
};

export const ClearIcon = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    isShowClearIcon: true
  }
};

export const ClearAndRightIcon = {
  args: {
    iconRight: <IconSetting1 width={14} height={14} />,
    placeholder: "Filled label",
    value: "P2-l",
    isShowClearIcon: true
  }
};

export const Disabled = {
  args: {
    placeholder: "Filled label",
    isDisabled: true
  }
};

export const DisabledWithValue = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    isDisabled: true
  }
};

export const DisabledRequired = {
  args: {
    placeholder: "Filled label",
    isDisabled: true,
    isRequired: true
  }
};

export const DisabledWithValueRequired = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    isDisabled: true,
    isRequired: true
  }
};

export const InputWithInfo = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    tooltipContent: "Some info here!",
    tooltipPosition: "right",
    isShowClearIcon: false
  }
};

export const InputWithError = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    error: "Error label"
  }
};

export const InputSuccess = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "success"
  }
};

export const Success = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "success",
    statusText: "Success"
  }
};

export const Warning = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "warning"
  }
};

export const WarningWithText = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "warning",
    statusText: "warning"
  }
};

export const InputErrorThroughStatus = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "error"
  }
};

export const ErrorThroughStatusWithText = {
  args: {
    placeholder: "Filled label",
    value: "P2-l",
    status: "error",
    statusText: "status error text"
  }
};
