import React, { useMemo } from "react";
import { RowStyled } from "../Row/styles";
import Table from "../Table";
import { useObservable, useTableService } from "../TableContext";
import { IRowNestedProps } from "./types";

const RowNested = <TData, TValue>({
  detailRowOptions,
  detailRowRenderer,
  isDetailRow,
  isHiddenDetailRow,
  viewTypeDetail,
  isDividerRow,
  node,
  rowStyle,
  data,
  onClick,
  onDoubleClick
}: IRowNestedProps<TData, TValue>): React.ReactElement | null => {
  const tableService = useTableService<TData, TValue>();
  const localColumns = useObservable(tableService.localColumns);
  const isHiddenNestedRow = useMemo(() => {
    if (isHiddenDetailRow) {
      return true;
    }
    if (!isDetailRow || !viewTypeDetail) {
      return true;
    }
    if (viewTypeDetail === "table" && !detailRowOptions) {
      return true;
    }
    if (viewTypeDetail === "info" && !detailRowRenderer) {
      return true;
    }
    return false;
  }, [
    detailRowOptions,
    isHiddenDetailRow,
    isDetailRow,
    viewTypeDetail,
    detailRowRenderer
  ]);

  if (isHiddenNestedRow) {
    return null;
  }

  return (
    <RowStyled
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      isDividerRow={isDividerRow}
      style={rowStyle}
      className="row-nested-table">
      <td colSpan={localColumns.length + 1}>
        {viewTypeDetail === "table" && detailRowOptions && (
          <Table
            size="s"
            className={detailRowOptions.classNameTable}
            columns={detailRowOptions.columns}
            isHiddenColumnHeader={detailRowOptions.isHiddenColumnHeader}
            rowData={detailRowOptions.getDetailRowData({
              data,
              node,
              columns: localColumns
            })}
          />
        )}
        {viewTypeDetail === "info" &&
          detailRowRenderer &&
          (detailRowRenderer({
            data,
            node,
            columns: localColumns
          }) as React.ReactNode)}
      </td>
    </RowStyled>
  );
};

export default React.memo(RowNested) as typeof RowNested;
