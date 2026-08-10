import { TValueObjectType } from "@dmitrygrigorov/components";
import { TColumn, IGetRowIdParams } from "./types";

// Validate and assign unique IDs to columns
export function checkUniqIdColumns<TData, TValue>(
  columns: TColumn<TData, TValue>[]
): TColumn<TData, TValue>[] {
  return columns.map((column, index) => {
    const uniqColumn = { ...column };
    if (!column.id) {
      uniqColumn.id = `${column.field}-${index + 1}`;
      return uniqColumn;
    }
    return uniqColumn;
  });
}

export function getRowUniqId<TData>({
  data,
  index,
  getRowId
}: {
  data: TData;
  index: number;
  getRowId?: (params: IGetRowIdParams<TData>) => string;
}): string {
  if (getRowId) {
    return getRowId({ data });
  }
  return `row-${index}-${JSON.stringify(data)}`;
}

export function setValueObject<
  D,
  P extends string,
  DV = TValueObjectType<D, P>
>(path: P, value: DV, object: D): D {
  let schema = { ...object } as Record<string, any>;
  const pList = path.split(".");
  const len = pList.length;

  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!schema[elem]) {
      schema[elem] = {};
      schema = schema[elem];
    }
  }
  schema[pList[len - 1]] = value;
  return schema as D;
}
