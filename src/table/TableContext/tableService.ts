import { getValueObject, TKeyObjectType } from "@dmitrygrigorov/components";
import { checkUniqIdColumns, getRowUniqId } from "../utils";
import {
  IColumnDefault,
  IRowNode,
  ITableStateFilterParams,
  ITableStateSortParams,
  TColumn,
  TGetRowId,
  TLocalColumn,
  TRowDataExternal,
  TRowModel
} from "../types";
import { ITableStateCallbacks } from "./types";
import { Observable } from "./observable";
import {
  getFirstPageRowsHelper,
  getGlobalSearch,
  getSearchColumn
} from "./helpers";

export class TableService<TData = any, TValue = any> {
  readonly isPagination = new Observable(false);
  readonly rowsPerPage = new Observable(10);
  readonly currentPage = new Observable<number>(1);
  readonly filteredRows = new Observable<
    Map<string, TRowDataExternal<TData, TValue>>
  >(new Map());
  readonly sortParams = new Observable<ITableStateSortParams<TData> | null>(
    null
  );
  readonly rightPinnedColumnsLength = new Observable(0);
  readonly leftPinnedColumnsLength = new Observable(0);
  readonly rowModel = new Observable<TRowModel>("client");
  readonly rowData = new Observable<
    Map<string, TRowDataExternal<TData, TValue>>
  >(new Map());
  readonly rowsNodes = new Observable<Map<string, IRowNode<TData>>>(new Map());
  readonly rowsSelection = new Observable("");
  readonly showRows = new Observable<
    Map<string, TRowDataExternal<TData, TValue>>
  >(new Map());
  readonly filterParams = new Observable<ITableStateFilterParams<
    TData,
    TValue
  > | null>(null);
  readonly searchColumns = new Observable<Map<string, string>>(new Map());
  readonly globalSearch = new Observable<string>("");
  readonly pinnedRows = new Observable<Map<string, IRowNode<TData>>>(new Map());
  readonly columns = new Observable<TLocalColumn<TData, TValue>[]>([]);
  readonly localColumns = new Observable<TLocalColumn<TData, TValue>[]>([]);
  readonly callbacks = new Observable<ITableStateCallbacks<
    TData,
    TValue
  > | null>(null);
  readonly defaultColumn = new Observable<IColumnDefault<TData, TValue> | null>(
    null
  );

  setRowData(
    rowData: TData[],
    columns: TColumn<TData, TValue>[],
    getRowId?: TGetRowId<TData>
  ): void {
    const rowDataMap: Map<string, TRowDataExternal<TData, TValue>> = new Map();
    rowData.forEach((data, index) => {
      rowDataMap.set(getRowUniqId({ data, index, getRowId }), {
        ...data,
        computedData: columns.reduce(
          (computedData, column) => ({
            ...computedData,
            [column.field]: column.valueGetter
              ? column.valueGetter({ data, column })
              : getValueObject(data, column.field, "")
          }),
          {} as Record<TKeyObjectType<TData>, TValue>
        )
      });
    });
    this.rowData.set(rowDataMap);
    this.showRows.set(
      getFirstPageRowsHelper({
        isPagination: this.isPagination.get(),
        currentPage: this.currentPage.get(),
        rowModel: this.rowModel.get(),
        rowsPerPage: this.rowsPerPage.get(),
        rows: rowDataMap
      })
    );
    this.filteredRows.set(rowDataMap);
  }

  setRowNodes(): void {
    const previousRowNodes = this.rowsNodes.get();
    const rowsNodes = new Map<string, IRowNode<TData>>();
    this.rowData.get().forEach((value, key) => {
      rowsNodes.set(key, {
        rowIndex: 0,
        setSelection: () => {
          /* */
        },
        isSelected: false,
        isRowPinned: false,
        isDetail: false,
        setRowPinned: () => {
          /* */
        },
        height: 0,
        ...previousRowNodes.get(key),
        id: key,
        data: value
      });
    });
    this.rowsSelection.set("none");
    this.rowsNodes.set(rowsNodes);
  }

  changePage(page: number): void {
    this.currentPage.set(page);
    this.showRows.set(
      getFirstPageRowsHelper({
        isPagination: this.isPagination.get(),
        currentPage: page,
        rowModel: this.rowModel.get(),
        rows: this.filteredRows.get(),
        rowsPerPage: this.rowsPerPage.get()
      })
    );

    let rowsSelectionState = this.rowsSelection.get();
    const showRowsKeys = Array.from(this.showRows.get().keys());
    const selectedNodes = Array.from(this.rowsNodes.get().values()).filter(
      (node) => node.isSelected && showRowsKeys.includes(node.id)
    ).length;

    if (selectedNodes === this.showRows.get().size) {
      rowsSelectionState = "all";
    }
    if (selectedNodes === 0) {
      rowsSelectionState = "none";
    }
    if (selectedNodes !== this.showRows.get().size && selectedNodes !== 0) {
      rowsSelectionState = "some";
    }
    this.rowsSelection.set(rowsSelectionState);
  }

