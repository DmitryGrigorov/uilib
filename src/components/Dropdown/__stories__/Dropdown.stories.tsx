import { Meta } from "@storybook/react-vite";
import React from "react";
import { Dropdown } from "../";
import { IDropdownItem } from "../types";
import doc from "./Dropdown.doc.mdx";

export default {
  title: "Components/Templates/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Dropdown>;

const items: IDropdownItem[] = [
  { label: "1", groupId: 1 },
  { label: "2", groupId: 2 },
  { label: "12", groupId: 1 },
  { label: "123", groupId: 1 },
  { label: "124", groupId: 1 },
  { label: "125", groupId: 1 }
];

export const Demo = {
  args: {
    items,
    children: <p>Click</p>
  }
};
