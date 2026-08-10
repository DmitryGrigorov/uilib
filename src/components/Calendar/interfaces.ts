import { ChangeEvent, MouseEvent } from "react";

import { ITheme } from "../Pallette/themes";

export interface ICalendarProps {
  id?: string;
  locale?: ILocale; // default value = ru;
  isRangeMode?: boolean; // default value = false;
  date?: string;
  setDateToInput?: (
    date: string,
    event?: ChangeEvent<HTMLInputElement> | MouseEvent,
    id?: string
  ) => void;
  closeCalendar?: (chosenDate: string | string[] | null) => void;
  minDate?: string;
  maxDate?: string;
  hasButtons?: boolean;
  testId?: string;
}

export interface IHeaderProps {
  locale: ILocale;
  currentMonth: string;
  currentYear: number;
  yearEnd?: string;
  isMonthEditing: boolean;
  isYearEditing: boolean;
  setIsMonthEditing: (value: boolean) => void;
  setIsYearEditing: (value: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export interface IMonthsProps {
  locale: ILocale;
  data: IMonth[];
  changeMonth: (id: number) => void;
}

export interface IYearsProps {
  locale: ILocale;
  data: IYear[];
  changeYear: (id: number) => void;
}

export interface IMonth {
  id: number;
  name: string;
  isActive: boolean;
  isDisabled: boolean;
}

export type IYear = IMonth;

export interface ICalendarListProps {
  locale: ILocale;
  days: IDay[];
  isRangeMode?: boolean;
  hasButtons?: boolean;
  isRangeSubmitDisabled: boolean;
  onSelectDay: (day: IDay, event?: MouseEvent) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface IDay {
  id: number;
  day: number | string;
  date?: string | null;
  /** Real calendar date the cell represents; avoids re-parsing `date` in handlers. */
  dateValue?: Date;
  isActive?: boolean;
  isDisabled?: boolean;
  isToday?: boolean;
  isInRange?: boolean | null;
  isRangeStart?: boolean | null;
  isRangeEnd?: boolean | null;
  isOuterItem?: boolean;
  isDiffMonth?: boolean;
  isPrevMonth?: boolean;
  isNextMonth?: boolean;
}

export interface IStylesProps {
  theme: ITheme;
  root?: boolean;
  offset?: number;
  isActive?: boolean;
  isDisabled?: boolean;
  isToday?: boolean;
  isInRange?: boolean | null;
  isRangeStart?: boolean | null;
  isRangeEnd?: boolean | null;
  isOuterItem?: boolean;
  isMonthEditing?: boolean;
  isDiffMonth?: boolean;
}

export type ILocale = "ru" | "en" | "de";

export type IMonthChangeType = "previous" | "next";
