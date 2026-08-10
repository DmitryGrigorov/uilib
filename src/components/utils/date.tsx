export const formatISO8601ToDate = (date: string): Date => {
  const [day, month, year] = date.split(".").map((time) => parseInt(time, 10));

  return new Date(year, month - 1, day);
};

export const ISO8601 = "dd.mm.yyyy";

export const isEqualDates = (firstDate: Date, secondDate: Date): boolean =>
  !(firstDate > secondDate) && !(firstDate < secondDate);
