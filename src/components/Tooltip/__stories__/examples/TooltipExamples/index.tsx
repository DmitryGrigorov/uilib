import React from "react";
import Button from "../../../../Button";
import Tooltip from "../../../";

export const TooltipExampleBottomRight: React.FC = () => (
  <Tooltip direction="bottomRight" text="With a button" isTrail trailText="P">
    <Button viewType="primary">Bottom right</Button>
  </Tooltip>
);

export const TooltipExampleBottomLeft: React.FC = () => (
  <Tooltip direction="bottomLeft" text="Tooltip message">
    <Button viewType="primary">Bottom left</Button>
  </Tooltip>
);

export const TooltipExampleTop: React.FC = () => (
  <Tooltip direction="top" text="Shadowed" isShadow>
    <Button viewType="primary">Top center</Button>
  </Tooltip>
);

export const TooltipExampleTopRight: React.FC = () => (
  <Tooltip direction="topRight" text="With a button" isTrail trailText="P">
    <Button viewType="primary">Top right</Button>
  </Tooltip>
);

export const TooltipExampleTopLeft: React.FC = () => (
  <Tooltip direction="topLeft" text="Tooltip message">
    <Button viewType="primary">Top left</Button>
  </Tooltip>
);
export const TooltipExampleBottom: React.FC = () => (
  <Tooltip direction="bottom" text="Shadowed" isShadow>
    <Button viewType="primary">Bottom center</Button>
  </Tooltip>
);

export const TooltipExampleRight: React.FC = () => (
  <Tooltip direction="right" text="Full add" isShadow isTrail trailText="P">
    <Button viewType="primary">Side right</Button>
  </Tooltip>
);

export const TooltipExampleLeft: React.FC = () => (
  <Tooltip direction="left" text="Full add" isShadow isTrail trailText="P">
    <Button viewType="primary">Side left</Button>
  </Tooltip>
);

export const TooltipNoTrailUsage: React.FC = () => (
  <Tooltip direction="top" text="With a button">
    <Button viewType="primary">Hover over me</Button>
  </Tooltip>
);

export const TooltipIsTrailUsage: React.FC = () => (
  <Tooltip direction="top" text="With a button" isTrail trailText="P">
    <Button viewType="primary">Hover over me</Button>
  </Tooltip>
);

export const TooltipIsShadowUsage: React.FC = () => (
  <Tooltip direction="top" text="Tooltip message" isShadow>
    <Button viewType="primary">Hover over me</Button>
  </Tooltip>
);
