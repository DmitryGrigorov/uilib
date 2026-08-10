import { TOnChangePinnedColumn, ISelectionChangedEvent } from "../types";

export interface ITableStateCallbacks<TData, TValue> {
  onChangePinnedColumn?: TOnChangePinnedColumn<TData, TValue>;
  onSelectionChanged?: (event: ISelectionChangedEvent<TData>) => void;
}

export type TListenerObservable<T> = (val: T) => void;
export type TUnsubscriberObservable = () => void;
