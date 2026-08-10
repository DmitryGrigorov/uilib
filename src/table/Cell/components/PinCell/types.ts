import { TTableSize, IRowNode } from "../../../types";

export interface IPinCellProps<TData> {
  size?: TTableSize;
  isHover?: boolean;
  isPressed?: boolean;
  node: IRowNode<TData>;
}
