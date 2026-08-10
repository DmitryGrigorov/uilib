import React from "react";
import { TTableSize, ITablePagination, ITableSearch } from "../types";

export interface IFooterProps<TData, TValue>
  extends ITablePagination, ITableSearch<TData, TValue> {
  size: TTableSize;
  generalPages: number;
  text?: string;
  content?: React.ReactElement;
  className?: string;
  isMobile?: boolean;
  isFillPagination?: boolean;
}
