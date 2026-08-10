import React from "react";
import { IconList } from "@dmitrygrigorov/icons";
import Button from "../../../../Button";
import Popover from "../../..";

export const PopoverExampleBottomRight: React.FC = () => (
  <Popover
    direction="bottomRight"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">BottomRight</Button>
  </Popover>
);

export const PopoverExampleBottomLeft: React.FC = () => (
  <Popover
    direction="bottomLeft"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">BottomLeft</Button>
  </Popover>
);

export const PopoverExampleTop: React.FC = () => (
  <Popover
    direction="top"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Top</Button>
  </Popover>
);

export const PopoverExampleTopRight: React.FC = () => (
  <Popover
    direction="topRight"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">TopRight</Button>
  </Popover>
);

export const PopoverExampleTopLeft: React.FC = () => (
  <Popover
    direction="topLeft"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">TopLeft</Button>
  </Popover>
);
export const PopoverExampleBottom: React.FC = () => (
  <Popover
    direction="bottom"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Bottom</Button>
  </Popover>
);

export const PopoverExampleRight: React.FC = () => (
  <Popover
    direction="right"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Right</Button>
  </Popover>
);

export const PopoverExampleLeft: React.FC = () => (
  <Popover
    direction="left"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Left</Button>
  </Popover>
);

export const PopoverExampleContent: React.FC = () => (
  <Popover
    direction="top"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent={<IconList />}>
    <Button viewType="primary">Click me</Button>
  </Popover>
);

export const PopoverExampleIsSecondaryButton: React.FC = () => (
  <Popover
    direction="bottomRight"
    title="Heading"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2"
    isSecondaryButton={false}>
    <Button viewType="primary">Click me</Button>
  </Popover>
);

export const PopoverExampleNoTitle: React.FC = () => (
  <Popover
    direction="bottomRight"
    description="Description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Click me</Button>
  </Popover>
);

export const PopoverExampleDescription: React.FC = () => (
  <Popover
    direction="bottomRight"
    description="Your custom description"
    primaryButtonContent="Action 1"
    secondaryButtonContent="Action 2">
    <Button viewType="primary">Click me</Button>
  </Popover>
);
