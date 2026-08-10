import { Meta, StoryFn } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import styled from "styled-components";
import Breadcrumbs from "../";
import doc from "./Breadcrumbs.doc.mdx";

export default {
  title: "Components/Neutrons/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=1611%3A15690"
    }
  }
} as Meta<typeof Breadcrumbs>;

const BreadcrumbsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: StoryFn<typeof Breadcrumbs> = (args) => (
  <BreadcrumbsWrapper>
    <Breadcrumbs {...args} />
  </BreadcrumbsWrapper>
);

export const Demo = {
  render: Template,
  args: {
    items: [
      {
        icon: <IconSetting1 />,
        text: "P2-l-1",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      },
      {
        icon: <IconSetting1 />,
        text: "P2-l-2",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ],
        isDisabled: true
      },
      {
        icon: <IconSetting1 />,
        text: "P2-l-3"
      },
      {
        icon: <IconSetting1 />,
        text: "P2-l-4",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ],
        viewType: "current"
      },
      {
        icon: <IconSetting1 />,
        text: "P2-l-5",
        iconType: "trail"
      },
      {
        icon: <IconSetting1 />,
        text: "P2-l-6"
      }
    ],
    maxNoCollapsedItems: 3
  }
};
