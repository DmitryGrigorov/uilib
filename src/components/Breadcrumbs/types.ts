import React from "react";
import { IDropdownItem } from "../Dropdown";

export type TBreadcrumbsViewType = "current";
export type TBreadcrumbsIconType = "lead" | "trail";
export interface IBreadcrumbItem {
  icon?: JSX.Element;
  text?: string;
  viewType?: TBreadcrumbsViewType;
  iconType?: TBreadcrumbsIconType;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>,
    item: IBreadcrumbItem
  ) => void;
  to?: string;
  isDisabled?: boolean;
  subitems?: IDropdownItem[];
}

export interface IBreadcrumbItemWrapper extends Pick<
  IBreadcrumbsProps,
  "items"
> {
  item: IBreadcrumbItem;
  children?: React.ReactNode;
  _maxNoCollapsedItems: number;
  index: number;
}

export interface IBreadcrumbsProps {
  items: IBreadcrumbItem[];
  maxNoCollapsedItems?: number;
  className?: string;
  testId?: string;
}
