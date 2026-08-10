import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ProgressBar,
  Tooltip,
  getTextWidth,
  useDebounce
} from "@dmitrygrigorov/components";
import { IColumnAvatar, TCellParamsProgress, TLocalColumn } from "../types";
import { useObservable, useTableService } from "../TableContext";
import ImageCell from "./components/ImageCell";
import { IStatusCellProps } from "./components/Status/types";
import YesNo from "./components/YesNo";
import StatusCell from "./components/Status/Status";
import BasicCell from "./components/BasicCell/BasicCell";
import NumberCell from "./components/Number/Number";
import Tags from "./components/Tag/Tag";
import Rating from "./components/Rating/Rating";
import AvatarCells from "./components/Avatar";
import { CellStyled, CellTitleStyled } from "./styles";
import { ICellProps } from "./types";

const Cell = <TData, TValue>({
  size,
  column,
  data,
  node,
  rowIndex,
  onCellValueChanged,
  onCellEditingStarted,
  onCellEditingStopped,
  onRowEditingStarted,
  onRowEditingStopped,
  refTable
}: ICellProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const defaultColumn = useObservable(tableService.defaultColumn);
  const cellRef = useRef<HTMLTableDataCellElement>(null);
  const [isTooltip, setIsTooltip] = useState(false);
  const isEditable = useMemo(() => {
    if (typeof column.isEditable === "undefined") {
      if (defaultColumn) {
        if (typeof defaultColumn.isEditable === "function") {
          return defaultColumn.isEditable({
            node,
            column,
            data
          });
        }
        return defaultColumn.isEditable;
      }
    }
    if (typeof column.isEditable === "function") {
      return column.isEditable({ node, column, data });
    }
    return column.isEditable;
  }, [column, defaultColumn]);

  const value = useMemo(
    () => data.computedData[column.field],
    [column.field, data]
  );

  const tooltipValue = useMemo(
    () =>
      column.valueFormatter
        ? column.valueFormatter({ value, column, node, data })
        : (value as unknown as string),
    [value, column, node, data]
  );

  const className = useMemo(() => {
    let _className =
      column.pinnedDirection && (column as TLocalColumn).isPinned
        ? "pinning-cell"
        : "";
    if (typeof column.classNameCell === "function") {
      _className = `${_className} ${column.classNameCell({
        data,
        value,
        node,
        column
      })}`;
    } else if (column.classNameCell) {
      _className = `${_className} ${column.classNameCell}`;
    }
    return _className;
  }, [column.classNameCell]);

  const cellIcon = useMemo(() => {
    if (typeof column.cellIcon === "function") {
      return column.cellIcon({ value, column, data, node });
    }
    return column.cellIcon;
  }, [column.cellIcon]);

  const _width = useMemo(() => {
    const columnWidth = column.width || defaultColumn?.width;
    let currentWidth = 0;

    if (typeof columnWidth === "number") {
      currentWidth = columnWidth;
    }
    if (typeof columnWidth === "string") {
      if (columnWidth.includes("%") && refTable?.current) {
        const widthTable = refTable.current.getBoundingClientRect().width;
        currentWidth =
          (widthTable / 100) * Number(columnWidth.replace("%", ""));
      } else {
        currentWidth = Number(columnWidth);
      }
    }
    if (currentWidth) {
      return `${cellIcon ? currentWidth - 44 : currentWidth}px`;
    }
    return undefined;
  }, [column.width, defaultColumn?.width, refTable, cellIcon]);

  const setTooltip = (): void => {
    if (cellRef.current) {
      const parent = cellRef.current.parentNode as HTMLElement;
      const fontParent = getComputedStyle(parent).font;

      const childrenWidth = getTextWidth(tooltipValue, fontParent);
      if (Number(_width?.replace("px", "")) < childrenWidth) {
        setIsTooltip(true);
      } else {
        setIsTooltip(false);
      }
    }
  };

  const setTooltipDebounce = useDebounce(setTooltip, 500);

  useEffect(() => {
    window.addEventListener("resize", setTooltipDebounce);
    setTooltip();
    return () => window.removeEventListener("resize", setTooltipDebounce);
  }, []);

  const handleCellValueChanged = (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ): void => {
    onCellValueChanged?.({
      oldValue,
      newValue,
      data,
      column,
      node,
      rowIndex,
      event
    });
  };

  const handleCellEditingStarted = (_value: TValue, event: Event): void => {
    onCellEditingStarted?.({
      column,
      value: _value,
      event,
      node,
      rowIndex,
      data
    });
  };

  const handleCellEditingStopped = (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ): void => {
    onCellEditingStopped?.({
      oldValue,
      newValue,
      data,
      column,
      node,
      rowIndex,
      event
    });
  };

  const handleRowEditingStarted = (event: Event): void => {
    onRowEditingStarted?.({ data, rowIndex, event, node });
  };

  const handleRowEditingStopped = (event: Event): void => {
    onRowEditingStopped?.({ data, rowIndex, event, node });
  };

  const ColumnTypeDefinition = useMemo(() => {
    if (!column.columnTypes) {
      switch (typeof value) {
        case "string":
          return "basic";
        case "number":
          return "number";
        case "boolean":
          return "boolean";
        default:
          return "basic";
      }
    } else {
      return column.columnTypes;
    }
  }, [value, column.columnTypes]);

  const renderCell = (): JSX.Element => {
    if (column.cellRenderer) {
      const Render = column.cellRenderer;
      return (
        <Tooltip text={tooltipValue} isVisible={isTooltip}>
          <CellTitleStyled width={_width}>
            <Render
              value={value}
              data={data}
              size={size}
              {...column.cellRendererParams}
              node={node}
              column={column}
              rowIndex={rowIndex}
            />
          </CellTitleStyled>
        </Tooltip>
      );
    }

    let props = null;
    if ("cellParamsGetter" in column) {
      const { cellParamsGetter } = column;
      props =
        typeof cellParamsGetter === "function"
          ? cellParamsGetter({ value, node, data, column })
          : cellParamsGetter;
    }
    switch (ColumnTypeDefinition) {
      case "status": {
        return (
          <StatusCell {...(props as IStatusCellProps<TValue>)}>
            {column.valueFormatter
              ? column.valueFormatter({ value, data, column, node })
              : value}
          </StatusCell>
        );
      }
      case "tags": {
        return <Tags<TValue> {...props}>{value}</Tags>;
      }
      case "rating":
        return <Rating {...props} />;
      case "number": {
        return (
          <NumberCell
            isEditable={isEditable}
            value={value}
            data={data}
            node={node}
            onCellValueChanged={handleCellValueChanged}
            onCellEditingStarted={handleCellEditingStarted}
            onCellEditingStopped={handleCellEditingStopped}
            onRowEditingStarted={handleRowEditingStarted}
            onRowEditingStopped={handleRowEditingStopped}
            column={column}
            cellIcon={cellIcon}
          />
        );
      }
      case "progress":
        return (
          <ProgressBar
            size="m"
            progress={Number(value)}
            {...(props as TCellParamsProgress)}
          />
        );
      case "image":
        return <ImageCell img={String(value)} />;

      case "boolean":
        return <YesNo value={Boolean(value)} />;

      case "avatar":
        return (
          <AvatarCells
            column={column as IColumnAvatar<TData, TValue>}
            node={node}
            data={data}
            value={value}
          />
        );
      default:
        return (
          <BasicCell<TData, TValue>
            width={_width}
            value={value}
            isEditable={isEditable}
            column={column}
            onCellValueChanged={handleCellValueChanged}
            onCellEditingStarted={handleCellEditingStarted}
            onCellEditingStopped={handleCellEditingStopped}
            onRowEditingStarted={handleRowEditingStarted}
            onRowEditingStopped={handleRowEditingStopped}
            node={node}
            data={data}
            valueFormatter={tooltipValue}
            isTooltip={isTooltip}
            cellIcon={cellIcon}
          />
        );
    }
  };

  return (
    <CellStyled
      className={className}
      ref={cellRef}
      size={size}
      cellType={column.columnTypes}
      isEdit={isEditable}
      style={{ width: _width, maxWidth: _width }}>
      {renderCell()}
    </CellStyled>
  );
};

export default React.memo(Cell) as typeof Cell;
