import {
  CSSProperties,
  FC,
  FunctionComponent,
  MouseEvent,
  ReactElement,
  JSX
} from "react";
import {
  IDropdownItem,
  TCompStatus,
  TDropdownOnClick,
  TProgressBarVariant,
  TAvatarStatus,
  TColorTypeStatus,
  TKeyObjectType
} from "@dmitrygrigorov/components";
import { TRatingSize, TRatingViewType } from "./Cell/components/Rating/types";

export type TGetRowId<TData> = (params: IGetRowIdParams<TData>) => string;

export interface ITableProps<TData = any, TValue = string>
  extends
    ITablePagination,
    ITableSearch<TData, TValue>,
    ITableCallbacksEditable<TData, TValue>,
    ITableHeader,
    ITableEvents<TData>,
    ITablePinnedRows<TData> {
  className?: string; // Shared table class
  tableContentClassName?: string;
  style?: CSSProperties;
  rowClassName?: string; // Shared row class
  columns: TColumn<TData, TValue>[];
  defaultColumn?: IColumnDefault<TData, TValue>;
  rowData: TData[]; // Data to display
  isLoading?: boolean;
  size?: TTableSize;
  isDividerRow?: boolean; // Whether to show dividers between rows
  getRowId?: TGetRowId<TData>;
  getRowClassName?: TGetRowClassNameFunc<TData>;
  rowStyle?: CSSProperties;
  noDataComponent?: JSX.Element;
  getContextMenu?: TGetColumnMenuItems<TData, TValue>;
  rowModel?: TRowModel; // Row data model
  isDetailRow?: boolean; // Enables detailed row information
  detailRowOptions?: IDetailRowOptions<TData, TValue>; // Detail row display options
  detailRowRenderer?: FC<IRowDetailRendererParams<TData, TValue>>;
  viewTypeDetail?: TDetailType; // Expanded data display mode
  isHiddenColumnHeader?: boolean;
  onChangeSort?: TOnChangeSortTable;
  footerText?: string;
  footerContent?: ReactElement;
  isResize?: boolean;
  isRowSelectable?: (node: IRowNode<TData>) => boolean;
  isHeaderCheckboxSelection?: boolean;
  onRowSelected?: (event: IRowSelectedEvent<TData>) => void;
  onSelectionChanged?: (event: ISelectionChangedEvent<TData>) => void;
  isCheckboxSelection?: boolean;
  onResizeChanged?: (isFullScreen: boolean) => void;
  onFilterChanged?: TFilterChangedFunc<TData, TValue>;
  footerClassName?: string;
  onChangePinnedColumn?: TOnChangePinnedColumn<TData, TValue>;
}

export const TABLE_POSITION_SEARCH = ["header", "footer"] as const;

export type TTablePositionSearch = (typeof TABLE_POSITION_SEARCH)[number];

export interface ITableSearchParams<TData, TValue> {
  value: string;
  column?: TColumn<TData, TValue>;
}

export interface ITableSearch<TData, TValue> {
  search?: string;
  isSearch?: boolean;
  onSearch?: (params: ITableSearchParams<TData, TValue>) => void;
  positionSearch?: TTablePositionSearch;
  placeholderSearch?: string;
}

export interface ITableCallbacksEditable<TData, TValue> {
  onCellValueChanged?: (event: ICellValueChangedEvent<TData, TValue>) => void; // The cell value changed
  onCellEditingStarted?: (
    event: ICellEditingStartedEvent<TData, TValue>
  ) => void; // Cell editing started
  onCellEditingStopped?: (
    event: ICellEditingStoppedEvent<TData, TValue>
  ) => void; // Cell editing stopped
  onRowEditingStarted?: (event: IRowEditingStartedEvent<TData>) => void; // Row editing started; fires once for all values in the row
  onRowEditingStopped?: (event: IRowEditingStoppedEvent<TData>) => void; // Row editing stopped; fires once for the entire row
}

export interface ITablePagination {
  isPagination?: boolean;
  isPaginationRowPerPage?: boolean;
  paginationPageSize?: number; // Number of displayed rows
  paginationCounts?: Array<number>; // Values available in the rows-per-page selector
  onPaginationChange?: (params: IPaginationChangeParams) => void;
  paginationAllRowCount?: number; // Total item count used when rowModel=server
  paginationCurrentPage?: number; // Initial pagination page
  isFillPagination?: boolean;
}

export interface ITablePinnedRows<TData> {
  isPinningRows?: boolean;
  pinnedRowData?: TData[];
  onChangePinnedRowData?: (rows: TData[]) => void;
}

