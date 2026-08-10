import { CSSProperties, MouseEventHandler } from "react";
import { IAvatarProps } from "../Avatar/types";

export type TListViewType = "basic" | "arrow" | "collapse";
export type TListLeadIcon = JSX.Element;
export type TListTrailIcon = JSX.Element;
export type TListSize = "l" | "m" | "s";

export interface IListItemDataSource extends IListItemBasicDataSource {
  isSelected?: boolean;
}

export interface IListItemBasicDataSource {
  label: string;
  isDisabled?: boolean;
  trailIcon?: TListLeadIcon;
  leadIcon?: TListTrailIcon;
}

export interface IListBasicProps<S = IListItemDataSource> {
  viewType?: TListViewType;
  header?: {
    content: string | JSX.Element;
    leadIcon?: TListLeadIcon;
    trailIcon?: TListTrailIcon;
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
    avatar?: IListAvatar;
  };
  classNameItem?: string;
  styleItem?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  isSelected?: boolean;
  isDisabled?: boolean;
  width?: number | string;
  height?: number | string;
  dataSource?: S[];
  size?: TListSize;
  testId?: string;
}

export type IListAvatar = Pick<
  IAvatarProps,
  "status" | "icon" | "image" | "text"
>;
