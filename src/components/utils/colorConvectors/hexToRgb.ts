import { RGB } from "./types";

export const hexToRgb = (c: string): RGB | null => {
  c.toUpperCase();
  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(c);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};
