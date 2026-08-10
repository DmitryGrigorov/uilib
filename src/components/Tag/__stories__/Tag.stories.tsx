import { Meta } from "@storybook/react-vite";
import { IconSetting1, IconUser } from "@dmitrygrigorov/icons";
import Tag from "../";
import doc from "./Tag.doc.mdx";

export default {
  title: "Components/Neutrons/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    leadIcon: {
      control: {
        type: "text"
      }
    }
  }
} as Meta<typeof Tag>;

export const Demo = {
  args: {
    isStroke: true,
    children: "P2-l",
    leadIcon: <IconSetting1 />,
    isClosable: true
  }
};

export const TagAvatar = {
  args: {
    children: "P2-l",
    avatarProps: {
      status: "online",
      icon: <IconUser />
    }
  }
};
