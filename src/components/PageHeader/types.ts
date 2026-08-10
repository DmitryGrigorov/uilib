import { EventHandler, MouseEvent, CSSProperties, ReactElement } from "react";

export interface IPageHeaderProps {
  text?: string;
  /**
   * @deprecated Use `trailContent` instead.
   */
  trailIcon?: JSX.Element;
  isLeadIcon?: boolean;
  leadIcon?: JSX.Element;
  onClickTrail?: EventHandler<MouseEvent<HTMLButtonElement>>;
  onClickLead?: EventHandler<MouseEvent>;
  className?: string;
  width?: string;
  style?: CSSProperties;
  testId?: string;
  trailContent?: ReactElement;
}