  changeRowsPerPage(rowsPerPage: number, page: number): void {
    this.currentPage.set(page);
    this.rowsPerPage.set(rowsPerPage);
    this.showRows.set(
      getFirstPageRowsHelper({
        isPagination: this.isPagination.get(),
        currentPage: page,
        rowModel: this.rowModel.get(),
        rows: this.filteredRows.get(),
        rowsPerPage
      })
    );
    let rowsSelectionState = this.rowsSelection.get();
    const showRowsKeys = Array.from(this.showRows.get().keys());
    const selectedNodes = Array.from(this.rowsNodes.get().values()).filter(
      (node) => node.isSelected && showRowsKeys.includes(node.id)
    ).length;

    if (selectedNodes === this.showRows.get().size) {
      rowsSelectionState = "all";
    }
    if (selectedNodes === 0) {
      rowsSelectionState = "none";
    }
    if (selectedNodes !== this.showRows.get().size && selectedNodes !== 0) {
      rowsSelectionState = "some";
    }
    this.rowsSelection.set(rowsSelectionState);
  }

  searchRows(search: string, column?: TLocalColumn<TData, TValue>): void {
    const searchColumns = this.searchColumns.get();
    const globalSearch = this.globalSearch.get();
    if (column) {
      searchColumns.set(column.id, search);
    }
    if (this.rowModel.get() === "client") {
      let filteredRows = this.rowData.get();
      if (column && search) {
        filteredRows = getSearchColumn({
          rows: filteredRows,
          searchColumn: column,
          search
        });
      }
      if ((!column && search) || globalSearch) {
        filteredRows = getGlobalSearch({
          rows: filteredRows,
          search: !column ? search : globalSearch
        });
      }
      this.showRows.set(
        getFirstPageRowsHelper({
          isPagination: this.isPagination.get(),
          rowModel: this.rowModel.get(),
          rows: filteredRows,
          rowsPerPage: this.rowsPerPage.get(),
          currentPage: 1
        })
      );
      let rowsSelectionState = this.rowsSelection.get();
      const showRowsKeys = Array.from(this.showRows.get().keys());
      const selectedNodes = Array.from(this.rowsNodes.get().values()).filter(
        (node) => node.isSelected && showRowsKeys.includes(node.id)
      ).length;

      if (selectedNodes === this.showRows.get().size) {
        rowsSelectionState = "all";
      }
      if (selectedNodes === 0) {
        rowsSelectionState = "none";
      }
      if (selectedNodes !== this.showRows.get().size && selectedNodes !== 0) {
        rowsSelectionState = "some";
      }
      this.rowsSelection.set(rowsSelectionState);
      this.currentPage.set(1);
    }
    this.searchColumns.set(searchColumns);
    this.globalSearch.set(!column ? search : globalSearch);
  }

  setRowNode(node: IRowNode<TData>): void {
    const rowsNodes = this.rowsNodes.get();
    let rowsSelectionState = this.rowsSelection.get();
    rowsNodes.set(node.id, node);
    const showRowsKeys = Array.from(this.showRows.get().keys());
    const selectedNodes = Array.from(this.rowsNodes.get().values()).filter(
      (selectedNode) =>
        selectedNode.isSelected && showRowsKeys.includes(selectedNode.id)
    ).length;
    if (selectedNodes === this.showRows.get().size) {
      rowsSelectionState = "all";
    }
    if (selectedNodes === 0) {
      rowsSelectionState = "none";
    }
    if (selectedNodes !== this.showRows.get().size && selectedNodes !== 0) {
      rowsSelectionState = "some";
    }
    this.rowsNodes.set(rowsNodes);
    this.rowsSelection.set(rowsSelectionState);
  }

  selectAllRows(isSelected: boolean, filtered?: boolean): void {
    let rowsSelectionState = this.rowsSelection.get();
    const rowsNodes = this.rowsNodes.get();
    const showRows = this.showRows.get();
    if (filtered) {
      rowsNodes.forEach((el, key) => {
        if (showRows.has(el.id)) {
          rowsNodes.set(key, { ...el, isSelected });
        }
      });
    } else {
      showRows.forEach((_, key) => {
        const rowNode = rowsNodes.get(key);
        rowNode && rowsNodes.set(key, { ...rowNode, isSelected });
      });
    }

    const selectedNodes = Array.from(rowsNodes.values()).filter(
      (node) => node.isSelected
    ).length;

    if (selectedNodes === showRows.size) {
      rowsSelectionState = "all";
    }
    if (selectedNodes === 0) {
      rowsSelectionState = "none";
    }
    if (selectedNodes !== showRows.size && selectedNodes !== 0) {
      rowsSelectionState = "some";
    }

    this.callbacks.get()?.onSelectionChanged?.({
      rowsNodes: Array.from(rowsNodes.values()).filter(
        (node) => node.isSelected
      )
    });

    this.rowsNodes.set(new Map(rowsNodes));
    this.rowsSelection.set(rowsSelectionState);
  }

