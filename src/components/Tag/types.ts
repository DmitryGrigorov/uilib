import React from "react";
import { TAvatarStatus } from "../Avatar";

export type TTagSize = "s" | "m" | "xs";

export interface ITagProps {
  children: string | React.ReactNode;
  avatarProps?: ITagAvatar;
  isStroke?: boolean;
  isShowDefaultLeadIcons?: boolean;
  leadIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isPressed?: boolean;
  isClosable?: boolean;
  isDisabled?: boolean;
  size?: TTagSize;
  className?: string;
  onClickClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: keyof JSX.IntrinsicElements;
  isReadOnly?: boolean;
  testId?: string;
}

export interface ITagAvatar {
  status?: TAvatarStatus;
  image?: string;
  text?: string;
  icon?: JSX.Element;
}
