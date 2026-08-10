import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import MultiSelect from "../";
import AvatarImg from "../../../assets/avatar.svg";
import doc from "./MultiSelect.doc.mdx";
import MultiSelectImg from "./assets/MultiSelect.png";

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
  { label: "User4", value: "User4" },
  { label: "User5", value: "User5", url: AvatarImg },
  { label: "User6", value: "User6" },
  { label: "User7", value: "User7" },
  { label: "User8", value: "User8" },
  { label: "User9", value: "User9" },
  { label: "User10", value: "User10" }
];

export default {
  title: "Components/Molecules/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    assets: [MultiSelectImg]
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["l", "m"]
      }
    },
    width: {
      control: {
        type: "text"
      }
    },
    status: {
      control: {
        type: "select",
        options: ["default", "error", "warning", "success"]
      }
    },
    viewType: {
      control: "radio",
      options: ["round", "line"]
    },
    isReadOnly: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<
  typeof MultiSelect<{ label: string; value: string }, "value", "label">
>;

export const Demo = {
  args: {
    size: "l",
    placeholder: "Select a city",
    options: optionsData,
    isClearable: true,
    isRequired: true,
    isDisabled: false,
    width: "500px",
    iconLeft: <IconSetting1 />,
    statusText: "",
    isAutoFocus: false,
    isDrawer: false
  }
};

export const Avatar = {
  args: {
    size: "l",
    placeholder: "Select users",
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
