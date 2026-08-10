import { Meta } from "@storybook/react-vite";
import React from "react";
import Button from "../../Button";
import Popover from "../Popover";
import doc from "./Popover.doc.mdx";

const TITLE_POPOVER = "Popover title";
const DESCRIPTION_POPOVER = "Popover description";
const PRIMARY_BUTTON = "Action 1";
const SECONDARY_BUTTON = "Action 2";

export default {
  title: "Components/Molecules/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Popover>;

export const Example = {
  args: {
    children: <Button viewType="primary">Click me</Button>,
    title: TITLE_POPOVER,
    description: DESCRIPTION_POPOVER,
    primaryButtonContent: PRIMARY_BUTTON,
    secondaryButtonContent: SECONDARY_BUTTON,
    isShadow: true
  }
};
