import React, { useMemo, memo } from "react";
import { EmptyState } from "@dmitrygrigorov/components";
import Row from "../Row";
import { useObservable, useTableService } from "../TableContext";
import { IRowNode, TRowDataExternal } from "../types";
import { IRowsProps } from "./types";

const Rows = <TData, TValue>({
  rowClassName,
  rowStyle,
  size,
  getRowClassName,
  isDividerRow,
  noDataComponent,
  isDetailRow,
  viewTypeDetail,
  detailRowOptions,
  detailRowRenderer,
  isCheckboxSelection,
  refTable,
  ...props
}: IRowsProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const showRows = useObservable(tableService.showRows);
  const rowsNodes = useObservable(tableService.rowsNodes);
  const pinnedRows = useObservable(tableService.pinnedRows);
  const localColumns = useObservable(tableService.localColumns);
  const visibleColumns = useMemo(
    () => localColumns.filter((column) => !column.isHidden),
    [localColumns]
  );

  if (showRows.size === 0 && visibleColumns.length > 0) {
    return (
      <tr>
        <td colSpan={visibleColumns.length}>
          {noDataComponent || <EmptyState text="No data" />}
        </td>
      </tr>
    );
  }
  return (
    <>
      {[...pinnedRows.keys()].map((key) => {
        const pinnedRow = pinnedRows.get(key) as IRowNode<TData>;
        return (
          <Row<TData, TValue>
            refTable={refTable}
            isPinningRows={props.isPinningRows}
            isDividerRow={isDividerRow}
            id={pinnedRow.id}
            rowNode={pinnedRow}
            rowIndex={pinnedRow.rowIndex}
            size={size}
            key={`pinned-row-${pinnedRow.id}`}
            data={pinnedRow.data as TRowDataExternal<TData, TValue>}
            isPinned
            viewTypeDetail={viewTypeDetail}
          />
        );
      })}
      {[...showRows.keys()].map((key, index) => (
        <Row<TData, TValue>
          refTable={refTable}
          rowNode={rowsNodes.get(key) as IRowNode<TData>}
          isDetailRow={isDetailRow}
          viewTypeDetail={viewTypeDetail}
          detailRowOptions={detailRowOptions}
          detailRowRenderer={detailRowRenderer}
          isCheckboxSelection={isCheckboxSelection}
          key={key}
          id={key}
          data={showRows.get(key) as TRowDataExternal<TData, TValue>}
          rowClassName={rowClassName}
          rowStyle={rowStyle}
          size={size}
          rowIndex={index}
          getRowClassName={getRowClassName}
          isDividerRow={isDividerRow && index !== showRows.size - 1}
          onRowEditingStopped={props.onRowEditingStopped}
          onRowEditingStarted={props.onRowEditingStarted}
          onCellValueChanged={props.onCellValueChanged}
          onCellEditingStopped={props.onCellEditingStopped}
          onCellEditingStarted={props.onCellEditingStarted}
          rowDoubleClicked={props.rowDoubleClicked}
          onRowMouseEnter={props.onRowMouseEnter}
          onRowMouseLeave={props.onRowMouseLeave}
          rowClicked={props.rowClicked}
          onRowSelected={props.onRowSelected}
          isRowSelectable={props.isRowSelectable}
          onSelectionChanged={props.onSelectionChanged}
          isPinningRows={props.isPinningRows}
        />
      ))}
    </>
  );
};

export default memo(Rows) as typeof Rows;
