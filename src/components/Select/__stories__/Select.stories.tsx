import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Select from "../index";
import AvatarImg from "../../../assets/avatar.svg";
import doc from "./Select.doc.mdx";

const optionsData = [
  { label: "Moscow", value: "Moscow" },
  { label: "Paris", value: "Paris" },
  { label: "Prague", value: "Prague" },
  { label: "Amsterdam", value: "Amsterdam", isDisabled: true },
  { label: "Berlin", value: "Berlin" },
  { label: "London", value: "London" },
  { label: "Riga", value: "Riga" }
];

const optionsUsers = [
  { label: "User1", value: "User1" },
  {
    label: "User2",
    value: "User2",
    url: AvatarImg
  },
  { label: "User3", value: "User3", url: AvatarImg },
  { label: "User4", value: "User4" }
];

export default {
  title: "Components/Molecules/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["l", "m"]
    },
    width: {
      control: {
        type: "text"
      }
    },
    status: {
      options: ["default", "error", "warning", "success"],
      control: { type: "select" }
    },
    viewType: {
      control: {
        type: "radio"
      },
      options: ["round", "line"]
    },
    isReadOnly: {
      control: { type: "boolean" }
    }
  }
} as Meta<typeof Select>;

export const Demo = {
  args: {
    size: "l",
    placeholder: "Select a city",
    iconLeft: <IconSetting1 />,
    options: optionsData,
    isClearable: true,
    isRequired: true,
    isDisabled: false,
    width: "500px",
    statusText: "",
    isAutoFocus: false,
    isDrawer: false
  }
};

export const Avatar = {
  args: {
    size: "l",
    placeholder: "Select a user",
    options: optionsUsers,
    isClearable: true,
    isRequired: true,
    isDisabled: false,
    width: "500px",
    statusText: "",
    isAutoFocus: false,
    type: "avatar"
  }
};