export interface ITablePinnedRowsApi<TData> {
  setPinnedRowData: (rows?: TData[]) => void;
  getPinnedRowCount: () => number;
  getPinnedRow: (index: number) => IRowNode<TData> | undefined;
}

export interface ITablePaginationApi {
  paginationGetPageSize?: () => number; // Returns the number of rows displayed per page
  paginationGetCurrentPage?: () => number; // Returns the current page number
  paginationGetTotalPages?: () => number; // Returns the total number of pages
  paginationGetRowCount?: () => number; // Returns the total number of rows
  paginationGoToPage?: (page: number) => void; // Goes to a page, or the last page when the requested page does not exist
  paginationGoToNextPage?: () => void; // Goes to the next page
  paginationGoToPreviousPage?: () => void; // Goes to the previous page
  paginationGoToFirstPage?: () => void; // Goes to the first page
  paginationGoToLastPage?: () => void; // Goes to the last page
}

export interface ITableSelectionApi<TData> {
  getSelectedNodes: () => IRowNode<TData>[];
  getSelectedRows: () => TData[];
  selectAll: () => void; // Selects every row regardless of filtering
  deselectAll: () => void; // Clears every selected row regardless of filtering
  selectAllFiltered: () => void; // Selects all filtered rows
  deselectAllFiltered: () => void; // Clears the selection from all filtered rows
  setNodesSelected: (params: {
    nodes: IRowNode<TData>[];
    newValue: boolean;
  }) => void; // Applies the specified selection state to all provided nodes
}

export interface IClassNameCellParams<TData = any, TValue = string> {
  value: TValue | null | undefined | string;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
}

export interface IColumnDefault<TData = any, TValue = string> {
  defaultSortName?: string;
  defaultFilterName?: string[];
  defaultSearch?: string;
  isSortable?: boolean; // Whether this column can be sorted
  isFilter?: boolean; // Whether this column can be filtered
  width?: number | string; // Column width; defaults to 100%
  className?: string; // Column-specific class
  pinnedDirection?: "left" | "right";
  isDefaultPinned?: boolean;
  cellRenderer?: FunctionComponent<ICellRendererParams<TData, TValue>>;
  cellRendererParams?: any;
  columnTypes?: TColumnType; // Column type
  isEditable?: boolean | TEditableCallback<TData, TValue>; // Whether the column is editable
  comparator?: TTableComparator<TData, TValue>;
  isResize?: boolean; // Whether the column can be resized
  dropdown?: JSX.Element; // TODO: revisit the dropdown element
  iconTitle?: JSX.Element;
  iconDescription?: JSX.Element;
  sortMenuItems?: ITableSortMenuItem[];
  filterMenuItems?: ITableFilterMenuItem[] | JSX.Element;
  filterFunc?: TFilterFunc<TData, TValue>;
  filterDebounceMs?: number;
  isSearch?: boolean;
  hintsSearch?: string[];
  classNameCell?:
    | ((params: IClassNameCellParams<TData, TValue>) => string | undefined)
    | string;
}

export type TColumnPinnedDirection = "left" | "right" | null | undefined;

export type TFilterFunc<TData, TValue> = (
  params: IFilterFuncParams<TData, TValue>
) => boolean;

export interface IFilterFuncParams<TData, TValue> {
  value: TValue;
  filterParams: string[];
  node: IRowNode<TData>;
}

export type TValueFormatterFunc<TData = any, TValue = any> = (
  params: IValueFormatterParams<TData, TValue>
) => string;

export type TValueGetterFunc<TData, TValue> = (
  params: IGetterValueParams<TData, TValue>
) => TValue;

export type TCellIcon<TData, TValue> =
  | ((params: ICellIconParams<TData, TValue>) => JSX.Element | undefined)
  | JSX.Element;

export interface IColumnBasic<TData, TValue> extends IColumnDefault<
  TData,
  TValue
> {
  id?: string;
  columnTypes?: "basic";
  field: TKeyObjectType<TData>; // Data-source field used to retrieve the value
  title?: string; // Column title
  description?: string; // Column description
  isHidden?: boolean; // Whether the column is hidden
  valueFormatter?: TValueFormatterFunc<TData, TValue>;
  valueGetter?: TValueGetterFunc<TData, TValue>;
  cellIcon?: TCellIcon<TData, TValue>;
  cellTrailContent?: TCellIcon<TData, TValue>;
  isContextMenu?: boolean;
  getContextMenu?: TGetColumnMenuItems<TData, TValue>;
  onClickContextMenuItem?: TDropdownOnClick<string | IDropdownItem>;
  valueSetter?: TValueSetterFunc<TData, TValue>;
}

