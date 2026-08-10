import {
  ITableSortMenuItem,
  TLocalColumn,
  TOnChangeSortTable
} from "../../types";

export interface ISortDropdownProps<TData, TValue> {
  items: ITableSortMenuItem[];
  column: TLocalColumn<TData, TValue>;
  onChangeSort?: TOnChangeSortTable;
}
