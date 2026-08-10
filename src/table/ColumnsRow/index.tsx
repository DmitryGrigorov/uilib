import React, { memo, useMemo } from "react";
import EmptyColumn from "../EmptyColumn";
import Column from "../Column";
import { useObservable, useTableService } from "../TableContext";
import ColumnCheckBox from "../ColumnCheckBox";
import { TableColumnsRow } from "./styles";
import { IColumnsRowProps } from "./types";

const ColumnsRow = <TData, TValue>({
  size,
  getContextMenu,
  isHiddenColumnHeader,
  isHeaderCheckboxSelection,
  onFilterChanged,
  onSearch,
  onChangeSort,
  isCheckboxSelection,
  isPinningRows,
  viewTypeDetail
}: IColumnsRowProps<TData, TValue>): React.ReactElement | null => {
  const tableService = useTableService<TData, TValue>();
  const localColumns = useObservable(tableService.localColumns);
  const visibleColumns = useMemo(
    () => localColumns.filter((column) => !column.isHidden),
    [localColumns]
  );
  if (!isHiddenColumnHeader && visibleColumns.length > 0) {
    return (
      <TableColumnsRow>
        <tr>
          {isPinningRows && <EmptyColumn size={size} />}
          {isCheckboxSelection && (
            <ColumnCheckBox
              size={size}
              isHiddenCheckbox={!isHeaderCheckboxSelection}
            />
          )}
          {viewTypeDetail && (
            <EmptyColumn size={size} viewTypeDetail={viewTypeDetail} />
          )}
          {visibleColumns.map((column) => (
            <Column<TData, TValue>
              onChangeSort={onChangeSort}
              onSearch={onSearch}
              columnTypes={column.columnTypes}
              key={column.id}
              column={column}
              size={size}
              contextMenuItems={
                (column?.getContextMenu && column.getContextMenu({ column })) ||
                getContextMenu?.({ column: column as any })
              }
              onFilterChanged={onFilterChanged}
            />
          ))}
        </tr>
      </TableColumnsRow>
    );
  }
  return null;
};

export default memo(ColumnsRow) as typeof ColumnsRow;