// Cell types extend IColumnBasic

export type IValueFormatterParams<TData, TValue = string> = {
  value: TValue | null | undefined | string;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export interface ICellIconParams<TData, TValue = string> {
  value: TValue | null | undefined | string;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
}

export interface IColumnStatus<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "status";
  cellParamsGetter: TCellParamsStatusGetter<TData, TValue> | TCellParamsStatus;
}

export interface IColumnRating<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "rating"; // The default column type is basic
  cellParamsGetter?: TCellParamsRatingGetter<TData, TValue> | TCellParamsRating; // Resolves parameters for the Rating component
}

interface IColumnTags<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "tags"; // The default column type is basic
  cellParamsGetter?: TCellParamsTagsGetter<TData, TValue> | TCellParamsTags;
}

interface IColumnNumber<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes?: "number"; // The default column type is basic
}

export interface IColumnImage<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "image"; // The default column type is basic
}

interface IColumnProgress<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "progress"; // The default column type is basic
  cellParamsGetter?:
    TCellParamsProgressGetter<TData, TValue> | TCellParamsProgress;
}

interface IColumnBoolean<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes?: "boolean"; // The default column type is basic
}

export interface IColumnAvatar<TData, TValue> extends Omit<
  IColumnBasic<TData, TValue>,
  "columnTypes"
> {
  columnTypes: "avatar"; // The default column type is basic
  cellParamsGetter: TCellParamsAvatarGetter<TData, TValue>; // Resolves component parameters
}

export type TColumn<TData = any, TValue = string> =
  | IColumnStatus<TData, TValue>
  | IColumnNumber<TData, TValue>
  | IColumnTags<TData, TValue>
  | IColumnBasic<TData, TValue>
  | IColumnImage<TData, TValue>
  | IColumnProgress<TData, TValue>
  | IColumnRating<TData, TValue>
  | IColumnBoolean<TData, TValue>
  | IColumnAvatar<TData, TValue>;

export type TLocalColumn<TData = any, TValue = string> = {
  isPinned?: boolean;
  id: string;
} & TColumn<TData, TValue>;

export type TCellParamsRating = {
  viewType: TRatingViewType;
  sizeRating: TRatingSize;
};

export type TCellParamsStatus = {
  status?: TCompStatus;
  leadIcon?: JSX.Element;
  trailIcon?: JSX.Element;
  isFilled?: boolean;
  colorType?: TColorTypeStatus;
};

export type TCellParamsTags = {
  leadIcon?: JSX.Element;
};

export type TCellParamsNumber = {
  icon?: JSX.Element | string;
  isEdit?: boolean;
};

export type TCellParamsProgress = {
  label?: string;
  variant: TProgressBarVariant;
  isText?: boolean;
};

export type TCellParamsTableAvatar = {
  image?: string;
  text?: string;
  icon?: JSX.Element;
  status?: TAvatarStatus;
  title?: string;
  description?: string;
};

export type TCellStatusParamsGetterParams<TData = any, TValue = string> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export type TCellNumberParamsGetterParams<TData = any, TValue = string> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export type TCellTagsParamsGetterParams<TData = any, TValue = string[]> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export type TCellRatingParamsGetterParams<TData, TValue> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

type TCellProgressParamsGetterParams<TData, TValue> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export type TCellAvatarParamsGetterParams<TData, TValue> = {
  value: TValue | null | undefined;
  node: IRowNode<TData> | null;
  data: TData | undefined;
  column: TColumn<TData, TValue>;
};

export type TCellParamsStatusGetter<TData, TValue> = (
  params: TCellStatusParamsGetterParams<TData, TValue>
) => TCellParamsStatus;

export type TCellParamsTagsGetter<TData, TValue> = (
  params: TCellTagsParamsGetterParams<TData, TValue>
) => TCellParamsTags;

type TCellParamsRatingGetter<TData, TValue> = (
  params: TCellRatingParamsGetterParams<TData, TValue>
) => TCellParamsRating;

type TCellParamsProgressGetter<TData, TValue> = (
  params: TCellProgressParamsGetterParams<TData, TValue>
) => TCellParamsProgress;

type TCellParamsAvatarGetter<TData, TValue> = (
  params: TCellAvatarParamsGetterParams<TData, TValue>
) => TCellParamsTableAvatar;

