import {
  IColumnDefault,
  TTableSize,
  TGetColumnMenuItems,
  TFilterChangedFunc,
  ITableSearch,
  TOnChangeSortTable,
  TDetailType
} from "../types";

export interface IColumnsRowProps<TData, TValue> {
  defaultColumn?: IColumnDefault<TData, TValue>;
  size: TTableSize;
  getContextMenu?: TGetColumnMenuItems<TData, TValue>;
  isHiddenColumnHeader?: boolean;
  onFilterChanged?: TFilterChangedFunc<TData, TValue>;
  onSearch?: ITableSearch<TData, TValue>["onSearch"];
  onChangeSort?: TOnChangeSortTable;
  isHeaderCheckboxSelection?: boolean;
  isCheckboxSelection?: boolean;
  isPinningRows?: boolean;
  viewTypeDetail?: TDetailType;
}
