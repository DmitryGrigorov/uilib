import { RefObject } from "react";
import {
  TTableSize,
  IRowNode,
  TColumnType,
  TColumn,
  ITableCallbacksEditable,
  TRowDataExternal
} from "../types";

export interface ICellProps<TData, TValue> extends ITableCallbacksEditable<
  TData,
  TValue
> {
  size: TTableSize;
  column: TColumn<TData, TValue>;
  data: TRowDataExternal<TData, TValue>;
  node: IRowNode<TData>;
  rowIndex: number;
  isDivider?: boolean;
  refTable?: RefObject<HTMLTableElement | null>;
}

export interface ICellStyledProps {
  size?: TTableSize;
  cellType?: TColumnType; // Cell type
  isEdit?: boolean;
}
