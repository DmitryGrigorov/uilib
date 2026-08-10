import React, { useState, MouseEvent, useMemo, useEffect, memo } from "react";
import {
  P2,
  Dropdown,
  TDropdownOnClick,
  IDropdownItem,
  useDebounce
} from "@dmitrygrigorov/components";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import { useObservable, useTableService } from "../TableContext";
import { IFooterProps } from "./types";
import {
  FooterStyled,
  PaginationStyled,
  FooterSelectPerPageStyled,
  FooterPerPageWrapper,
  SearchBoxStyled,
  FooterTextStyled
} from "./styles";

const Footer = <TData, TValue>({
  size,
  generalPages,
  isPagination,
  isPaginationRowPerPage,
  paginationCounts = [10, 20, 30],
  onPaginationChange,
  onSearch,
  search,
  isSearch,
  placeholderSearch,
  text,
  isMobile,
  content,
  className,
  isFillPagination
}: IFooterProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const rowsPerPage = useObservable(tableService.rowsPerPage);
  const currentPage = useObservable(tableService.currentPage);
  const globalSearch = useObservable(tableService.globalSearch);
  const [isOpenPerPage, setIsOpenPerPage] = useState(false);
  const countElements = useMemo(() => {
    if (isPagination && isPaginationRowPerPage) {
      return 2;
    }
    return 1;
  }, [isPagination, isPaginationRowPerPage]);

  useEffect(() => {
    tableService.searchRows(search || "");
  }, [search]);

  const handleSearch = useDebounce((value: string) => {
    tableService.searchRows(value);
    onSearch?.({ value });
  }, 200);

  const handleChangePerPage: TDropdownOnClick<IDropdownItem> = (
    _: MouseEvent,
    { label }
  ) => {
    tableService.changeRowsPerPage(Number(label), 1);
    onPaginationChange?.({ newPage: 1, rowPerPage: Number(label) });
    setIsOpenPerPage(false);
  };

  const handlePageChange = (page: number): void => {
    tableService.changePage(page);
    onPaginationChange?.({ newPage: page, rowPerPage: rowsPerPage });
  };

  return (
    <FooterStyled
      size={size}
      isMobile={isMobile}
      countElements={countElements}
      className={className}>
      {text && <FooterTextStyled type="phoenix">{text}</FooterTextStyled>}
      {content}
      {isSearch && (
        <SearchBoxStyled
          size="m"
          value={globalSearch}
          placeholder={placeholderSearch}
          onChange={(_, value) => handleSearch(value)}
        />
      )}
      {isPagination && (
        <>
          <PaginationStyled
            totalPages={generalPages}
            isShowSwitchers
            currentPage={currentPage}
            onPageChange={handlePageChange}
            isFill={isFillPagination}
          />
          {isPaginationRowPerPage && paginationCounts && (
            <FooterPerPageWrapper>
              <P2 type="corvus" className="footer-per-page__text">
                Items per page:
              </P2>
              <Dropdown
                onClickClose={() => setIsOpenPerPage(false)}
                isOpen={isOpenPerPage}
                onItemClick={handleChangePerPage}
                items={paginationCounts.map((count) => ({ label: count }))}>
                <FooterSelectPerPageStyled
                  onClick={() => setIsOpenPerPage((prevState) => !prevState)}>
                  <P2 type="corvus">{rowsPerPage}</P2>
                  <IconArrowDown1 />
                </FooterSelectPerPageStyled>
              </Dropdown>
            </FooterPerPageWrapper>
          )}
        </>
      )}
    </FooterStyled>
  );
};

export default memo(Footer) as typeof Footer;
