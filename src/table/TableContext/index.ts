import { createContext, useContext, Context, useState, useEffect } from "react";
import { Observable } from "./observable";
import { TableService } from "./tableService";

export const TableContext = createContext<TableService>(
  new TableService<any, string>()
);

export const useTableService = <TData, TValue = string>(): TableService<
  TData,
  TValue
> =>
  useContext<TableService<TData, TValue>>(
    TableContext as Context<TableService<TData, TValue>>
  );

export function useObservable<T>(observable: Observable<T>): T {
  const [val, setVal] = useState(observable.get());

  // Pulls the current value in case it changed before the subscription was
  // established, then subscribes to future updates.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setVal(observable.get());
    return observable.subscribe(setVal);
  }, [observable]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return val;
}
