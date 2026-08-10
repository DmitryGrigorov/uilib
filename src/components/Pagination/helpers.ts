export const fillArray = (total: number, startFrom: number): number[] =>
  total <= 0
    ? []
    : new Array(Math.floor(total)).fill(1).map((e, i) => e * i + startFrom);