  setSorting(column: TLocalColumn<TData, TValue>, name: string | null): void {
    const rowsNodes = this.rowsNodes.get();
    const isPagination = this.isPagination.get();
    const currentPage = this.currentPage.get();
    const rowsPerPage = this.rowsPerPage.get();
    const rowModel = this.rowModel.get();
    const filteredRows = this.filteredRows.get();

    let _rowData = new Map<string, TRowDataExternal<TData, TValue>>();
    if (
      column.comparator !== undefined &&
      filteredRows &&
      rowsNodes &&
      rowModel === "client" &&
      name &&
      column.comparator
    ) {
      let a = [...filteredRows.entries()];
      a = a.sort(([keyA, valueA], [keyB, valueB]) => {
        if (column.comparator) {
          return column.comparator(
            column.valueGetter
              ? column.valueGetter({
                  data: valueA,
                  column
                })
              : (getValueObject(valueA, column.field as any) as TValue),
            column.valueGetter
              ? column.valueGetter({
                  data: valueB,
                  column
                })
              : (getValueObject(valueB, column.field as any) as TValue),
            name,
            rowsNodes.get(keyA),
            rowsNodes.get(keyB)
          );
        }
        return 0;
      });
      a.forEach(([key, value]) => {
        _rowData.set(key, value);
      });
    } else {
      _rowData = filteredRows;
    }

    this.showRows.set(
      getFirstPageRowsHelper({
        isPagination,
        rowModel,
        rows: _rowData,
        rowsPerPage,
        currentPage
      })
    );
    this.sortParams.set(name ? { name, field: column.field } : null);
  }

  setColumns(columns: TColumn<TData, TValue>[]): void {
    const columnsWithIds = checkUniqIdColumns(columns) as TLocalColumn<
      TData,
      TValue
    >[];
    const rightPinnedColumns = columnsWithIds.filter(
      (elems) =>
        elems.pinnedDirection === "right" && elems.isDefaultPinned === true
    );
    const leftPinnedColumns = columnsWithIds.filter(
      (elems) =>
        elems.pinnedDirection === "left" && elems.isDefaultPinned === true
    );

    const localColumns = [
      ...leftPinnedColumns,
      ...columnsWithIds.filter((el) => el.isDefaultPinned !== true),
      ...rightPinnedColumns
    ].map((column) => ({ ...column, isPinned: column.isDefaultPinned }));

    this.columns.set(columnsWithIds);
    this.localColumns.set(localColumns);
    this.leftPinnedColumnsLength.set(leftPinnedColumns.length);
    this.rightPinnedColumnsLength.set(rightPinnedColumns.length);
  }

  setDefaultColumn(defaultColumn: IColumnDefault<TData, TValue>): void {
    this.defaultColumn.set(defaultColumn);
  }

  pinningColumn(column: TLocalColumn<TData, TValue>): void {
    const localColumns = this.localColumns.get();
    const callbacks = this.callbacks.get();

    const _localColumns = localColumns.map((_col) =>
      _col.id === column.id ? { ..._col, isPinned: true } : _col
    );

    const rightPinnedColumns = _localColumns.filter(
      (elems) => elems.pinnedDirection === "right" && elems.isPinned === true
    );
    const leftPinnedColumns = _localColumns.filter(
      (elems) => elems.pinnedDirection === "left" && elems.isPinned === true
    );

    callbacks?.onChangePinnedColumn?.(column, {
      pinnedDirection: column.pinnedDirection,
      isPinned: true
    });

    this.localColumns.set([
      ...leftPinnedColumns,
      ..._localColumns.filter((el) => el.isPinned !== true),
      ...rightPinnedColumns
    ]);
    this.rightPinnedColumnsLength.set(rightPinnedColumns.length);
    this.leftPinnedColumnsLength.set(leftPinnedColumns.length);
  }

