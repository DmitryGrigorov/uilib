import React, { useMemo, useState } from "react";
import { IDropdownItem, P1, Button } from "@dmitrygrigorov/components";
import {
  IconSort1,
  IconFilter,
  IconSearchNormal1,
  IconPin
} from "@dmitrygrigorov/icons";
import ColumnContextMenu from "../ColumnContextMenu";
import { useObservable, useTableService } from "../TableContext";
import { TableColumnBaseStyled, TableColumnTitleStyled } from "../styles";
import { ITableColumnProps } from "./types";
import {
  ColumnDescriptionStyled,
  SortAndFilterDropdownStyled,
  ColumnTitleTextStyled
} from "./styles";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";
import SearchDropdown from "./SearchDropdown";

const Column = <TData, TValue>({
  column,
  size,
  contextMenuItems,
  columnTypes,
  onFilterChanged,
  onSearch,
  onChangeSort
}: ITableColumnProps<TData, TValue>): React.ReactElement => {
  const {
    title,
    field,
    iconTitle,
    description,
    iconDescription,
    isContextMenu,
    onClickContextMenuItem,
    pinnedDirection,
    className,
    width,
    isSortable,
    sortMenuItems,
    isFilter,
    filterMenuItems,
    isSearch
  } = column ?? {};
  const tableService = useTableService<TData, TValue>();
  const sortParams = useObservable(tableService.sortParams);
  const filterParams = useObservable(tableService.filterParams);
  const searchColumns = useObservable(tableService.searchColumns);
  const defaultColumn = useObservable(tableService.defaultColumn);
  const [isPinned, setPinned] = useState<boolean>(column.isPinned || false);

  const classNames = useMemo(() => {
    const _classNames = [];
    if (className) {
      _classNames.push(className);
    }
    if (defaultColumn?.className) {
      _classNames.push(defaultColumn.className);
    }
    return _classNames.join(" ");
  }, [className, defaultColumn]);

  const _width = useMemo(() => {
    if (typeof width === "number") {
      return `${width}px`;
    }
    if (typeof width === "string") {
      return width;
    }
    return defaultColumn?.width && `${defaultColumn.width}px`;
  }, [width, defaultColumn]);

  const _iconTitle = useMemo(() => {
    if (iconTitle) {
      return iconTitle;
    }
    if (defaultColumn?.iconTitle) {
      return defaultColumn.iconTitle;
    }
    return undefined;
  }, [iconTitle, defaultColumn]);

  const _iconDescription = useMemo(() => {
    if (iconDescription) {
      return iconDescription;
    }
    if (defaultColumn?.iconDescription) {
      return defaultColumn.iconDescription;
    }
    return undefined;
  }, [iconDescription, defaultColumn]);

  const contextMenu = useMemo(() => {
    if (!contextMenuItems) {
      return null;
    }
    if (
      typeof contextMenuItems === "object" &&
      !Array.isArray(contextMenuItems) &&
      React.isValidElement(contextMenuItems)
    ) {
      return contextMenuItems;
    }
    return (
      <ColumnContextMenu
        onItemClick={onClickContextMenuItem}
        menuItems={contextMenuItems as (string | IDropdownItem)[]}
      />
    );
  }, [contextMenuItems]);

  const handlePin = (): void => {
    setPinned(true);
    tableService.pinningColumn(column);
  };

  const handleUnpin = (): void => {
    setPinned(false);
    tableService.unpinningColumn(column);
  };

  return (
    <TableColumnBaseStyled
      size={size}
      className={classNames}
      style={{ minWidth: _width && _width, width: _width, maxWidth: _width }}>
      <TableColumnTitleStyled columnTypes={columnTypes}>
        {_iconTitle}
        <ColumnTitleTextStyled type="phoenix">
          {title || String(field)}
        </ColumnTitleTextStyled>
        {((isSortable && sortMenuItems) ||
          (defaultColumn?.isSortable && defaultColumn.sortMenuItems)) && (
          <SortAndFilterDropdownStyled
            content={
              <SortDropdown<TData, TValue>
                items={sortMenuItems || defaultColumn?.sortMenuItems || []}
                column={column}
                onChangeSort={onChangeSort}
              />
            }>
            <Button
              viewType="icon"
              size="m"
              isPressed={sortParams?.field === field}>
              <IconSort1 />
            </Button>
          </SortAndFilterDropdownStyled>
        )}
        {isSearch && (
          <SortAndFilterDropdownStyled
            content={
              <SearchDropdown<TData, TValue>
                column={column}
                onSearch={onSearch}
              />
            }>
            <Button
              viewType="icon"
              size="m"
              isPressed={Boolean(searchColumns.get(column.id))}>
              <IconSearchNormal1 />
            </Button>
          </SortAndFilterDropdownStyled>
        )}
        {isFilter && filterMenuItems && (
          <SortAndFilterDropdownStyled
            content={
              <FilterDropdown<TData, TValue>
                items={filterMenuItems || defaultColumn?.filterMenuItems || []}
                column={column}
                onFilterChanged={onFilterChanged}
              />
            }>
            <Button
              viewType="icon"
              size="m"
              isPressed={Boolean(
                filterParams && filterParams[column.id]?.params.length > 0
              )}>
              <IconFilter />
            </Button>
          </SortAndFilterDropdownStyled>
        )}
        {!!pinnedDirection && (
          <Button
            size="xs"
            viewType="icon"
            isPressed={isPinned}
            style={{ background: "none" }}
            onClick={isPinned ? handleUnpin : handlePin}>
            <IconPin />
          </Button>
        )}
        {isContextMenu && contextMenu}
      </TableColumnTitleStyled>
      {description && (
        <ColumnDescriptionStyled>
          {_iconDescription} <P1 type="cygnus">{description}</P1>
        </ColumnDescriptionStyled>
      )}
    </TableColumnBaseStyled>
  );
};

export default React.memo(Column) as typeof Column;
