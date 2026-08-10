import { CSSProperties, MouseEvent, MouseEventHandler } from "react";
import { TListTrailIcon, TListLeadIcon, TListSize } from "../../types";

export interface IListItemProps {
  trailIcon?: TListTrailIcon;
  className?: string;
  style?: CSSProperties;
  isSelected?: boolean;
  onClick?: (event: MouseEvent<HTMLLIElement>, value?: string | number) => void;
  isDisabled?: boolean;
  leadIcon?: TListLeadIcon;
  onDoubleClick?: MouseEventHandler<HTMLLIElement>;
  leadContent?: JSX.Element;
  trailContent?: JSX.Element;
  size?: TListSize;
}
