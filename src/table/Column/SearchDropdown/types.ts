import { ITableSearch, TLocalColumn } from "../../types";

export interface ISearchDropdownProps<TData, TValue> {
  column: TLocalColumn<TData, TValue>;
  onSearch?: ITableSearch<TData, TValue>["onSearch"];
}
