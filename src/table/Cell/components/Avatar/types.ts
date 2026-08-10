import { IRowNode, IColumnAvatar } from "../../../types";

export interface TCellParamsAvatar<TData, TValue> {
  value: TValue;
  node: IRowNode<TData>;
  column: IColumnAvatar<TData, TValue>;
  data: TData;
}
