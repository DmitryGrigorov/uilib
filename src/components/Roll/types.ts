import { CSSProperties, ReactElement } from "react";
import { TLabelStatus } from "../Label";

export type TRollSize = "l" | "m";
export type TRollTextOverflow = "clip" | "ellipsis";
export type TStatusLabelRoll = TLabelStatus;

export interface IRollProps {
  style?: CSSProperties;
  titleHeader: string | number;
  subTitleHeader?: string | number;
  titleSubHeader?: string | number;
  size?: TRollSize;
  textOverflow?: TRollTextOverflow;
  statusSubHeader?: TStatusLabelRoll;
  labelSubHeader?: string;
  isOpenRoll?: boolean;
  className?: string;
  mainContent: ReactElement;
  rollContent: ReactElement;
  classNameContent?: string;
  footer?: ReactElement;
  trailContentHeader?: ReactElement;
  isIconStatusSubHeader?: boolean;
}
