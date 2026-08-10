export const defineResponsibleWidth = (
  width?: string | number
): string | number => {
  if (typeof width === "number") {
    return `width: ${Math.floor(width)}px;`;
  }
  if (typeof width === "string" && width.length > 0) {
    return Number(width)
      ? `width: ${parseInt(width, 10)}px;`
      : `width: ${width};`;
  }
  return "width: 100%;";
};

export const defineResponsibleHeight = (
  height?: string | number
): string | number | null => {
  if (typeof height === "number") {
    return `height: ${Math.floor(height)}px;`;
  }
  if (typeof height === "string" && height.length > 0) {
    return Number(height)
      ? `height: ${parseInt(height, 10)}px;`
      : `height: ${height};`;
  }
  return null;
};
