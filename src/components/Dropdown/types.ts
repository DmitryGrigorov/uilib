import React, { ReactNode, MouseEvent, ReactElement } from "react";

export type TDropdownDirection =
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "top"
  | "left"
  | "right";

export type TDropdownOnClick<Item> = (event: MouseEvent, item: Item) => void;

export type TDropdownGetItemLabel<Item> = (item: Item) => ReactNode;

export type TDropdownGetItemKey<Item> = (
  item: Item
) => string | number | undefined;

export type TDropdownGetItemDisabled<Item> = (
  item: Item
) => boolean | undefined;

export type TDropdownGetItemLeadContent<Item> = (
  item: Item
) => JSX.Element | undefined;

export type TDropdownGetItemGroupId<Item> = (
  item: Item
) => string | number | undefined;

export type TDropdownGetItemOnClick<Item> = (
  item: Item
) => TDropdownOnClick<Item> | undefined;

export type TDropdownGetItemAttributes<Item> = (
  item: Item
) =>
  | Omit<Partial<JSX.IntrinsicElements["button"]>, "ref" | "color" | "rel">
  | undefined;

export type TDropdownSortGroup = (
  a: string | number,
  b: string | number
) => number;

export interface IDropdownMappersItem<Item> {
  getItemLabel?: TDropdownGetItemLabel<Item>;
  getItemKey?: TDropdownGetItemKey<Item>;
  getItemDisabled?: TDropdownGetItemDisabled<Item>;
  getItemLeadContent?: TDropdownGetItemLeadContent<Item>;
  getItemGroupId?: TDropdownGetItemGroupId<Item>;
  getItemOnClick?: TDropdownGetItemOnClick<Item>;
  getItemAttributes?: TDropdownGetItemAttributes<Item>;
}

export interface IDropdownItem {
  label: ReactNode;
  leadContent?: JSX.Element;
  isDisabled?: boolean;
  onClick?: TDropdownOnClick<IDropdownItem>;
  attributes?: JSX.IntrinsicElements["button"];
  groupId?: string | number;
  key?: string | number;
}

export interface IDropdownProps<
  Item = IDropdownItem
> extends IDropdownMappersItem<Item> {
  children: ReactElement;
  direction?: TDropdownDirection;
  items?: Item[];
  onItemClick?: TDropdownOnClick<Item>;
  onClickOutside?: () => void;
  className?: string;
  sortGroup?: TDropdownSortGroup;
  onClickClose?: () => void;
  width?: string;
  height?: string;
  isOpen?: boolean;
  content?: ReactElement;
  isNotCloseOutside?: boolean;
  isDisabled?: boolean;
}

export type TDropdownListProps<Item> = Omit<
  IDropdownProps<Item>,
  "children" | "height"
> & {
  top?: number;
  left?: number;
};

export type TDropdownPortalProps<Item> = Omit<
  TDropdownListProps<Item>,
  "children"
> & {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  height?: string;
  onClickOutsideClose: () => void;
  anchorRef: React.RefObject<HTMLDivElement | null>;
};
