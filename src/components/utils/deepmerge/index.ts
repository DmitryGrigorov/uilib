const isObject = <I>(item: I): boolean =>
  item && typeof item === "object" && !Array.isArray(item);

const deepmerge = <T, S>(
  target: T,
  source: S,
  options = { clone: true }
): T => {
  const output: Record<string, unknown> = options.clone
    ? { ...(target as Record<string, unknown>) }
    : (target as Record<string, unknown>);
  const sourceRecord = source as Record<string, unknown>;
  const targetRecord = target as Record<string, unknown>;

  if (isObject(target) && isObject(source)) {
    Object.keys(sourceRecord).forEach((key) => {
      if (key === "__proto__") {
        return;
      }

      if (isObject(sourceRecord[key]) && key in targetRecord) {
        output[key] = deepmerge(targetRecord[key], sourceRecord[key], options);
      } else {
        output[key] = sourceRecord[key];
      }
    });
  }

  return output as T;
};

export default deepmerge;
