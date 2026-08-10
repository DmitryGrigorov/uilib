export type IPaginationProps = {
  iconNext?: JSX.Element;
  iconPrev?: JSX.Element;
  trailIcon?: JSX.Element;
  isShowConfig?: boolean;
  isShowGoToPage?: boolean;
  paginationConf?: IPaginationControl;
  isOpenPaginationConf?: boolean;
  switcherTextPrev?: string;
  switcherTextNext?: string;
  isDisabled?: boolean;
  currentPage: number;
  width?: string;
  className?: string;
  isShowSwitchers?: boolean;
  /**
   * @deprecated Use {@link IPaginationProps.totalPages} instead.
   */
  generalPages?: number; //deprecated, use totalPages instead, remove in next versions
  totalPages?: number; // TODO: Make required once generalPages is removed.
  isMinimized?: boolean;
  onPageChange?: (page: number) => void;
  onToggle?: (paginationConf: boolean) => void;
  isFill?: boolean;
  testId?: string;
};

export interface IPaginationItem {
  label: string;
  value: number;
}

export const defaultItemCounts: IPaginationItem[] = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 }
];

export interface IPaginationControl {
  itemsPerPage?: IPaginationItem[];
  onItemsPerPageChange?: (value: number) => void;
}

export interface IPaginationPageSelection extends Pick<
  IPaginationProps,
  "onPageChange"
> {
  pages: IPaginationItem[];
}

export interface IDropDown {
  options: IPaginationItem[];
  textSelect?: string;
  onItemClick: (value: number) => void;
  isNotCloseOutside?: boolean;
}
