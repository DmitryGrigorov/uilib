import { TValueObjectType, TKeyObjectType } from "../types/typesDeepObject";

const setValueObject = <
  D,
  P extends TKeyObjectType<D>,
  DV = TValueObjectType<D, P>
>(
  data: D,
  path: P,
  value: DV
): D => {
  const [key, ...keys] = path.split(".");
  const arrayIndexMatch = key.match(/(.*?)\[(\d+)]/);

  if (arrayIndexMatch) {
    const [_, arrayKey, index] = arrayIndexMatch;
    const arr = Array.isArray((data as any)[arrayKey])
      ? [...(data as any)[arrayKey]]
      : [];

    if (keys.length === 0) {
      arr[parseInt(index, 10)] = value;
    } else {
      arr[parseInt(index, 10)] = setValueObject(
        arr[parseInt(index, 10)] !== undefined ? arr[parseInt(index, 10)] : {},
        keys.join("."),
        value
      );
    }

    return {
      ...data,
      [arrayKey]: arr
    };
  }

  if (keys.length === 0) {
    return {
      ...data,
      [key]: value
    };
  }

  return {
    ...data,
    [key]: setValueObject(
      (data as any)[key] !== undefined ? (data as any)[key] : ({} as any),
      keys.join("."),
      value
    )
  };
};

export default setValueObject;
