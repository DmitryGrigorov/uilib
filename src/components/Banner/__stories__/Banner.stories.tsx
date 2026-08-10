import { Meta, StoryFn } from "@storybook/react-vite";
import React from "react";
import Button from "../../Button";
import { labelStatus } from "../../Label";
import Banner from "../Banner";
import { useBannerService, BannerService } from "../BannerService";
import { IBannerProps } from "../types";
import doc from "./Banner.doc.mdx";

export default {
  title: "Components/Molecules/Banner",
  component: Banner,
  parameters: {
    docs: {
      page: doc
    }
  },
  argTypes: {
    type: {
      control: "select",
      options: ["shifting", "overlay"]
    },
    primaryTitle: {
      control: "text"
    },
    status: {
      control: "select",
      options: labelStatus
    }
  }
} as Meta<typeof Banner>;

const Example: React.FC<IBannerProps> = (props) => {
  const [bannerShow] = useBannerService();
  const handleBannerShow = (): void => {
    bannerShow({ ...props });
  };

  return (
    <Button viewType="primary" onClick={handleBannerShow}>
      Open banner
    </Button>
  );
};

const BannerServiceExample: React.FC<IBannerProps> = (props) => (
  <BannerService>
    <Example {...props} />
  </BannerService>
);

const Template: StoryFn<typeof Banner> = (args) => (
  <BannerServiceExample {...args} />
);

export const Demo = {
  render: Template,

  args: {
    status: "info",
    isIcon: true,
    title: "Weak internet connection",
    message:
      "Your internet signal is weak, which may make the application unstable.",
    secondaryButton: {
      title: "Secondary action"
    },
    type: "shifting"
  }
};
