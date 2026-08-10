import { Meta, StoryFn } from "@storybook/react-vite";
import React from "react";
import styled from "styled-components";
import Skeleton, { TSkeletonProps } from "../";
import { SKELETON_TYPE } from "../types";
import doc from "./Skeleton.doc.mdx";

export default {
  title: "Components/Foundations/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/2---Quark-Basic?node-id=15685%3A149502&mode=dev"
    }
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: SKELETON_TYPE
    }
  }
} as Meta<typeof Skeleton>;

const Wrapper = styled.div`
  max-width: 100%;
  min-width: 100px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Example: React.FC<TSkeletonProps> = (props) => (
  <Wrapper>
    <Skeleton {...props} />
  </Wrapper>
);

const Template: StoryFn<typeof Skeleton> = (args) => <Example {...args} />;

export const Demo = {
  render: Template,
  args: {
    width: "600",
    height: "150",
    diameter: 30,
    type: "rectangle"
  }
};
