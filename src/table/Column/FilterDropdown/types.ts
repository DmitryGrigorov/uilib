import { JSX } from "react";
import {
  ITableFilterMenuItem,
  TLocalColumn,
  TFilterChangedFunc
} from "../../types";

export interface IFilterDropdownProps<TData, TValue> {
  items: ITableFilterMenuItem[] | JSX.Element;
  column: TLocalColumn<TData, TValue>;
  onFilterChanged?: TFilterChangedFunc<TData, TValue>;
}
