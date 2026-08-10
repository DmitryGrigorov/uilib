import { Meta } from "@storybook/react-vite";
import { IconUser } from "@dmitrygrigorov/icons";
import AvatarImg from "../../../assets/avatar.svg";
import { AVATAR_STATUS } from "../types";
import { Avatar } from "../";
import doc from "./Avatar.doc.mdx";

export default {
  title: "Components/Neutrons/Avatar",
  component: Avatar,
  argTypes: {
    status: {
      options: [...AVATAR_STATUS],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Avatar>;

export const AvatarText = {
  args: {
    text: "A",
    isDisabled: false
  }
};

export const AvatarIcon = {
  args: {
    icon: <IconUser />,
    isDisabled: false,
    status: "online"
  }
};

export const AvatarImage = {
  args: {
    image: AvatarImg,
    isDisabled: false,
    status: "online"
  }
};

export const AvatarDisabled = {
  args: {
    isDisabled: true,
    status: "online"
  }
};
