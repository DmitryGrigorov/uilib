import { CSSProperties, FC, MouseEvent } from "react";
import {
  IDetailRowOptions,
  IRowDetailRendererParams,
  IRowNode,
  TDetailType
} from "../types";

export interface IRowNestedProps<TData, TValue> {
  viewTypeDetail?: TDetailType;
  isHiddenDetailRow?: boolean;
  isDetailRow?: boolean;
  detailRowRenderer?: FC<IRowDetailRendererParams<TData, TValue>>;
  detailRowOptions?: IDetailRowOptions<TData, TValue>;
  node: IRowNode<TData>;
  data: TData;
  isDividerRow?: boolean;
  rowStyle?: CSSProperties;
  onClick?: (event: MouseEvent) => void;
  onDoubleClick?: (event: MouseEvent) => void;
}
