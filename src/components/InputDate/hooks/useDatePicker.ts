import {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
  KeyboardEvent,
  FocusEvent,
  ChangeEvent
} from "react";
import type { RefObject } from "react";

import { formatISO8601ToDate } from "../../utils/date";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { IDatePickerProps } from "../interfaces";
import {
  datePattern,
  ErrorRangeDateMsg,
  ErrorValidateDateMsg,
  DateEndPlaceholder,
  DateStartPlaceholder,
  PlaceholderChar,
  ErrorIsRequiredMsg
} from "../constants";

type TDatePickerConfig = Pick<
  IDatePickerProps,
  | "id"
  | "isRangeMode"
  | "onChange"
  | "minDate"
  | "maxDate"
  | "onKeyDown"
  | "isShowMask"
  | "value"
  | "onCalendarClose"
  | "onCalendarOpen"
  | "onDateSelected"
  | "onBlur"
  | "onFocus"
  | "isRequired"
> & {
  /**
   * Whether InputDate should manage its own validation message. False when
   * the consumer explicitly controls `statusText` themselves.
   */
  useInternalError: boolean;
};

export interface IUseDatePickerResult {
  datePickerRef: RefObject<HTMLDivElement | null>;
  isCalendarShown: boolean;
  toggleCalendar: () => void;
  currentDate: string;
  error: string | undefined;
  isShowMask: boolean;
  onDateChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
    id: string
  ) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleFocus: (event: FocusEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  handleCloseCalendar: () => void;
  handleSettingDateToInputFromCalendar: (
    event: ChangeEvent<HTMLInputElement>,
    date: string,
    id: string
  ) => void;
}

/**
 * Owns all InputDate state and validation logic (mask visibility, calendar
 * visibility, single/range date validation) so `DatePicker.tsx` stays a thin
 * wiring layer between this hook, the masked text input and the `Calendar`
 * popup.
 */