  unpinningColumn(column: TLocalColumn<TData, TValue>): void {
    const columns = this.columns.get();
    const localColumns = this.localColumns.get();
    const callbacks = this.callbacks.get();

    const _unpinnedColumns: TLocalColumn<TData, TValue>[] = columns.map(
      (_col) => {
        const localColumn = localColumns.find((col) => col.id === _col.id);
        if (_col.id === column.id) {
          callbacks?.onChangePinnedColumn?.(
            { ...(localColumn || _col) },
            { pinnedDirection: column.pinnedDirection, isPinned: false }
          );
          return {
            ...(localColumn || _col),
            isPinned: false
          };
        }
        return localColumn || _col;
      }
    );

    const rightPinnedColumns = _unpinnedColumns.filter(
      (elems) => elems.pinnedDirection === "right" && elems.isPinned === true
    );
    const leftPinnedColumns = _unpinnedColumns.filter(
      (elems) => elems.pinnedDirection === "left" && elems.isPinned === true
    );

    const _localColumns = [
      ...leftPinnedColumns,
      ..._unpinnedColumns.filter((el) => !el.isPinned),
      ...rightPinnedColumns
    ];

    this.localColumns.set(_localColumns);
    this.leftPinnedColumnsLength.set(leftPinnedColumns.length);
    this.rightPinnedColumnsLength.set(rightPinnedColumns.length);
  }

  setFilter(column: TLocalColumn<TData, TValue>, filter: string[]): void {
    let filterParams = this.filterParams.get();
    const rowModel = this.rowModel.get();
    const rowsNodes = this.rowsNodes.get();
    const rowData = this.rowData.get();

    if (!filterParams) {
      filterParams = {};
    }
    if (!filter.length) {
      delete filterParams[column.id];
    } else {
      filterParams[column.id] = {
        column,
        params: filter
      };
    }

    let filteredRows = new Map<string, TRowDataExternal<TData, TValue>>();

    if (rowModel === "client") {
      if (Object.keys(filterParams).length === 0) {
        filteredRows = rowData;
      } else {
        [...rowData.entries()].forEach(([key, data]) => {
          if (
            column.filterFunc?.({
              node: rowsNodes.get(key) as IRowNode<TData>,
              value: column.valueGetter
                ? column.valueGetter({
                    data,
                    column
                  })
                : (getValueObject(data, column.field as any) as TValue),
              filterParams:
                filterParams && filterParams[column.id].params
                  ? filterParams[column.id].params
                  : []
            })
          ) {
            filteredRows.set(key, data);
          }
        });
      }
      this.filteredRows.set(filteredRows);
      this.showRows.set(
        getFirstPageRowsHelper({
          isPagination: this.isPagination.get(),
          rowModel,
          rows: filteredRows,
          rowsPerPage: this.rowsPerPage.get(),
          currentPage: 1
        })
      );
    }
    this.filterParams.set({ ...filterParams });
  }

  setPinnedRows(pinnedRows?: IRowNode<TData>[]): void {
    const pinnedRowsState = this.pinnedRows.get();
    const rowsNodes = this.rowsNodes.get();
    if (!pinnedRows?.length) {
      pinnedRowsState.forEach((row) => {
        const node = rowsNodes.get(row.id);
        node && rowsNodes.set(row.id, { ...node, isRowPinned: false });
      });
      pinnedRowsState.clear();
    } else {
      pinnedRows.forEach((row) => {
        pinnedRowsState.set(row.id, row);
        const node = rowsNodes.get(row.id);
        node && rowsNodes.set(row.id, { ...node, isRowPinned: true });
      });
    }
    this.pinnedRows.set(new Map(pinnedRowsState));
    this.rowsNodes.set(new Map(rowsNodes));
  }

  setUnpinnedRow(pinnedRow: IRowNode<TData>): void {
    const pinnedRows = this.pinnedRows.get();
    if (pinnedRows.get(pinnedRow.id)) {
      pinnedRows.delete(pinnedRow.id);
    }
    this.pinnedRows.set(new Map(pinnedRows));
  }

  setPinnedRowData(data?: TData[]): void {
    const pinnedRows = this.pinnedRows.get();
    const columns = this.columns.get();

    if (data && data.length) {
      data.forEach((d) => {
        const id = `pinned-row-${pinnedRows.size}`;
        pinnedRows.set(id, {
          data: {
            ...d,
            computedData: columns.reduce(
              (computedData, column) => ({
                ...computedData,
                [column.field]: column.valueGetter
                  ? column.valueGetter({ data: d, column: column as any })
                  : getValueObject(d, column.field as any, "")
              }),
              {}
            )
          },
          isRowPinned: true,
          id,
          rowIndex: 0,
          setRowPinned: () => {
            /* */
          },
          isSelected: false,
          height: 0,
          setSelection: () => {
            /* */
          },
          isDetail: false
        });
      });
    } else {
      pinnedRows.clear();
    }
    this.pinnedRows.set(pinnedRows);
  }

  setCallbacks(callbacks: ITableStateCallbacks<TData, TValue>): void {
    this.callbacks.set({ ...this.callbacks.get(), ...callbacks });
  }
}
