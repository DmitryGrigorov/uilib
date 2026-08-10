import { Meta } from "@storybook/react-vite";
import styled from "styled-components";
import TooltipContent from "../components/TooltipContent";
import Button from "../../Button";
import Tooltip from "../index";
import doc from "./Tooltip.doc.mdx";

const anchorSizeAndPosition = {
  bottom: 342.5,
  height: 56,
  left: 766.796875,
  right: 923.203125,
  top: 286.5,
  width: 156.40625,
  x: 766.796875,
  y: 286.5
};

const TooltipContentStyled = styled(TooltipContent)`
  top: auto;
  left: auto;
  opacity: 1;
`;

const TEXT_TOOLTIP = "Tooltip message";

export default {
  title: "Components/Neutrons/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof Tooltip>;

export const Example = {
  args: {
    children: <Button viewType="primary">Hover over me</Button>,
    text: TEXT_TOOLTIP,
    isTrail: true,
    trailText: "P",
    isShadow: true,
    defaultIsVisible: true
  }
};

export const TooltipContenEt = {
  render: () => (
    <TooltipContentStyled
      text="P2-l"
      isShadow
      trailText="P"
      isTrail
      anchorSizeAndPosition={anchorSizeAndPosition}
    />
  )
};
