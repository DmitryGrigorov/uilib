import React, { CSSProperties } from "react";
import { TSize } from "../Tab/types";

export interface ITabsProps {
  value?: number | string;
  onChange?: (event: React.MouseEvent, newValue: number | string) => void;
  items?: ITabsItem[] | string[];
  children?: JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
  size?: TSize;
  testId?: string;
}

export interface ITabsItem {
  label: string;
  icon?: JSX.Element;
  value?: string | number;
}
