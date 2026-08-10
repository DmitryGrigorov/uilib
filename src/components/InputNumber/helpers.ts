export const parseValue = (
  value: number | string | undefined
): number | undefined => {
  if (typeof value === "string") {
    if (value.trim().length === 0) {
      return undefined;
    }
    const parsedValue = Number(value.trim());
    if (isNaN(parsedValue)) {
      return undefined;
    } else {
      return parsedValue;
    }
  }
  return value;
};

export const verifyMinMax = (
  value: number | undefined,
  min: number | undefined,
  max: number | undefined
): boolean =>
  (value ?? 0) >= (min ?? Number.NEGATIVE_INFINITY) &&
  (value ?? 0) <= (max ?? Number.POSITIVE_INFINITY);
