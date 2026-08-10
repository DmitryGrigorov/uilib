import { useCallback, useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";

import { ICalendarProps, IDay, IMonth, IYear } from "../interfaces";
import { monthsCalendar } from "../locale";
import { datePattern } from "../constants";
import {
  buildMonthGrid,
  buildMonthList,
  buildYearsList,
  clampDayToMonth,
  formatDateKey,
  formatDisplayDate,
  parseDateKey,
  parseDisplayDate
} from "../utils/dateHelpers";

export interface IUseCalendarResult {
  currentMonthName: string;
  currentYear: number;
  yearRangeEnd: string;
  isMonthEditing: boolean;
  isYearEditing: boolean;
  setIsMonthEditing: (value: boolean) => void;
  setIsYearEditing: (value: boolean) => void;
  months: IMonth[];
  years: IYear[];
  days: IDay[];
  isRangeSubmitDisabled: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  selectMonth: (id: number) => void;
  selectYear: (year: number) => void;
  selectDay: (day: IDay, event?: MouseEvent) => void;
  confirmRangeSelection: () => void;
  cancelRangeSelection: () => void;
}

type TCalendarConfig = Pick<
  ICalendarProps,
  | "locale"
  | "isRangeMode"
  | "date"
  | "setDateToInput"
  | "closeCalendar"
  | "minDate"
  | "maxDate"
  | "id"
>;

/**
 * Owns all Calendar business state (navigation, month/year editing,
 * single/range date selection) so `Calendar.tsx` stays a thin, presentational
 * component. Derived data (months/years/days grids) is recomputed with
 * `useMemo` instead of mirrored into state via effects, removing the
 * cascading-effects pattern the previous implementation relied on.
 */
export const useCalendar = ({
  locale = "ru",
  isRangeMode = false,
  date = "",
  setDateToInput,
  closeCalendar,
  minDate,
  maxDate,
  id
}: TCalendarConfig): IUseCalendarResult => {
  const [viewDate, setViewDate] = useState<Date>(() => new Date());
  const [chosenDate, setChosenDate] = useState<string | null>(null);
  const [chosenRange, setChosenRange] = useState<string[] | null>(null);
  const [isMonthEditing, setIsMonthEditing] = useState(false);
  const [isYearEditing, setIsYearEditing] = useState(false);

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();
  const currentMonthName = monthsCalendar[locale][currentMonth];

  const months = useMemo(
    () => buildMonthList(locale, currentYear, currentMonth, minDate, maxDate),
    [locale, currentYear, currentMonth, minDate, maxDate]
  );

  const { years, rangeEnd: yearRangeEnd } = useMemo(
    () => buildYearsList(currentYear, minDate, maxDate),
    [currentYear, minDate, maxDate]
  );

  const days = useMemo(
    () =>
      buildMonthGrid({
        year: currentYear,
        month: currentMonth,
        locale,
        chosenDate,
        chosenRange,
        minDate,
        maxDate
      }),
    [
      currentYear,
      currentMonth,
      locale,
      chosenDate,
      chosenRange,
      minDate,
      maxDate
    ]
  );

  const isRangeSubmitDisabled = !(chosenRange && chosenRange.length === 2);

  const goToNext = useCallback((): void => {
    if (isYearEditing) {
      const maxYear = maxDate
        ? parseDisplayDate(maxDate).getFullYear()
        : undefined;
      const nextYear = currentYear + 9;
      const clampedYear = maxYear && nextYear > maxYear ? maxYear : nextYear;

      setViewDate(new Date(clampedYear, currentMonth, viewDate.getDate()));
      return;
    }

    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const day = clampDayToMonth(viewDate.getDate(), nextYear, nextMonth);

    setViewDate(new Date(nextYear, nextMonth, day));
  }, [isYearEditing, currentYear, currentMonth, viewDate, maxDate]);

  const goToPrevious = useCallback((): void => {
    if (isYearEditing) {
      const minYear = minDate
        ? parseDisplayDate(minDate).getFullYear()
        : undefined;
      const previousYear = currentYear - 9;
      const clampedYear =
        minYear && previousYear < minYear ? minYear : previousYear;

      setViewDate(new Date(clampedYear, currentMonth, viewDate.getDate()));
      return;
    }

    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const day = clampDayToMonth(
      viewDate.getDate(),
      previousYear,
      previousMonth
    );

    setViewDate(new Date(previousYear, previousMonth, day));
  }, [isYearEditing, currentYear, currentMonth, viewDate, minDate]);

  const selectMonth = useCallback(
    (monthId: number): void => {
      const day = clampDayToMonth(viewDate.getDate(), currentYear, monthId);

      setViewDate(new Date(currentYear, monthId, day));
      setIsMonthEditing(false);
    },
    [currentYear, viewDate]
  );

  const selectYear = useCallback(
    (year: number): void => {
      const day = clampDayToMonth(viewDate.getDate(), year, currentMonth);

      setViewDate(new Date(year, currentMonth, day));
      setIsYearEditing(false);
    },
    [currentMonth, viewDate]
  );

  const applySingleSelection = useCallback(
    (value: Date, event?: MouseEvent): void => {
      setChosenDate(formatDateKey(value));
      setDateToInput?.(formatDisplayDate(value), event, id);
    },
    [setDateToInput, id]
  );

  const applyRangeSelection = useCallback(
    (value: Date, event?: MouseEvent): void => {
      setChosenRange((current) => {
        if (current && current.length === 1) {
          const existing = parseDateKey(current[0]);

          return existing < value
            ? [current[0], formatDateKey(value)]
            : [formatDateKey(value), current[0]];
        }

        return [formatDateKey(value)];
      });
      setDateToInput?.(formatDisplayDate(value), event, id);
    },
    [setDateToInput, id]
  );

  const selectDay = useCallback(
    (day: IDay, event?: MouseEvent): void => {
      if (day.isDisabled || day.isActive || !day.dateValue) {
        return;
      }

      if (!isRangeMode && day.isPrevMonth) {
        goToPrevious();
        return;
      }

      if (!isRangeMode && day.isNextMonth) {
        goToNext();
        return;
      }

      if (isRangeMode) {
        applyRangeSelection(day.dateValue, event);
        return;
      }

      applySingleSelection(day.dateValue, event);
      closeCalendar?.(formatDateKey(day.dateValue));
    },
    [
      isRangeMode,
      goToPrevious,
      goToNext,
      applyRangeSelection,
      applySingleSelection,
      closeCalendar
    ]
  );

  const confirmRangeSelection = useCallback((): void => {
    if (isRangeSubmitDisabled) {
      return;
    }

    closeCalendar?.(chosenRange);
  }, [isRangeSubmitDisabled, closeCalendar, chosenRange]);

  const cancelRangeSelection = useCallback((): void => {
    if (isRangeSubmitDisabled) {
      return;
    }

    // Bug fix vs. the previous implementation: "Cancel" used to invoke the
    // exact same handler as "Submit", so it never actually cleared the
    // selection. It now resets the range and reports cancellation as `null`.
    setChosenRange(null);
    closeCalendar?.(null);
  }, [isRangeSubmitDisabled, closeCalendar]);

  // Keep internal selection in sync with the externally-controlled `date` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (isRangeMode) {
      const [startText, endText] = date.split(" / ");

      if (datePattern.test(startText) && datePattern.test(endText)) {
        const start = parseDisplayDate(startText);
        const end = parseDisplayDate(endText);
        const [rangeStart, rangeEnd] =
          start <= end ? [start, end] : [end, start];

        setChosenRange([formatDateKey(rangeStart), formatDateKey(rangeEnd)]);
      }

      return;
    }

    if (datePattern.test(date)) {
      const parsedDate = parseDisplayDate(date);

      setViewDate(parsedDate);
      applySingleSelection(parsedDate);
    }
  }, [date, isRangeMode]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return {
    currentMonthName,
    currentYear,
    yearRangeEnd,
    isMonthEditing,
    isYearEditing,
    setIsMonthEditing,
    setIsYearEditing,
    months,
    years,
    days,
    isRangeSubmitDisabled,
    goToNext,
    goToPrevious,
    selectMonth,
    selectYear,
    selectDay,
    confirmRangeSelection,
    cancelRangeSelection
  };
};
