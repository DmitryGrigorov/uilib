import { TLocalColumn, TRowDataExternal, TRowModel } from "../types";

interface IGetFirstPageRowsHelperParams<TData, TValue> {
  isPagination?: boolean;
  rowModel: TRowModel;
  rows: Map<string, TRowDataExternal<TData, TValue>>;
  rowsPerPage: number;
  currentPage: number;
}

interface ISearchColumnParams<TData, TValue> {
  rows: Map<string, TRowDataExternal<TData, TValue>>;
  searchColumn: TLocalColumn<TData, TValue>;
  search: string;
}

interface IGetGlobalSearchParams<TData, TValue> {
  rows: Map<string, TRowDataExternal<TData, TValue>>;
  search: string;
}

export const getFirstPageRowsHelper = <TData, TValue>({
  isPagination,
  rowModel,
  rows,
  rowsPerPage,
  currentPage
}: IGetFirstPageRowsHelperParams<TData, TValue>): Map<
  string,
  TRowDataExternal<TData, TValue>
> => {
  const showRowsObj = new Map<string, TRowDataExternal<TData, TValue>>();
  let rowDataEntries = [...rows.entries()];
  if (isPagination && rowModel !== "server") {
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    rowDataEntries = rowDataEntries.slice(firstIndex, lastIndex);
  }
  for (const [key, value] of rowDataEntries) {
    showRowsObj.set(key, value);
  }
  return showRowsObj;
};

export const getSearchColumn = <TData, TValue>({
  rows,
  searchColumn,
  search
}: ISearchColumnParams<TData, TValue>): Map<
  string,
  TRowDataExternal<TData, TValue>
> => {
  const filteredRows = new Map<string, TRowDataExternal<TData, TValue>>();
  [...rows.entries()]
    .filter(([_, { computedData }]) =>
      String(computedData[searchColumn.field])
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .forEach(([key]) => {
      filteredRows.set(key, rows.get(key) as TRowDataExternal<TData, TValue>);
    });
  return filteredRows;
};

export const getGlobalSearch = <TData, TValue>({
  rows,
  search
}: IGetGlobalSearchParams<TData, TValue>): Map<
  string,
  TRowDataExternal<TData, TValue>
> => {
  const filteredRows = new Map<string, TRowDataExternal<TData, TValue>>();
  [...rows.entries()]
    .filter(([_, { computedData }]) =>
      Object.values(computedData).some((value) => {
        switch (typeof value) {
          case "boolean":
          case "number":
            return String(value).toLowerCase().includes(search.toLowerCase());
          case "string":
            return value.toLowerCase().includes(search.toLowerCase());
          default:
            return JSON.stringify(value)
              .toLowerCase()
              .includes(search.toLowerCase());
        }
      })
    )
    .forEach(([key]) => {
      filteredRows.set(key, rows.get(key) as TRowDataExternal<TData, TValue>);
    });
  return filteredRows;
};
