import { Meta } from "@storybook/react-vite";
import ThemeProvider from "../../ThemeProvider/ThemeProvider";
import { DARK_THEME } from "../../Pallette/themes";
import RadioButton from "../";
import doc from "./RadioButton.doc.mdx";

export default {
  title: "Components/Protons/RadioButton",
  component: RadioButton,
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
    label: {
      control: {
        type: "text"
      }
    }
  }
} as Meta<typeof RadioButton>;

export const Default = {
  args: {
    isChecked: false,
    isDisabled: false
  }
};

export const Checked = {
  args: {
    isChecked: true,
    isDisabled: false
  }
};

export const Disabled = {
  args: {
    isChecked: false,
    isDisabled: true
  }
};

export const CheckedDisabled = {
  args: {
    isChecked: true,
    isDisabled: true
  }
};

export const DarkDefault = {
  parameters: {
    decorators: [
      (Story: () => JSX.Element): JSX.Element => (
        <ThemeProvider theme={DARK_THEME}>
          <Story />
        </ThemeProvider>
      )
    ]
  },

  globals: {
    backgrounds: {
      value: "dark"
    }
  }
};
