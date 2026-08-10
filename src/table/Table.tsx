import React, {
  useMemo,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  ReactElement,
  useState,
  useRef,
  useLayoutEffect,
  useCallback
} from "react";
import { useMultipleResizeObserver } from "@dmitrygrigorov/components";
import { ITableProps, ITableApis, TLocalColumn } from "./types";
import {
  TableStyled,
  TableWrapper,
  ModalWrapperStyled,
  TableContentStyles
} from "./styles";
import Header from "./Header";
import Footer from "./Footer";
import ColumnsRow from "./ColumnsRow";
import Rows from "./Rows";
import useTableApi from "./hooks/useTableApi";
import useColumnApi from "./hooks/useColumnApi";
import { TableService } from "./TableContext/tableService";
import { useTableService, useObservable, TableContext } from "./TableContext";

function Table<TData, TValue = string>({
  title,
  size = "l",
  columns,
  description,
  className,
  rowClassName,
  rowStyle,
  noDataComponent,
  getRowClassName,
  isDividerRow,
  isPagination,
  paginationPageSize,
  paginationCurrentPage,
  rowModel = "client",
  positionSearch = "header",
  headerContent,
  isRefreshable,
  onUpdate,
  paginationAllRowCount,
  isPaginationRowPerPage,
  paginationCounts,
  onPaginationChange,
  style,
  isMobile,
  search,
  isSearch,
  placeholderSearch,
  onSearch,
  getContextMenu,
  isDetailRow,
  detailRowOptions,
  detailRowRenderer,
  viewTypeDetail,
  isHiddenColumnHeader,
  isHeaderCheckboxSelection,
  isCheckboxSelection,
  rowData,
  getRowId,
  isResize,
  onResizeChanged,
  onRowSelected,
  additionalButton,
  onClickAdditionalButton,
  isDisabledAdditionalButton,
  isFullScreen,
  refApi,
  tableContentClassName,
  onChangePinnedColumn,
  ...props
}: ITableProps<TData, TValue> & {
  isFullScreen: boolean;
  onResizeChanged: () => void;
  refApi: ForwardedRef<ITableApis<TData, TValue>>;
}): React.ReactElement {
  const tableService = useTableService<TData, TValue>();
  const rowsPerPage = useObservable(tableService.rowsPerPage);
  const leftPinnedColumnsLength = useObservable(
    tableService.leftPinnedColumnsLength
  );
  const rightPinnedColumnsLength = useObservable(
    tableService.rightPinnedColumnsLength
  );
  const filteredRows = useObservable(tableService.filteredRows);
  const pinnedRows = useObservable(tableService.pinnedRows);
  const refTable = useRef<HTMLTableElement>(null);
  const [marginsTopPinRows, setMarginsTopPinRows] = useState<number[]>([]);
  const [widthPinnedColumns, setWidthPinnedColumns] = useState<{
    left: number[];
    right: number[];
  }>({ left: [], right: [] });
  const [isShadowLeft, setIsShadowLeft] = useState<boolean>(false);
  const [isShadowRight, setIsShadowRight] = useState<boolean>(true);

  const sortParams = useObservable(tableService.sortParams);
  const filterParams = useObservable(tableService.filterParams);
  const searchColumns = useObservable(tableService.searchColumns);
  const localColumns = useObservable(tableService.localColumns);
  const visibleColumns = useMemo(
    () => localColumns.filter((column) => !column.isHidden),
    [localColumns]
  );

  const generalPages = useMemo(() => {
    if (rowModel === "server" && paginationAllRowCount) {
      return Math.ceil(paginationAllRowCount / rowsPerPage) || 0;
    }
    if (paginationPageSize) {
      return Math.ceil(filteredRows.size / rowsPerPage);
    }
    return 0;
  }, [rowsPerPage, filteredRows, paginationAllRowCount]);

  const tableApi = useTableApi<TData, TValue>({
    rowData,
    paginationAllRowCount,
    onPaginationChange,
    generalPages
  });

  const columnApi = useColumnApi<TData, TValue>();

  useMultipleResizeObserver([refTable], (el) => {
    if (el) {
      const elementsTh = el.querySelectorAll<HTMLElement>("th");
      const _widthPinnedColumnsLeft = Array.from(elementsTh)
        .slice(
          0,
          isCheckboxSelection
            ? leftPinnedColumnsLength + 1
            : leftPinnedColumnsLength
        )
        .map((element) => element.offsetWidth);
      const _widthPinnedColumnsRight = rightPinnedColumnsLength
        ? Array.from(elementsTh)
            .slice(-rightPinnedColumnsLength)
            .map((element) => element.offsetWidth)
        : [];
      setWidthPinnedColumns({
        left: _widthPinnedColumnsLeft,
        right: _widthPinnedColumnsRight.reverse()
      });
    }
  });

  useLayoutEffect(() => {
    if (refTable.current) {
      const elementsTh = refTable.current.querySelectorAll<HTMLElement>("th");
      const _widthPinnedColumnsLeft = Array.from(elementsTh)
        .slice(
          0,
          isCheckboxSelection
            ? leftPinnedColumnsLength + 1
            : leftPinnedColumnsLength
        )
        .map((element) => element.offsetWidth);
      const _widthPinnedColumnsRight = rightPinnedColumnsLength
        ? Array.from(elementsTh)
            .slice(-rightPinnedColumnsLength)
            .map((element) => element.offsetWidth)
            .slice(-rightPinnedColumnsLength)
        : [];
      setWidthPinnedColumns({
        left: _widthPinnedColumnsLeft,
        right: _widthPinnedColumnsRight.reverse()
      });
    }
  }, [leftPinnedColumnsLength, rightPinnedColumnsLength]);

  const handleScroll: React.UIEventHandler<HTMLTableElement> = (
    event
  ): void => {
    const { currentTarget } = event;
    setIsShadowLeft((currentTarget.scrollLeft ?? 0) > 0);
    setIsShadowRight(
      currentTarget.scrollWidth - currentTarget.scrollLeft !==
        currentTarget.clientWidth
    );
  };

  useImperativeHandle(
    refApi,
    () => ({
      columnApi,
      tableApi
    }),
    [tableApi, columnApi]
  );

  const isShowHeader = useMemo(
    () =>
      !!(
        title ||
        description ||
        (isSearch && positionSearch === "header") ||
        isResize
      ),
    [title, description, isResize, isSearch, positionSearch]
  );

  const isShowFooter = useMemo(
    () =>
      !!(
        isPagination ||
        props.footerText ||
        props.footerContent ||
        (isSearch && positionSearch === "footer")
      ),
    [
      isPagination,
      props.footerText,
      positionSearch,
      isSearch,
      props.footerContent
    ]
  );

  useEffect(() => {
    tableService.isPagination.set(isPagination ?? false);
  }, [isPagination]);

  useEffect(() => {
    if (paginationPageSize) {
      tableService.changeRowsPerPage(paginationPageSize, 1);
    }
  }, [paginationPageSize]);

  useEffect(() => {
    tableService.setColumns(columns);
  }, [columns]);

  useEffect(() => {
    if (paginationCurrentPage) {
      tableService.changePage(paginationCurrentPage);
    }
  }, [paginationCurrentPage]);

  useEffect(() => {
    tableService.setRowData(rowData, columns, getRowId);
    tableService.setRowNodes();

    const defaultFilterColumn = visibleColumns.find(
      (column) => column.defaultFilterName
    );

    const defaultSortColumn = columns.find(
      (column) => column.defaultSortName
    ) as TLocalColumn<TData, TValue> | undefined;

    const defaultSearchColumn = visibleColumns.find(
      (column) => column.defaultSearch
    );

    if (defaultFilterColumn && filterParams === null) {
      tableService.setFilter(
        defaultFilterColumn,
        defaultFilterColumn.defaultFilterName as string[]
      );
    }

    if (defaultSortColumn && sortParams === null) {
      tableService.setSorting(
        defaultSortColumn,
        defaultSortColumn.defaultSortName as string
      );
    }

    if (defaultSearchColumn && searchColumns.size === 0) {
      tableService.searchRows(
        defaultSearchColumn?.defaultSearch || "",
        defaultSearchColumn
      );
    }
  }, [columns, rowData]);

  useEffect(() => {
    tableService.setPinnedRowData([]);
    tableService.setPinnedRowData(props.pinnedRowData);
  }, [props.pinnedRowData]);

  useEffect(() => {
    tableService.rowModel.set(rowModel);
  }, [rowModel]);

  useEffect(() => {
    tableService.setCallbacks({
      onChangePinnedColumn,
      onSelectionChanged: props.onSelectionChanged
    });
  }, [onChangePinnedColumn, props.onSelectionChanged]);

  useEffect(() => {
    const heightThead =
      refTable.current?.querySelector("thead")?.clientHeight || 0;
    const rowsElements = refTable.current?.querySelectorAll("tbody > tr");
    let margin = heightThead;
    setMarginsTopPinRows(
      Array(pinnedRows.size)
        .fill(0)
        .map((_, index) => {
          if (index === 0) {
            return margin;
          }
          margin = margin + (rowsElements?.item(index - 1)?.clientHeight || 0);
          return margin;
        })
    );
  }, [pinnedRows.size]);

  return (
    <TableContentStyles
      className={className}
      style={style}
      isFullScreen={isFullScreen}>
      {isShowHeader && (
        <Header<TData, TValue>
          search={search}
          size={size}
          isMobile={isMobile}
          title={title}
          description={description}
          isSearch={isSearch && positionSearch === "header"}
          placeholderSearch={placeholderSearch}
          onSearch={onSearch}
          isResize={isResize}
          headerContent={headerContent}
          onResizeChange={onResizeChanged}
          additionalButton={additionalButton}
          onClickAdditionalButton={onClickAdditionalButton}
          isDisabledAdditionalButton={isDisabledAdditionalButton}
          isRefreshable={isRefreshable}
          onUpdate={onUpdate}
          isFullScreen={isFullScreen}
        />
      )}
      <TableWrapper className={tableContentClassName} onScroll={handleScroll}>
        <TableStyled
          pinnedRowsCount={pinnedRows.size}
          ref={refTable}
          marginsTopPinRows={marginsTopPinRows}
          isShadowLeft={isShadowLeft}
          isShadowRight={isShadowRight}
          widthColumnsLeft={widthPinnedColumns.left}
          widthColumnsRight={widthPinnedColumns.right}>
          <ColumnsRow<TData, TValue>
            isPinningRows={props.isPinningRows}
            size={size}
            isHeaderCheckboxSelection={isHeaderCheckboxSelection}
            getContextMenu={getContextMenu}
            isHiddenColumnHeader={isHiddenColumnHeader}
            isCheckboxSelection={isCheckboxSelection}
            onFilterChanged={props.onFilterChanged}
            onSearch={onSearch}
            onChangeSort={props.onChangeSort}
            viewTypeDetail={viewTypeDetail}
          />
          <tbody>
            <Rows<TData, TValue>
              refTable={refTable}
              isDetailRow={isDetailRow}
              isCheckboxSelection={isCheckboxSelection}
              viewTypeDetail={viewTypeDetail}
              detailRowOptions={detailRowOptions}
              detailRowRenderer={detailRowRenderer}
              isPagination={isPagination}
              rowModel={rowModel}
              rowClassName={rowClassName}
              rowStyle={rowStyle}
              size={size}
              getRowClassName={getRowClassName}
              isDividerRow={isDividerRow}
              noDataComponent={noDataComponent}
              onRowSelected={onRowSelected}
              onCellEditingStarted={props.onCellEditingStarted}
              onCellEditingStopped={props.onCellEditingStopped}
              onCellValueChanged={props.onCellValueChanged}
              onRowEditingStarted={props.onRowEditingStarted}
              onRowEditingStopped={props.onRowEditingStopped}
              rowClicked={props.rowClicked}
              isRowSelectable={props.isRowSelectable}
              rowDoubleClicked={props.rowDoubleClicked}
              onRowMouseEnter={props.onRowMouseEnter}
              onRowMouseLeave={props.onRowMouseLeave}
              onSelectionChanged={props.onSelectionChanged}
              isPinningRows={props.isPinningRows}
            />
          </tbody>
        </TableStyled>
      </TableWrapper>
      {isShowFooter && (
        <Footer<TData, TValue>
          className={props.footerClassName}
          text={props.footerText}
          isSearch={isSearch && positionSearch === "footer"}
          isMobile={isMobile}
          size={size}
          search={search}
          placeholderSearch={placeholderSearch}
          onSearch={onSearch}
          paginationPageSize={paginationPageSize}
          generalPages={generalPages}
          isPagination={isPagination}
          isPaginationRowPerPage={isPaginationRowPerPage}
          paginationCounts={paginationCounts}
          onPaginationChange={onPaginationChange}
          content={props.footerContent}
          isFillPagination={props.isFillPagination}
        />
      )}
    </TableContentStyles>
  );
}

