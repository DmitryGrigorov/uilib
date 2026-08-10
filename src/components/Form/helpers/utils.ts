export const deleteValueObject = <D, P extends string>(data: D, path: P): D => {
  const [key, ...keys] = path.split(".");

  const arrayIndexMatch = key.match(/(.*?)\[(\d+)]/);
  if (arrayIndexMatch) {
    const [_, arrayKey, index] = arrayIndexMatch;
    const indexNumber = parseInt(index, 10);
    if (isNaN(indexNumber)) {
      throw new Error(`Incorrect array index: ${index}`);
    }
    const arr = Array.isArray((data as any)?.[arrayKey])
      ? [...(data as any)[arrayKey]]
      : [];

    if (keys.length === 0) {
      arr.splice(indexNumber, 1);
      return {
        ...data,
        [arrayKey]: arr.length > 0 ? arr : []
      };
    } else {
      arr[indexNumber] = deleteValueObject(
        arr[indexNumber] !== undefined ? arr[indexNumber] : {},
        keys.join(".")
      );

      return {
        ...data,
        [arrayKey]: arr
      };
    }
  }

  if (keys.length === 0) {
    const newData = { ...data };
    delete (newData as any)[key];

    return Object.keys(newData as object).length > 0 ? newData : ({} as D);
  }

  const updatedData = deleteValueObject(
    (data as any)[key] !== undefined ? (data as any)[key] : {},
    keys.join(".")
  );

  return {
    ...data,
    [key]: updatedData
  };
};
