import { IDropdownItem, TDropdownOnClick } from "@dmitrygrigorov/components";

export type TContextMenuItem = string | IDropdownItem;

export interface IColumnContextMenuProps {
  menuItems: TContextMenuItem[];
  onItemClick?: TDropdownOnClick<TContextMenuItem>;
}
