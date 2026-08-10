import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent
} from "react";
import { getValueObject } from "@dmitrygrigorov/components";
import Cell from "../Cell";
import { IRowNode } from "../types";
import PlusCell from "../Cell/components/PlusCell";
import { useObservable, useTableService } from "../TableContext";
import RowNested from "../RowNested";
import ArrowCell from "../Cell/components/ArrowCell";
import CheckboxCell from "../Cell/components/CheckboxCell";
import PinCell from "../Cell/components/PinCell";
import { RowStyled } from "./styles";
import { IRowProps } from "./types";

const Row = <TData, TValue>({
  data,
  rowClassName,
  rowStyle,
  size,
  id,
  rowIndex,
  getRowClassName,
  isCheckboxSelection,
  isDividerRow,
  isDetailRow,
  detailRowOptions,
  detailRowRenderer,
  viewTypeDetail,
  onCellValueChanged,
  onCellEditingStopped,
  onCellEditingStarted,
  onRowEditingStopped,
  onRowEditingStarted,
  rowClicked,
  rowDoubleClicked,
  onRowMouseEnter,
  onRowMouseLeave,
  isRowSelectable,
  onRowSelected,
  onSelectionChanged,
  rowNode,
  isPinningRows,
  isPinned,
  refTable
}: IRowProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const [isHiddenDetailRow, setIsHiddenDetailRow] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const rowsNodes = useObservable(tableService.rowsNodes);
  const localColumns = useObservable(tableService.localColumns);
  const ref = useRef<HTMLTableRowElement>(null);
  // Measures the row's rendered height synchronously so it's available on
  // the same pass rather than lagging a render behind via an effect.
  /* eslint-disable react-hooks/refs */
  const node: IRowNode<TData> = useMemo(
    () => ({
      ...rowNode,
      setSelection: (newValue: boolean) => handleRowSelect(null, newValue),
      isDetail: isDetailRow || false,
      height: ref.current ? ref.current.getBoundingClientRect().height : 0,
      rowIndex
    }),
    [rowIndex, isDetailRow, rowNode]
  );
  /* eslint-enable react-hooks/refs */
  // Depends on `node`, whose own memo above already reads a ref, so React
  // Compiler cannot preserve this memoization either (same root cause).
  /* eslint-disable react-hooks/preserve-manual-memoization */
  const isSelectable = useMemo(() => {
    if (isRowSelectable) {
      return isRowSelectable(node);
    } else {
      return true;
    }
  }, [node, isRowSelectable]);
  /* eslint-enable react-hooks/preserve-manual-memoization */

  useEffect(() => {
    tableService.setRowNode(node);
  }, []);

  const handleRowSelect = (
    event: ChangeEvent | KeyboardEvent | null,
    selection: boolean
  ): void => {
    if (!isSelectable) {
      return;
    }
    const rowNodesWithoutCurrent = Array.from(rowsNodes.values()).filter(
      (r) => r.id !== node.id
    );
    tableService.setRowNode({
      ...node,
      isSelected: selection
    });
    onRowSelected?.({
      data,
      isSelected: selection,
      event: event as unknown as Event,
      eventPath: (event as unknown as Event).composedPath
        ? (event as unknown as Event).composedPath()
        : undefined,
      rowIndex,
      rowPinned: undefined,
      node
    });
    onSelectionChanged?.({
      rowsNodes: [
        ...rowNodesWithoutCurrent,
        { ...node, isSelected: selection }
      ].filter((r) => r.isSelected)
    });
  };

  const className = useMemo(() => {
    const classNames = [];
    if (rowClassName) {
      classNames.push(rowClassName);
    }
    if (getRowClassName) {
      classNames.push(getRowClassName({ data, rowIndex, node }));
    }
    return classNames;
  }, [rowClassName, getRowClassName, data, rowIndex, node]);

  const handleClick = (event: MouseEvent): void => {
    rowClicked?.({
      data,
      event,
      eventPath: (event as unknown as Event).composedPath
        ? (event as unknown as Event).composedPath()
        : undefined,
      rowIndex,
      node,
      rowPinned: undefined
    });
  };

  const handleDoubleClick = (event: MouseEvent): void => {
    rowDoubleClicked?.({
      data,
      event,
      eventPath: (event as unknown as Event).composedPath
        ? (event as unknown as Event).composedPath()
        : undefined,
      rowIndex,
      node,
      rowPinned: undefined
    });
  };

  const handleMouseEnter = (event: MouseEvent): void => {
    setIsHover(true);
    onRowMouseEnter?.({
      data,
      event,
      eventPath: (event as unknown as Event).composedPath
        ? (event as unknown as Event).composedPath()
        : undefined,
      rowIndex,
      node,
      rowPinned: undefined
    });
  };

  const handleMouseLeave = (event: MouseEvent): void => {
    setIsHover(false);
    onRowMouseLeave?.({
      data,
      event,
      eventPath: (event as unknown as Event).composedPath
        ? (event as unknown as Event).composedPath()
        : undefined,
      rowIndex,
      node,
      rowPinned: undefined
    });
  };

  return (
    <>
      <RowStyled
        isPinned={isPinned}
        isSelected={node.isSelected}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        style={rowStyle}
        className={className.join(" ")}
        ref={ref}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        isDividerRow={isDividerRow}>
        {isPinningRows && (
          <PinCell<TData>
            size={size}
            isHover={isHover}
            node={node}
            isPressed={isPinned}
          />
        )}
        {isCheckboxSelection && (
          <CheckboxCell
            size={size}
            handleChange={handleRowSelect}
            isSelected={node.isSelected}
            isSelectable={isSelectable}
          />
        )}
        {viewTypeDetail === "table" && (
          <PlusCell
            size={size}
            onClick={() => setIsHiddenDetailRow(!isHiddenDetailRow)}
            isCollapsed={isHiddenDetailRow}
          />
        )}
        {viewTypeDetail === "info" && (
          <ArrowCell
            size={size}
            onClick={() => setIsHiddenDetailRow(!isHiddenDetailRow)}
            isCollapsed={isHiddenDetailRow}
          />
        )}
        {localColumns.map((column, index) => {
          const key = `cell-${JSON.stringify(
            getValueObject(data, column.field as any, "")
          )}-${id}-${index}`;
          return (
            <Cell<TData, TValue>
              refTable={refTable}
              key={key}
              size={size}
              column={column}
              data={data}
              node={node}
              rowIndex={rowIndex}
              onCellValueChanged={onCellValueChanged}
              onRowEditingStopped={onRowEditingStopped}
              onRowEditingStarted={onRowEditingStarted}
              onCellEditingStopped={onCellEditingStopped}
              onCellEditingStarted={onCellEditingStarted}
            />
          );
        })}
      </RowStyled>
      <RowNested<TData, TValue>
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        detailRowOptions={detailRowOptions}
        detailRowRenderer={detailRowRenderer}
        isHiddenDetailRow={isHiddenDetailRow}
        isDetailRow={isDetailRow}
        viewTypeDetail={viewTypeDetail}
        isDividerRow={isDividerRow}
        node={node}
        rowStyle={rowStyle}
        data={data}
      />
    </>
  );
};

export default React.memo(Row) as typeof Row;
