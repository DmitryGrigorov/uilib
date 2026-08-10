import { CSSProperties } from "react";
import { TRollTextOverflow, TStatusLabelRoll } from "../../types";

export interface ISubHeaderRollProps {
  title: string | number;
  textLabel?: string;
  statusLabel?: TStatusLabelRoll;
  isIconLabel?: boolean;
  textOverflow: TRollTextOverflow;
  className?: string;
  style?: CSSProperties;
}