Table.displayName = "Table";

const TableComponentWithModal = <TData, TValue>(
  props: ITableProps<TData, TValue>,
  ref: ForwardedRef<ITableApis<TData, TValue>>
): JSX.Element => {
  const [isFullScreen, setFullScreen] = useState(false);

  const onResizeChange = useCallback((): void => {
    setFullScreen((prevState) => !prevState);
    props.onResizeChanged?.(!isFullScreen);
  }, [props.onResizeChanged]);

  if (isFullScreen) {
    return (
      <ModalWrapperStyled isOpen={isFullScreen} isHiddenCloseButton>
        <Table<TData, TValue>
          {...props}
          isFullScreen={isFullScreen}
          onResizeChanged={onResizeChange}
          refApi={ref}
        />
      </ModalWrapperStyled>
    );
  }
  return (
    <Table<TData, TValue>
      {...props}
      isFullScreen={false}
      onResizeChanged={onResizeChange}
      refApi={ref}
    />
  );
};

const TableComponent = React.memo(
  forwardRef(TableComponentWithModal) as <TData, TValue>(
    props: ITableProps<TData, TValue> & {
      ref: ForwardedRef<ITableApis<TData, TValue>>;
    }
  ) => ReactElement
) as <TData, TValue>(
  props: ITableProps<TData, TValue> & {
    ref: ForwardedRef<ITableApis<TData, TValue>>;
  }
) => ReactElement;

function TableWithProvider<TData = any, TValue = string>(
  props: ITableProps<TData, TValue>,
  ref: ForwardedRef<ITableApis<TData, TValue>>
): JSX.Element {
  const tableService = useMemo(() => new TableService(), []);
  return (
    <TableContext.Provider value={tableService}>
      <TableComponent<TData, TValue> {...props} ref={ref} />
    </TableContext.Provider>
  );
}

export default forwardRef(TableWithProvider) as <TData = any, TValue = string>(
  props: ITableProps<TData, TValue> & {
    ref?: ForwardedRef<ITableApis<TData, TValue>>;
  }
) => ReturnType<typeof TableWithProvider>;
