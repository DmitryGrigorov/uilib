import { IRowNode, TColumn } from "../../../types";
export interface BasicCellProps<TData, TValue = string | JSX.Element> {
  value: TValue;
  isEditable?: boolean;
  onCellValueChanged?: (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ) => void; // The cell value changed
  onCellEditingStarted?: (value: TValue, event: Event) => void;
  onCellEditingStopped?: (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ) => void;
  onRowEditingStarted?: (event: Event) => void;
  onRowEditingStopped?: (event: Event) => void;
  node: IRowNode<TData>;
  data: TData;
  column: TColumn<TData, TValue>;
  width?: string;
  isTooltip?: boolean;
  valueFormatter: string;
  cellIcon?: JSX.Element;
}
