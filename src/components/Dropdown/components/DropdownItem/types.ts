import { IDropdownMappersItem, TDropdownOnClick } from "../../types";

export type TDropdownItemProps<Item> = Omit<
  IDropdownMappersItem<Item>,
  "getItemKey" | "getItemGroupId"
> &
  Required<Pick<IDropdownMappersItem<Item>, "getItemLabel">> & {
    item: Item;
    onItemClick?: TDropdownOnClick<Item>;
  };
