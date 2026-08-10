import { MouseEventHandler } from "react";

export const AVATAR_STATUS = ["online", "offline", "busy", "disabled"] as const;
export type TAvatarStatus = (typeof AVATAR_STATUS)[number];

export type TAvatarSize = "xl" | "l" | "m" | "s" | "xs";

export interface IAvatarProps {
  className?: string;
  icon?: JSX.Element;
  hoverIcon?: JSX.Element;
  disabledIcon?: JSX.Element;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  image?: string;
  text?: string;
  status?: TAvatarStatus;
  size?: TAvatarSize;
  as?: keyof JSX.IntrinsicElements;
  testId?: string;
}
