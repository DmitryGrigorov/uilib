import { Meta } from "@storybook/react-vite";
import React from "react";
import { IconDirectboxDefault, IconSetting1 } from "@dmitrygrigorov/icons";
import EmptyState from "../EmptyState";
import doc from "./EmptyState.doc.mdx";

export default {
  title: "Components/Foundations/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof EmptyState>;

export const Demo = {
  args: {
    width: "400",
    header: "Header",
    text: "Test text",
    buttonText: "Test text button",
    icon: <IconDirectboxDefault />,
    isButton: true,
    buttonIcon: <IconSetting1 />
  }
};
