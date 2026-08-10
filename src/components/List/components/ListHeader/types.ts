import { CSSProperties, MouseEventHandler } from "react";
import {
  TListLeadIcon,
  TListTrailIcon,
  TListViewType,
  IListAvatar,
  TListSize
} from "../../types";

export interface IListHeaderProps {
  viewType?: TListViewType;
  isDisabled?: boolean;
  leadIcon?: TListLeadIcon;
  trailIcon?: TListTrailIcon;
  className?: string;
  style?: CSSProperties;
  isSelectedDefault?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  avatar?: IListAvatar;
  size?: TListSize;
}
