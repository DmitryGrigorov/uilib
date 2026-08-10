import React, { createContext } from "react";
import { action, makeObservable, observable, computed } from "mobx";

export type TVariantType =
  | "select"
  | "boolean"
  | "text"
  | "date"
  | "date-time"
  | "number"
  | "segments"
  | "color";

export type TOptionColor = {
  color: string;
  value: string;
};

type TValue<T extends TVariantType, O extends string | number> =
  | (T extends "boolean"
      ? boolean
      : T extends "date" | "date-time"
        ? Date
        : T extends "number"
          ? number
          : T extends "select"
            ? O
            : T extends "segments"
              ? O
              : T extends "color"
                ? TOptionColor
                : string)
  | undefined;

export interface IVariant<
  T extends TVariantType = TVariantType,
  O extends string | number = any
> {
  type: T;
  name: string;
  title?: string;
  value: TValue<T, O>;
  options?: O[] | readonly O[];
  isActive: boolean;
}

interface IVariantList {
  [key: string]: IVariant;
}

class VariantStore {
  _variants: IVariantList | null = null;

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      _variants: observable,
      variants: computed
    });
  }

  public getValue<T extends TVariantType, O extends string | number = string>(
    name: string
  ): TValue<T, O> {
    if (this.variants) {
      return (this.variants[name]?.value as TValue<T, O>) || undefined;
    }
    return undefined;
  }

  public setVariantBoolean = action(
    (
      name: string,
      value?: boolean,
      isActive = true,
      title?: string
    ): TValue<"boolean", string> => {
      this._variants = {
        ...this._variants,
        [name]: {
          type: "boolean",
          name,
          value,
          isActive,
          title
        }
      };
      return value || false;
    }
  );

  public setVariantColor = action(
    (
      name: string,
      options: TOptionColor[],
      value: TOptionColor | undefined = undefined,
      isActive = true,
      title?: string
    ): void => {
      this._variants = {
        ...this._variants,
        [name]: {
          type: "color",
          name,
          value,
          options,
          isActive,
          title
        }
      };
    }
  );

  public get variants(): IVariantList | null {
    return this._variants;
  }

  public get variantsNames(): string[] {
    return Object.keys(this._variants || {});
  }

  public get variantsNamesBoolean(): string[] {
    return Object.values(this._variants || {})
      .filter(({ type }) => type === "boolean")
      .map((value) => value.name);
  }

  public get variantsBooleanIsActive(): IVariant[] {
    return Object.values(this._variants || {}).filter(
      ({ type, isActive }) => type === "boolean" && isActive
    );
  }

  public get variantsNamesNotBoolean(): string[] {
    return Object.values(this._variants || {})
      .filter(({ type }) => type !== "boolean")
      .map((value) => value.name);
  }

  public setVariantValue = action((variant: IVariant): void => {
    if (this._variants) {
      this._variants[variant.name] = {
        ...variant
      };
    }
  });

  public removeVariants = action((): void => {
    this._variants = null;
  });

  public setVariantSelect = action(
    <O extends string | number>(
      name: string,
      options: O[],
      value: O | undefined = undefined,
      isActive = true,
      title?: string
    ): void => {
      this._variants = {
        ...this._variants,
        [name]: {
          type: "select",
          name,
          value,
          options,
          isActive,
          title
        }
      };
    }
  );

  public setVariantSegments = action(
    <O extends string | number>(
      name: string,
      options: O[],
      value: O | undefined = undefined,
      isActive = true,
      title?: string
    ): void => {
      this._variants = {
        ...this._variants,
        [name]: {
          type: "segments",
          name,
          value,
          options,
          isActive,
          title
        }
      };
    }
  );

  public setVariantActive = action((name: string, isActive = true): void => {
    if (this.variants) {
      const variant = this.variants[name];
      this._variants = {
        ...this._variants,
        [name]: {
          ...variant,
          isActive
        }
      };
    }
  });
}

export const VariantsContext = createContext<VariantStore | null>(null);

export const useVariantStore = (): VariantStore => {
  const store = React.useContext(VariantsContext) as VariantStore;

  if (!store) {
    throw new Error(
      "useVariantStore() must be used within <VariantsContext.Provider />"
    );
  }

  return store;
};

export const VariantStoreInit = new VariantStore();
