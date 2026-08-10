import { CSSProperties, FC, RefObject } from "react";
import {
  TGetRowClassNameFunc,
  TRowModel,
  TTableSize,
  TDetailType,
  IDetailRowOptions,
  ITableCallbacksEditable,
  IRowDetailRendererParams,
  ITableEvents,
  IRowSelectedEvent,
  IRowNode,
  ISelectionChangedEvent
} from "../types";

export interface IRowsProps<TData, TValue>
  extends ITableCallbacksEditable<TData, TValue>, ITableEvents<TData> {
  isPagination?: boolean;
  rowModel?: TRowModel;
  rowClassName?: string;
  rowStyle?: CSSProperties;
  size: TTableSize;
  getRowClassName?: TGetRowClassNameFunc<TData>;
  isDividerRow?: boolean;
  noDataComponent?: JSX.Element;
  isDetailRow?: boolean;
  viewTypeDetail?: TDetailType;
  isCheckboxSelection?: boolean;
  detailRowOptions?: IDetailRowOptions<TData, TValue>;
  detailRowRenderer?: FC<IRowDetailRendererParams<TData, TValue>>;
  onRowSelected?: (event: IRowSelectedEvent<TData>) => void;
  onSelectionChanged?: (event: ISelectionChangedEvent<TData>) => void;
  isRowSelectable?: (node: IRowNode<TData>) => boolean;
  isPinningRows?: boolean;
  refTable?: RefObject<HTMLTableElement | null>;
}
