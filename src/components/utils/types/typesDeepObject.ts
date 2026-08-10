export type TValueObjectType<
  T,
  P extends string | TKeyObjectType<T>
> = T extends any
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends TKeyObjectType<T[K]>
        ? TValueObjectType<T[K], R>
        : never
      : K extends `${ArrayKey}`
        ? T extends ReadonlyArray<infer V>
          ? TValueObjectType<V, R & TKeyObjectType<V>>
          : never
        : never
    : P extends keyof T
      ? T[P]
      : P extends `${ArrayKey}`
        ? T extends ReadonlyArray<infer V>
          ? V
          : never
        : never
  : never;

export type Primitive =
  null | undefined | string | number | boolean | symbol | bigint;

type IsTuple<T extends ReadonlyArray<any>> = number extends T["length"]
  ? false
  : true;

type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

type ArrayKey = number;

type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${TKeyObjectType<V>}`;

export type TKeyObjectType<T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKey<T>]-?: PathImpl<K & string, T[K]>;
        }[TupleKey<T>]
      : `${ArrayKey}` | `${ArrayKey}.${TKeyObjectType<V>}`
    : {
        [K in keyof T]-?: PathImpl<K & string, T[K]>;
      }[keyof T];
