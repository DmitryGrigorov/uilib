import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { IconCloseCircle, IconSetting1 } from "@dmitrygrigorov/icons";
import Button from "../../Button";
import { TSnackBarParams } from "../types";
import { SnackBarInstance, openSnackBar } from "../components/SnackBarInstance";
import doc from "./SnackBar.doc.mdx";

type ISnackBarParamsStory = TSnackBarParams & {
  withActionButton: boolean;
};

export default {
  title: "Components/Neutrons/SnackBar",
  component: SnackBarInstance,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    duration: {
      control: {
        type: "number",
        min: 1000,
        step: 1000
      }
    },
    key: {
      control: {
        type: "text"
      }
    },
    withActionButton: {
      control: {
        type: "boolean"
      }
    },
    status: {
      options: [undefined, "info", "success", "error", "warning"],
      control: {
        type: "select"
      }
    }
  }
} as Meta<typeof SnackBarInstance>;

const Example: React.FC<ISnackBarParamsStory> = (props) => {
  const onOpenSnackBar = (): void => {
    const { status, ...propsWithoutStatus } = props;
    const { action = { text: "Action" }, ...propsWithoutAction } = props;

    if (props.withActionButton) {
      openSnackBar({
        action,
        ...propsWithoutStatus
      });
    } else {
      openSnackBar({ status, ...propsWithoutAction });
    }
  };

  return (
    <Button viewType="primary" onClick={onOpenSnackBar}>
      Click here
    </Button>
  );
};

const SnackBarInstanceExample: React.FC<ISnackBarParamsStory> = (props) => (
  <>
    <Example {...props} />
    <SnackBarInstance />
  </>
);

const Template: StoryFn<typeof SnackBarInstanceExample> = (args) => (
  <SnackBarInstanceExample {...args} />
);

export const SnackBar = {
  render: Template,

  args: {
    message: "This is a message",
    withActionButton: false,
    duration: 3000,
    status: undefined,
    leadIcon: <IconSetting1 />,
    closeIcon: <IconCloseCircle />,
    isClosable: false
  }
};
