import { ITableHeader, ITableProps, ITableSearch } from "../types";

export type TTableHeaderProps<TData, TValue> = Pick<
  ITableProps<TData>,
  "size" | "title" | "description" | "isResize" | "isMobile"
> &
  ITableSearch<TData, TValue> &
  ITableHeader & {
    onResizeChange: () => void;
    isFullScreen: boolean;
  };
