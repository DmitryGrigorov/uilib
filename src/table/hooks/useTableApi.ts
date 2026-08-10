import { useMemo } from "react";
import {
  TTableApi,
  ITablePaginationApi,
  ITablePagination,
  ITableSelectionApi,
  IRowNode,
  ITablePinnedRowsApi,
  IRowApi
} from "../types";
import { useObservable, useTableService } from "../TableContext";

interface IUseTableApiParams<TData> {
  rowData: TData[];
  paginationAllRowCount?: number;
  onPaginationChange?: ITablePagination["onPaginationChange"];
  generalPages: number;
}

const useTableApi = <TData, TValue>({
  rowData,
  paginationAllRowCount,
  onPaginationChange,
  generalPages
}: IUseTableApiParams<TData>): TTableApi<TData> => {
  const tableService = useTableService<TData, TValue>();
  const showRows = useObservable(tableService.showRows);
  const currentPage = useObservable(tableService.currentPage);
  const rowsPerPage = useObservable(tableService.rowsPerPage);
  const rowsNodes = useObservable(tableService.rowsNodes);
  const pinnedRows = useObservable(tableService.pinnedRows);
  const columns = useObservable(tableService.columns);

  const paginationApi = useMemo<ITablePaginationApi>(
    () => ({
      paginationGetPageSize: () => showRows.size,
      paginationGetCurrentPage: () => currentPage,
      paginationGetTotalPages: () => paginationAllRowCount || 10,
      paginationGetRowCount: () => rowData.length,
      paginationGoToPage: (page: number) => {
        const _page = page > 10 ? 1 : page;
        tableService.changePage(_page);
        onPaginationChange?.({
          newPage: _page,
          rowPerPage: rowsPerPage
        });
      },
      paginationGoToNextPage: () => {
        const _page =
          currentPage !== generalPages ? currentPage + 1 : currentPage;
        tableService.changePage(_page);
        onPaginationChange?.({ newPage: _page, rowPerPage: rowsPerPage });
      },
      paginationGoToPreviousPage: () => {
        const _page = currentPage !== 1 ? currentPage - 1 : currentPage;
        tableService.changePage(_page);
        onPaginationChange?.({ newPage: _page, rowPerPage: rowsPerPage });
      },
      paginationGoToFirstPage: () => {
        tableService.changePage(1);
        onPaginationChange?.({ newPage: 1, rowPerPage: rowsPerPage });
      },
      paginationGoToLastPage: () => {
        tableService.changePage(generalPages);
        onPaginationChange?.({
          newPage: generalPages,
          rowPerPage: rowsPerPage
        });
      }
    }),
    []
  );

  const selectionApi = useMemo<ITableSelectionApi<TData>>(
    () => ({
      getSelectedNodes: () =>
        Array.from(rowsNodes.values()).filter((el) => el.isSelected),
      getSelectedRows: () =>
        Array.from(rowsNodes.values())
          .filter((el) => el.isSelected)
          .map((el) => el.data),
      selectAll: () => tableService.selectAllRows(true),
      deselectAll: () => tableService.selectAllRows(false),
      selectAllFiltered: () => tableService.selectAllRows(true, true),
      deselectAllFiltered: () => tableService.selectAllRows(false, true),
      setNodesSelected: (params: {
        nodes: IRowNode<TData>[];
        newValue: boolean;
      }) => {
        params.nodes.forEach((el) => el.setSelection(params.newValue));
      }
    }),
    []
  );

  const rowsPinnedApi = useMemo<ITablePinnedRowsApi<TData>>(
    () => ({
      setPinnedRowData: (data) => {
        tableService.setPinnedRowData(data);
      },
      getPinnedRow: (index) => [...pinnedRows.values()][index],
      getPinnedRowCount: () => pinnedRows.size
    }),
    []
  );

  const rowsApi = useMemo<IRowApi<TData>>(
    () => ({
      getRowNode: (id: string) => rowsNodes.get(id),

      setRowData: (data: TData[]) => tableService.setRowData(data, columns)
    }),
    [rowsNodes]
  );

  return {
    ...paginationApi,
    ...selectionApi,
    ...rowsPinnedApi,
    ...rowsApi
  };
};

export default useTableApi;
