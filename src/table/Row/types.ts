import { CSSProperties, FC, RefObject } from "react";
import type {
  TTableSize,
  TGetRowClassNameFunc,
  IDetailRowOptions,
  TDetailType,
  ITableCallbacksEditable,
  TRowDataExternal,
  ITableEvents,
  IRowSelectedEvent,
  IRowNode,
  ISelectionChangedEvent
} from "../types";
import { IRowDetailRendererParams } from "../types";

export interface IRowProps<TData, TValue>
  extends ITableCallbacksEditable<TData, TValue>, ITableEvents<TData> {
  data: TRowDataExternal<TData, TValue>;
  size: TTableSize;
  rowClassName?: string;
  rowStyle?: CSSProperties;
  id: string;
  rowIndex: number;
  isSelected?: boolean;
  getRowClassName?: TGetRowClassNameFunc<TData>;
  isCheckboxSelection?: boolean;
  isDividerRow?: boolean;
  isDetailRow?: boolean;
  viewTypeDetail?: TDetailType;
  detailRowOptions?: IDetailRowOptions<TData, TValue>;
  detailRowRenderer?: FC<IRowDetailRendererParams<TData, TValue>>;
  classNameDetailRowTable?: string;
  onRowSelected?: (event: IRowSelectedEvent<TData>) => void;
  isRowSelectable?: (node: IRowNode<TData>) => boolean;
  onSelectionChanged?: (event: ISelectionChangedEvent<TData>) => void;
  rowNode: IRowNode<TData>;
  isPinned?: boolean;
  isPinningRows?: boolean;
  refTable?: RefObject<HTMLTableElement | null>;
}
