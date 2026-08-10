import type { TListenerObservable, TUnsubscriberObservable } from "./types";

export class Observable<T> {
  private _listeners: TListenerObservable<T>[] = [];

  constructor(private _val: T) {}

  get(): T {
    return this._val;
  }

  set(val: T): void {
    if (this._val !== val) {
      this._val = val;
      this._listeners.forEach((listener) => listener(val));
    }
  }

  subscribe(listener: TListenerObservable<T>): TUnsubscriberObservable {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }
}
