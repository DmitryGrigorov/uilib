import { formatISO8601ToDate, isEqualDates } from "../../utils/date";
import { monthsCalendar, localeTag } from "../locale";
import { ILocale, IDay, IMonth, IYear } from "../interfaces";

const CALENDAR_CELLS_COUNT = 42;
const YEARS_LIST_LENGTH = 9;
const ACTIVE_YEAR_INDEX = 4;

/**
 * Legacy internal "sort key" format (mm.dd.yyyy) kept for backward
 * compatibility: it is the exact shape existing consumers of the
 * `closeCalendar` callback already receive and assert on.
 */
export const formatDateKey = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${month}.${day}.${date.getFullYear()}`;
};

export const parseDateKey = (dateKey: string): Date => {
  const [month, day, year] = dateKey.split(".").map(Number);

  return new Date(year, month - 1, day);
};

/** Human-facing dd.mm.yyyy format used for the text input / setDateToInput. */
export const formatDisplayDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${day}.${month}.${date.getFullYear()}`;
};

export const parseDisplayDate = (date: string): Date =>
  formatISO8601ToDate(date);

export const getDaysInMonth = (year: number, month: number): number =>
  new Date(year, month + 1, 0).getDate();

export const isSameDay = (first: Date, second: Date): boolean =>
  isEqualDates(first, second);

/** Full, locale-aware date label for screen readers, e.g. "July 15, 2026". */
export const getAccessibleDateLabel = (date: Date, locale: ILocale): string =>
  new Intl.DateTimeFormat(localeTag[locale], {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);

/**
 * Index (0-6) of the column the 1st of the month falls into.
 * Non-"en" locales render Monday-first weeks, "en" renders Sunday-first.
 */
export const getWeekdayOfFirstDay = (
  year: number,
  month: number,
  locale: ILocale
): number => {
  const weekday = new Date(year, month, 1).getDay();

  if (locale === "en") {
    return weekday;
  }

  return weekday === 0 ? 6 : weekday - 1;
};

const parseBoundary = (date?: string): Date | undefined =>
  date ? parseDisplayDate(date) : undefined;

export const isDateDisabled = (
  date: Date,
  minDate?: string,
  maxDate?: string
): boolean => {
  const min = parseBoundary(minDate);
  const max = parseBoundary(maxDate);

  return (!!min && date < min) || (!!max && date > max);
};

/** Clamp a day-of-month to whatever the target month actually has. */
export const clampDayToMonth = (
  day: number,
  year: number,
  month: number
): number => Math.min(day, getDaysInMonth(year, month));

interface IDateRangeBoundaries {
  minMonth: number;
  maxMonth: number;
}

export const getAvailableMonthRange = (
  year: number,
  minDate?: string,
  maxDate?: string
): IDateRangeBoundaries => {
  const min = parseBoundary(minDate);
  const max = parseBoundary(maxDate);
  const minMonth = min && min.getFullYear() === year ? min.getMonth() : 0;
  const maxMonth = max && max.getFullYear() === year ? max.getMonth() : 11;

  return { minMonth, maxMonth };
};

export const buildMonthList = (
  locale: ILocale,
  year: number,
  activeMonth: number,
  minDate?: string,
  maxDate?: string
): IMonth[] => {
  const { minMonth, maxMonth } = getAvailableMonthRange(year, minDate, maxDate);

  return monthsCalendar[locale].map((name: string, index: number) => ({
    id: index,
    name,
    isActive: index === activeMonth,
    isDisabled: index < minMonth || index > maxMonth
  }));
};

export interface IYearsList {
  years: IYear[];
  rangeEnd: string;
}

export const buildYearsList = (
  activeYear: number,
  minDate?: string,
  maxDate?: string
): IYearsList => {
  const min = parseBoundary(minDate);
  const max = parseBoundary(maxDate);
  const minYear = min?.getFullYear();
  const maxYear = max?.getFullYear();

  const years = Array.from({ length: YEARS_LIST_LENGTH }, (_, index) => {
    const year = activeYear + index - ACTIVE_YEAR_INDEX;

    return {
      id: index + 1,
      name: String(year),
      isActive: index === ACTIVE_YEAR_INDEX,
      isDisabled:
        (typeof minYear === "number" && year < minYear) ||
        (typeof maxYear === "number" && year > maxYear)
    };
  });

  return { years, rangeEnd: years[years.length - 2].name };
};

interface INormalizedRange {
  start: Date | null;
  end: Date | null;
}

const normalizeChosenRange = (
  chosenRange: string[] | null
): INormalizedRange => {
  if (!chosenRange || chosenRange.length < 1) {
    return { start: null, end: null };
  }

  const [firstKey, secondKey] = chosenRange;
  const first = parseDateKey(firstKey);
  const second = secondKey ? parseDateKey(secondKey) : null;

  if (second && first > second) {
    return { start: second, end: first };
  }

  return { start: first, end: second };
};

export interface IBuildMonthGridParams {
  year: number;
  month: number;
  locale: ILocale;
  chosenDate: string | null;
  chosenRange: string[] | null;
  minDate?: string;
  maxDate?: string;
}

export const buildMonthGrid = ({
  year,
  month,
  locale,
  chosenDate,
  chosenRange,
  minDate,
  maxDate
}: IBuildMonthGridParams): IDay[] => {
  const weekdayOfFirstDay = getWeekdayOfFirstDay(year, month, locale);
  const daysInCurrentMonth = getDaysInMonth(year, month);

  const previousMonth = month === 0 ? 11 : month - 1;
  const previousMonthYear = month === 0 ? year - 1 : year;
  const daysInPreviousMonth = getDaysInMonth(previousMonthYear, previousMonth);

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  const today = new Date();
  const { start: rangeStart, end: rangeEnd } =
    normalizeChosenRange(chosenRange);

  return Array.from({ length: CALENDAR_CELLS_COUNT }, (_, index): IDay => {
    let day: number;
    let date: Date;
    let isPrevMonth = false;
    let isNextMonth = false;

    if (index < weekdayOfFirstDay) {
      day = daysInPreviousMonth - weekdayOfFirstDay + index + 1;
      date = new Date(previousMonthYear, previousMonth, day);
      isPrevMonth = true;
    } else if (index < weekdayOfFirstDay + daysInCurrentMonth) {
      day = index - weekdayOfFirstDay + 1;
      date = new Date(year, month, day);
    } else {
      day = index - (weekdayOfFirstDay + daysInCurrentMonth) + 1;
      date = new Date(nextMonthYear, nextMonth, day);
      isNextMonth = true;
    }

    const dateKey = formatDateKey(date);
    const isActive = chosenRange ? false : chosenDate === dateKey;
    const isInRange = !!(
      rangeStart &&
      rangeEnd &&
      date > rangeStart &&
      date < rangeEnd
    );
    const isRangeStart = !!(rangeStart && isSameDay(date, rangeStart));
    const isRangeEnd = !!(rangeEnd && isSameDay(date, rangeEnd));

    return {
      id: index,
      day,
      date: dateKey,
      dateValue: date,
      isActive,
      isDisabled: isDateDisabled(date, minDate, maxDate),
      isToday: isSameDay(date, today),
      isInRange,
      isRangeStart,
      isRangeEnd,
      isPrevMonth,
      isNextMonth
    };
  });
};
