import { Meta, StoryFn } from "@storybook/react-vite";
import { IconArrowRight1, IconFolderCloud } from "@dmitrygrigorov/icons";
import React from "react";
import RadioButton from "../../RadioButton";
import CheckBox from "../../CheckBox";
import { Tree } from "../index";
import doc from "./Tree.doc.mdx";

export default {
  title: "Components/Organisms/Tree",
  component: Tree,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Tree>;

const Template: StoryFn<typeof Tree> = (args) => <Tree {...args} />;

export const Example = {
  render: Template,

  args: {
    title: "Heading-1",
    isArrow: true,
    icon: <IconFolderCloud />,
    dataSource: [
      {
        id: 111,
        title: "Heading11",
        elements: [
          {
            id: 1,
            title: "Heading111",
            isActive: true
          },
          {
            id: 12,
            title: "Heading112",
            icon: <IconArrowRight1 />,
            isActive: true
          }
        ]
      },
      {
        title: "Heading12",
        id: 2,
        elements: [
          {
            id: 21,
            title: "Heading 2.1"
          },
          {
            id: 22,
            title: "Heading 2.2 with a checkbox",
            leadContent: <CheckBox />
          },
          {
            id: 23,
            title: "Heading 2.3 with a radio button",
            leadContent: <RadioButton />
          }
        ]
      },
      {
        id: 13,
        title: "Heading13",
        isDisabled: true,
        elements: [
          {
            id: 3,
            title: "Heading 3",
            elements: [
              {
                id: 131,
                title: "Heading3.1",
                isActive: true
              },
              {
                id: 132,
                title: "Heading3.2",
                isActive: true
              }
            ]
          }
        ]
      }
    ]
  }
};
