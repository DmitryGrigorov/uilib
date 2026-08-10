import { Meta, StoryObj } from "@storybook/react-vite";
import { IconFolderCross } from "@dmitrygrigorov/icons";
import React from "react";
import { Accordion } from "../";
import { List } from "../../List";
import doc from "./Accordion.doc.mdx";

export default {
  title: "Components/Organisms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Accordion>;

export const Example: StoryObj<typeof Accordion> = {
  render: (args) => <Accordion {...args} />,

  args: {
    title: "Heading",
    leadIcon: <IconFolderCross />,
    children: (
      <List>
        <List.ListItem>Item</List.ListItem>
        <List.ListItem>Item 2</List.ListItem>
        <List.ListItem>Item 3</List.ListItem>
        <List.ListItem>Item 4</List.ListItem>
        <List.ListItem>Item 5</List.ListItem>
        <List.ListItem>Item 6</List.ListItem>
        <List.ListItem>Item 7</List.ListItem>
      </List>
    )
  }
};
