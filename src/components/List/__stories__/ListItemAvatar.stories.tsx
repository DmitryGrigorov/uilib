import { Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import AvatarImg from "../../../assets/avatar.svg";
import ListItemAvatarComponent from "../components/ListItemAvatar";
import doc from "./List.doc.mdx";

export default {
  title: "Components/Molecules/List",
  component: ListItemAvatarComponent,
  parameters: {
    docs: {
      page: doc
    }
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["l", "m", "s", "xl"]
      }
    },
    viewType: {
      control: "select",
      options: ["basic", "arrow", "collapse"]
    }
  }
} as Meta<typeof ListItemAvatarComponent>;

export const ListItemAvatar = {
  args: {
    status: "online",
    image: AvatarImg,
    isDisabled: false,
    isSelected: false,
    trailIcon: <IconSetting1 />,
    size: "l",
    children: "Avatar"
  }
};