export const useDatePicker = ({
  id,
  isRangeMode = false,
  onChange,
  minDate = "01.01.1700",
  maxDate = "31.12.2999",
  onKeyDown,
  isShowMask: isShowMaskProp = true,
  value = "",
  onCalendarClose,
  onCalendarOpen,
  onDateSelected,
  onBlur,
  onFocus,
  isRequired,
  useInternalError
}: TDatePickerConfig): IUseDatePickerResult => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [isCalendarShown, setCalendarShown] = useState(false);
  const [currentDate, setCurrentDate] = useState(value);
  const [error, setError] = useState<string | undefined>();
  const [isShowMask, setShowMask] = useState(isShowMaskProp);

  const minimalDate = useMemo(() => formatISO8601ToDate(minDate), [minDate]);
  const maximalDate = useMemo(() => formatISO8601ToDate(maxDate), [maxDate]);

  const checkValidDate = useCallback(
    (date: string): boolean => {
      if (date === DateStartPlaceholder) {
        return true;
      }
      if (date.includes(PlaceholderChar)) {
        return false;
      }
      if (!datePattern.test(date)) {
        return false;
      }

      const dateInISO = formatISO8601ToDate(date);

      return minimalDate <= dateInISO && maximalDate >= dateInISO;
    },
    [minimalDate, maximalDate]
  );

  const checkValidDateRange = useCallback(
    (date: string): boolean => {
      const [dateStart, dateEnd] = date.split(" / ");

      if (!datePattern.test(dateStart) && !datePattern.test(dateEnd)) {
        return false;
      }

      if (!checkValidDate(dateStart) || !checkValidDate(dateEnd)) {
        setError(ErrorValidateDateMsg);
        return false;
      }

      setError(undefined);

      const dateStartISO = formatISO8601ToDate(dateStart);
      const dateEndISO = formatISO8601ToDate(dateEnd);

      if (dateStartISO > dateEndISO) {
        setError(ErrorRangeDateMsg);
      }

      return dateStartISO <= dateEndISO;
    },
    [checkValidDate]
  );

  const checkErrors = useCallback(
    (date: string): void => {
      if (!useInternalError) {
        return;
      }
      if (
        date === DateStartPlaceholder ||
        date === DateStartPlaceholder + DateEndPlaceholder ||
        date.length === 0
      ) {
        setError(isRequired ? ErrorIsRequiredMsg : undefined);
        return;
      }
      if (isRangeMode && !checkValidDateRange(date)) {
        setError(ErrorRangeDateMsg);
        return;
      }
      if (!isRangeMode && !checkValidDate(date)) {
        setError(ErrorValidateDateMsg);
        return;
      }
      setError(undefined);
    },
    [
      useInternalError,
      isRequired,
      isRangeMode,
      checkValidDate,
      checkValidDateRange
    ]
  );

  const handleSelected = useCallback((): void => {
    if (isRangeMode) {
      if (!checkValidDateRange(currentDate)) {
        setCurrentDate(value);
        onDateSelected?.(value);
      }
      return;
    }

    checkErrors(currentDate);
    if (!checkValidDate(currentDate)) {
      setCurrentDate(value);
      onDateSelected?.(value);
    }
  }, [
    isRangeMode,
    currentDate,
    value,
    checkValidDateRange,
    checkValidDate,
    checkErrors,
    onDateSelected
  ]);

  const closeCalendarAndResetDate = useCallback((): void => {
    setCalendarShown(false);
    handleSelected();
  }, [handleSelected]);

  const toggleCalendar = useCallback((): void => {
    setCalendarShown((shown) => !shown);
  }, []);

  const onDateChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      nextValue: string,
      nextId: string
    ): void => {
      const isCleared =
        (!isRangeMode && nextValue === DateStartPlaceholder) ||
        (isRangeMode &&
          nextValue === DateStartPlaceholder + DateEndPlaceholder);

      if (isCleared) {
        setCurrentDate("");
        onChange?.(event, "", nextId);
        return;
      }

      setCurrentDate(nextValue);
      onChange?.(event, nextValue, nextId);

      if (!nextValue.includes(PlaceholderChar)) {
        checkErrors(nextValue);
      }
    },
    [isRangeMode, onChange, checkErrors]
  );

  const setDateRangeToInput = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      date: string,
      nextId: string
    ): void => {
      const [rangeDateStart, rangeDateEnd] = currentDate.split(" / ");
      const dateStart = rangeDateStart || DateStartPlaceholder;
      const dateEnd = rangeDateEnd || DateStartPlaceholder;

      if (datePattern.test(dateStart) && datePattern.test(dateEnd)) {
        setCurrentDate(date + DateEndPlaceholder);
        return;
      }

      if (datePattern.test(dateStart)) {
        const dateRange = `${dateStart} / ${date}`;
        const currentDateRange = checkValidDateRange(dateRange)
          ? dateRange
          : `${date} / ${dateStart}`;

        checkErrors(currentDateRange);
        setCurrentDate(currentDateRange);
        onChange?.(event, currentDateRange, nextId);
        return;
      }

      const nextRange = `${date} / ${dateEnd}`;
      setCurrentDate(nextRange);
      onChange?.(event, nextRange, nextId);
    },
    [currentDate, checkValidDateRange, checkErrors, onChange]
  );

  const handleSettingDateToInputFromCalendar = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      date: string,
      nextId: string
    ): void => {
      if (isRangeMode) {
        setDateRangeToInput(event, date, nextId);
        return;
      }

      if (date !== currentDate) {
        checkErrors(date);
        setCurrentDate(date);
        onChange?.(event, date, id);
        if (checkValidDate(date)) {
          onDateSelected?.(date);
        }
      }
    },
    [
      isRangeMode,
      setDateRangeToInput,
      currentDate,
      checkErrors,
      onChange,
      id,
      checkValidDate,
      onDateSelected
    ]
  );

  const handleCloseCalendar = useCallback((): void => {
    setCalendarShown(false);
    if (value !== currentDate) {
      handleSelected();
    }
  }, [value, currentDate, handleSelected]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === "Escape") {
        closeCalendarAndResetDate();
      }
      if (event.key === "Enter") {
        const isValid = isRangeMode
          ? checkValidDateRange(currentDate)
          : checkValidDate(currentDate);

        if (isValid) {
          checkErrors(currentDate);
          if (value !== currentDate) {
            onDateSelected?.(currentDate);
          }
        }
      }

      onKeyDown?.(event);
    },
    [
      closeCalendarAndResetDate,
      isRangeMode,
      checkValidDateRange,
      checkValidDate,
      currentDate,
      checkErrors,
      value,
      onDateSelected,
      onKeyDown
    ]
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      setShowMask(true);
      onFocus?.(event);
    },
    [onFocus]
  );

  const handleBlur = useCallback((): void => {
    setShowMask(false);
    handleSelected();
    onBlur?.();
  }, [handleSelected, onBlur]);

  useEffect(() => {
    if (isCalendarShown) {
      onCalendarOpen?.();
    } else {
      onCalendarClose?.();
    }
  }, [isCalendarShown, onCalendarOpen, onCalendarClose]);

  // Keep internal state in sync with the externally-controlled `value`/`isShowMaskProp`
  // props, and auto-close the calendar once a complete date (range) has been typed.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setCurrentDate(value);
  }, [value]);

  useEffect(() => {
    setShowMask(isShowMaskProp);
  }, [isShowMaskProp]);

  useEffect(() => {
    const [dateStart, dateEnd] = currentDate.split(" / ");

    if (datePattern.test(dateStart) && datePattern.test(dateEnd)) {
      handleCloseCalendar();
    }
  }, [currentDate]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useOnClickOutside(datePickerRef, closeCalendarAndResetDate, isCalendarShown);

  return {
    datePickerRef,
    isCalendarShown,
    toggleCalendar,
    currentDate,
    error,
    isShowMask,
    onDateChange,
    handleKeyDown,
    handleFocus,
    handleBlur,
    handleCloseCalendar,
    handleSettingDateToInputFromCalendar
  };
};