export type TGetColumnMenuItems<TData = any, TValue = string> = (
  params: IGetContextMenuColumnItemsParams<TData, TValue>
) => (string | IDropdownItem)[] | JSX.Element;

export interface IGetContextMenuColumnItemsParams<
  TData = any,
  TValue = string
> {
  column: TLocalColumn<TData, TValue> | null;
}

export interface IDetailRowOptions<TData, TValue> {
  columns: Array<{
    field: TKeyObjectType<TData>;
    title?: string;
    width?: number | string;
  }>;
  getDetailRowData: (params: getDetailRowDataParams<TData, TValue>) => TData[];
  classNameTable?: string;
  isHiddenColumnHeader?: boolean;
}

export interface getDetailRowDataParams<TData, TValue> {
  data: TData;
  node?: IRowNode<TData>;
  columns?: TLocalColumn<TData, TValue>[];
}

export interface IRowDetailRendererParams<TData, TValue> {
  data: TData; // Row data
  node?: IRowNode<TData>;
  columns?: TLocalColumn<TData, TValue>[]; // Column data
}

export const DETAIL_TYPES = ["info", "table"] as const;

export type TDetailType = (typeof DETAIL_TYPES)[number];

export const COLUMN_TYPES = [
  "basic",
  "checkbox",
  "number",
  "icon",
  "rating",
  "avatar",
  "status",
  "progress",
  "text",
  "tags",
  "boolean",
  "actions",
  "img"
];

export type TColumnType = (typeof COLUMN_TYPES)[number];

export interface IGetterValueParams<TData, TValue = string> {
  node?: IRowNode<TData>;
  data: TData;
  column: TColumn<TData, TValue>;
}

export interface IRowNode<TData> {
  setSelection: (newValue: boolean) => void; // Selects or deselects the row
  isSelected: boolean; // True when the row is selected
  data: TData;
  id: string;
  isRowPinned: boolean; // Whether the row is pinned
  isDetail: boolean; // Whether the row has detail content
  height: number;
  setRowPinned: (newValue: boolean) => void; // Updates the row's pinned state
  rowIndex: number;
}

export const TABLE_SIZE = ["l", "m", "s"];

export type TTableSize = (typeof TABLE_SIZE)[number];

export interface IGetRowIdParams<TData> {
  data: TData;
}

export interface ICellRendererParams<TData = any, TValue = any> {
  value: TValue;
  data: TData;
  node: IRowNode<TData>;
  column: TColumn<TData, TValue>;
  rowIndex: number;
  size: TTableSize;
  cellRendererParams: any;
}

export interface IRowClassParams<TData> {
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
}

export type TGetRowClassNameFunc<TData> = (
  params: IRowClassParams<TData>
) => string | undefined;

export const ROW_MODEL = ["client", "server"] as const;

export type TRowModel = (typeof ROW_MODEL)[number];

export interface IPaginationChangeParams {
  newPage: number;
  rowPerPage: number;
}
export interface ITableStateSortParams<TData = any> {
  field: TKeyObjectType<TData>;
  name: string;
}

export type ITableStateFilterParams<TData, TValue> = Record<
  string,
  {
    column: TLocalColumn<TData, TValue>;
    params: string[];
  }
>;

export type TTableComparator<TData, TValue = string> = (
  valueA: TValue,
  valueB: TValue,
  nameSort: string,
  nodeA: IRowNode<TData> | undefined,
  nodeB: IRowNode<TData> | undefined
) => number;

export interface ITableSortMenuItem {
  title?: string;
  options: ITableSortMenuOption[];
}

export interface ITableSortMenuOption {
  title: string;
  nameSort: string;
}

export interface ITableFilterMenuItem {
  title?: string;
  options: ITableFilterMenuOptions[];
}

export interface ITableFilterMenuOptions {
  title: string;
  name: string;
}

export type TOnChangeSortTable = (nameSort: string | null) => void;

export type TEditableCallback<TData, TValue> = (
  params: IEditableCallbackParams<TData, TValue>
) => boolean;

export interface IEditableCallbackParams<TData, TValue> {
  node: IRowNode<TData>;
  data: TData;
  column: TColumn<TData, TValue>;
}

export interface ICellValueChangedEvent<TData, TValue> {
  oldValue: TValue;
  newValue: TValue;
  column: TColumn<TData, TValue>;
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  event: Event;
}

export interface ICellEditingStartedEvent<TData, TValue> {
  column: TColumn<TData, TValue>;
  value: TValue;
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  event: Event;
}

