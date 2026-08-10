import { Meta, StoryFn } from "@storybook/react-vite";
import styled from "styled-components";
import React from "react";
import { Button } from "../..";
import ModalWindow, { IModalWindowProps } from "../";
import { useStateProps } from "../../hooks/useStateProps";
import doc from "./ModalWindow.doc.mdx";

export default {
  title: "Components/Templates/ModalWindow",
  component: ModalWindow,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      ulr: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/2---Quark-Basic?node-id=17613%3A271450&mode=dev"
    }
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["overlay", "fullscreen"]
    },
    onChangeIsOpen: { action: "onChangeIsOpen" }
  }
} as Meta<typeof ModalWindow>;

const StyleContent = styled.div`
  padding: 10px;
  width: 500px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.neutral12};
  border: 1px solid ${({ theme }) => theme.colors.amber4};
`;

const Example: React.FC<IModalWindowProps> = (props) => {
  const [isOpen, setOpen] = useStateProps(props.isOpen);

  const handleClose = (): void => {
    setOpen(false);
  };
  const handleOpen = (): void => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <ModalWindow
        {...props}
        isOpen={isOpen}
        onClose={handleClose}
        footerContent={
          <>
            <Button>Open Modal</Button>
            <Button viewType="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </>
        }>
        {[...Array(15)]
          .map((_, i) => i + 1)
          .map((num, _) => (
            <StyleContent key={`style-text-${num}`}>some text</StyleContent>
          ))}
      </ModalWindow>
    </>
  );
};

const Template: StoryFn<typeof ModalWindow> = (args) => (
  <Example {...args}>{args.children} </Example>
);

export const Demo = {
  render: Template,

  args: {
    isOpen: false,
    title: "ModalWindow",
    subTitle: "SubTitleModalWindow",
    description: "Description",
    type: "overlay",
    isOutsideClickClose: false,
    isHiddenHeader: false,
    isHiddenCloseButton: false
  }
};
