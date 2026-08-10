import { CSSProperties, ReactNode } from "react";
import { TRollSize, TRollTextOverflow } from "../../types";

export interface IHeaderRollProps {
  title: string | number;
  subTitle?: string | number;
  trailContent?: ReactNode;
  style?: CSSProperties;
  className?: string;
  size?: TRollSize;
  textOverflow: TRollTextOverflow;
}
