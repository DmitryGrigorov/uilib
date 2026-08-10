import { useMemo } from "react";
import {
  IColumnApi,
  IColumnDefault,
  TColumn,
  TColumnPinnedDirection,
  TLocalColumn
} from "../types";
import { useObservable, useTableService } from "../TableContext";
import { checkUniqIdColumns } from "../utils";

const useColumnApi = <TData = any, TValue = string>(): IColumnApi<
  TData,
  TValue
> => {
  const tableService = useTableService<TData, TValue>();
  const localColumns = useObservable(tableService.localColumns);

  const getPinning = (
    key: string | TColumn<TData, TValue>,
    pinnedDirection?: TColumnPinnedDirection
  ): boolean => {
    if (typeof key === "string") {
      return (
        localColumns.find((column) =>
          pinnedDirection
            ? column.id === key && column.pinnedDirection === pinnedDirection
            : column.id === key
        )?.isPinned || false
      );
    }
    return (
      localColumns.find((column) => {
        if (key.id) {
          return pinnedDirection
            ? column.id === key.id && column.pinnedDirection === pinnedDirection
            : column.id === key.id;
        }
        return pinnedDirection
          ? column.field === key.field &&
              column.title === key.title &&
              column.pinnedDirection === pinnedDirection
          : column.field === key.field && column.title === key.title;
      })?.isPinned || false
    );
  };

  const setColumnPinned = (
    key: string | TColumn<TData, TValue>,
    pinnedDirection: TColumnPinnedDirection
  ): void => {
    let column: TLocalColumn<TData, TValue> | null;
    if (typeof key === "string") {
      column = localColumns.find((col) => col.id === key) || null;
    } else {
      column =
        localColumns.find((col) =>
          key.id
            ? col.id === key.id
            : col.field === key.field && col.title === key.title
        ) || null;
    }
    if (pinnedDirection) {
      column && tableService.pinningColumn({ ...column, pinnedDirection });
    } else {
      column && tableService.unpinningColumn({ ...column });
    }
  };

  const setColumns = (columns: TColumn<TData, TValue>[]): void => {
    const verifiedColumns = checkUniqIdColumns<TData, TValue>(columns);

    tableService.setColumns(verifiedColumns);
  };

  const setDefaultColumns = (
    defaultColumn: IColumnDefault<TData, TValue>
  ): void => {
    tableService.setDefaultColumn(defaultColumn);
  };

  const columnApi = useMemo<IColumnApi<TData, TValue>>(
    () => ({
      isPinning: (key: string | TColumn<TData, TValue>) => getPinning(key),
      isPinningLeft: (key: string | TColumn<TData, TValue>) =>
        getPinning(key, "left"),
      isPinningRight: (key: string | TColumn<TData, TValue>) =>
        getPinning(key, "right"),
      setColumnPinned,
      setColumnsPinned: (
        keys: string[] | TColumn<TData, TValue>[],
        pinnedDirection
      ) => {
        keys.forEach((key) => {
          setColumnPinned(key, pinnedDirection);
        });
      },
      getColumns: () => localColumns as TColumn<TData, string>[],
      setColumns: (columns: TColumn<TData, TValue>[]) => setColumns(columns),
      setDefaultColumns: (defautlColumns: IColumnDefault<TData, TValue>) =>
        setDefaultColumns(defautlColumns)
    }),
    [localColumns]
  );

  return {
    ...columnApi
  };
};

export default useColumnApi;
