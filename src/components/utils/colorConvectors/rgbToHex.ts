import { RGB } from "./types";

export const rgbToHex = ({ r, g, b }: RGB): string => {
  const hex = [
    componentToHex(Math.round(r).toString(16)),
    componentToHex(Math.round(g).toString(16)),
    componentToHex(Math.round(b).toString(16))
  ];

  return "#" + hex.join("");
};

const componentToHex = (c: string): string =>
  c.length === 1 ? "0" + c : "" + c;