export interface ICellEditingStoppedEvent<TData, TValue> {
  oldValue: TValue;
  newValue: TValue;
  column: TColumn<TData, TValue>;
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  event: Event;
}

export interface IRowEditingStartedEvent<TData> {
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  event: Event;
}

export interface IRowSelectedEvent<TData> {
  data?: TData;
  node: IRowNode<TData>;
  rowIndex: number | null;
  rowPinned: TRowPinnedType;
  event?: Event | null;
  eventPath?: EventTarget[];
  isSelected: boolean;
}

export interface IRowEditingStoppedEvent<TData> {
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  event: Event;
}

export interface IValueSetterParams<TData = any, TValue = any> {
  oldValue: TValue;
  newValue: TValue;
  rowNode: IRowNode<TData>;
  data: TData;
  column: TColumn<TData, TValue>;
}

export type TValueSetterFunc<TData = any, TValue = any> = (
  params: IValueSetterParams<TData, TValue>
) => boolean;

export type TFilterChangedFunc<TData = any, TValue = string> = (
  event: IFilterChangeFuncEvent<TData, TValue>[]
) => void;

export interface IFilterChangeFuncEvent<TData = any, TValue = string> {
  column: TColumn<TData, TValue>;
  params: string[];
}

export interface ITableHeader {
  title?: string | JSX.Element;
  isMobile?: boolean;
  description?: string | JSX.Element;
  onClickAdditionalButton?: () => void;
  onUpdate?: () => void;
  headerContent?: JSX.Element;
  isRefreshable?: boolean;
  additionalButton?: JSX.Element;
  isDisabledAdditionalButton?: boolean;
}
export type TRowDataExternal<TData, TValue> = TData & {
  computedData: Record<TKeyObjectType<TData>, TValue>;
};

export interface ISelectionChangedEvent<TData> {
  rowsNodes: IRowNode<TData>[];
}

export interface ITableEvents<TData> {
  rowClicked?: (event: IRowClickedEvent<TData>) => void;
  rowDoubleClicked?: (event: IRowClickedEvent<TData>) => void;
  onRowMouseEnter?: (event: IRowMouseEvent<TData>) => void;
  onRowMouseLeave?: (event: IRowMouseEvent<TData>) => void;
}

export interface IRowMouseEvent<TData> {
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  rowPinned: TRowPinnedType;
  event?: MouseEvent | null;
  eventPath?: EventTarget[];
}

export interface IRowClickedEvent<TData> {
  data: TData;
  node: IRowNode<TData>;
  rowIndex: number;
  rowPinned: TRowPinnedType;
  event?: MouseEvent | null;
  eventPath?: EventTarget[];
}

export type TRowPinnedType = "top" | "bottom" | null | undefined;

export type TIsPinningColumn<TData = any, TValue = string> = (
  key: string | TColumn<TData, TValue>
) => boolean;
export type TSetColumnPinned<TData = any, TValue = string> = (
  key: string | TColumn<TData, TValue>,
  pinnedDirection: TColumnPinnedDirection
) => void;
export type TSetColumnsPinned<TData = any, TValue = string> = (
  keys: string[] | TColumn<TData, TValue>[],
  pinnedDirection: TColumnPinnedDirection
) => void;

export interface IColumnApi<TData = any, TValue = string> {
  isPinning: TIsPinningColumn<TData, TValue>;
  isPinningLeft: TIsPinningColumn<TData, TValue>;
  isPinningRight: TIsPinningColumn<TData, TValue>;
  setColumnPinned: TSetColumnPinned<TData, TValue>;
  setColumnsPinned: TSetColumnsPinned<TData, TValue>;
  getColumns: () => TColumn<TData>[];
  setColumns: (columns: TColumn<TData, TValue>[]) => void;
  setDefaultColumns: (defaultColumn: IColumnDefault<TData, TValue>) => void;
}

export type TOnChangePinnedColumn<TData = any, TValue = string> = (
  column: TColumn<TData, TValue>,
  params: { pinnedDirection: TColumnPinnedDirection; isPinned: boolean }
) => void;

export interface IRowApi<TData = any> {
  getRowNode: (id: string) => IRowNode<TData> | undefined;
  setRowData: (rowData: TData[]) => void;
}

export type TTableApi<TData = any> = ITablePaginationApi &
  ITablePinnedRowsApi<TData> &
  ITableSelectionApi<TData> &
  IRowApi<TData>;

export interface ITableApis<TData = any, TValue = string> {
  tableApi: TTableApi<TData>;
  columnApi: IColumnApi<TData, TValue>;
}
