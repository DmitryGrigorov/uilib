import { MouseEventHandler } from "react";

export type TSizeDingDing = "s" | "m" | "l";
export type TColorNotificationCountDingDing = "blue" | "red";

export interface IDingDingProps {
  size: TSizeDingDing;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  isSelected?: boolean;
  notificationCount?: number;
  colorNotificationCount?: TColorNotificationCountDingDing;
}
