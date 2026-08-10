import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Switch from "../";
import doc from "./Switch.doc.mdx";

export default {
  title: "Components/Neutrons/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    textDisabled: {
      control: {
        type: "text"
      }
    }
  }
} as Meta<typeof Switch>;

export const Default = {
  args: {
    isChecked: false,
    isDisabled: false,
    hasTextOrIcon: true,
    textBefore: "",
    textAfter: ""
  }
};

export const IconAfter = {
  args: {
    isChecked: false,
    isDisabled: false,
    hasTextOrIcon: true,
    iconAfter: <IconSetting1 />
  }
};

export const IconBefore = {
  args: {
    isChecked: false,
    isDisabled: false,
    hasTextOrIcon: true,
    iconBefore: <IconSetting1 />
  }
};
