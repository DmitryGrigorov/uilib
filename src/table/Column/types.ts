import { IDropdownItem } from "@dmitrygrigorov/components";
import {
  TTableSize,
  IColumnDefault,
  TLocalColumn,
  TFilterChangedFunc,
  ITableSearch,
  TOnChangeSortTable
} from "../types";

export interface ITableColumnProps<TData, TValue> {
  column: TLocalColumn<TData, TValue>;
  columnTypes: TLocalColumn["columnTypes"];
  size: TTableSize;
  defaultColumn?: IColumnDefault<TData, TValue>;
  contextMenuItems?: (string | IDropdownItem)[] | JSX.Element;
  onFilterChanged?: TFilterChangedFunc<TData, TValue>;
  onSearch?: ITableSearch<TData, TValue>["onSearch"];
  isPinned?: boolean;
  onChangeSort?: TOnChangeSortTable;
}
