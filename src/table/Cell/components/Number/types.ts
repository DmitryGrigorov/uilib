import { IRowNode, TColumn } from "../../../types";

export interface INumberProps<TValue = number, TData = any> {
  value: TValue;
  node: IRowNode<TData>;
  column: TColumn<TData, TValue>;
  data: TData;
  isEditable?: boolean;
  onCellValueChanged?: (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ) => void;
  onCellEditingStarted?: (value: TValue, event: Event) => void;
  onCellEditingStopped?: (
    oldValue: TValue,
    newValue: TValue,
    event: Event
  ) => void;
  onRowEditingStarted?: (event: Event) => void;
  onRowEditingStopped?: (event: Event) => void;
  cellIcon?: JSX.Element;
}
