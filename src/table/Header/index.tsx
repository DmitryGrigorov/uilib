import {
  IconMaximize1,
  IconMinimize1,
  IconReset,
  IconSearchNormal1
} from "@dmitrygrigorov/icons";
import React, { ReactElement, useEffect, useState } from "react";
import { H, P1, Button, useDebounce } from "@dmitrygrigorov/components";
import { useObservable, useTableService } from "../TableContext";
import { TTableHeaderProps } from "./types";
import {
  HeaderWrapper,
  SearchBoxStyled,
  MainHeaderContent,
  HeaderControlsWrapper
} from "./styles";

const Header = <TData, TValue>({
  size = "l",
  title,
  description,
  onSearch,
  search,
  isSearch,
  placeholderSearch,
  isResize,
  isMobile,
  onResizeChange,
  isFullScreen,
  isRefreshable,
  headerContent,
  additionalButton,
  onClickAdditionalButton,
  onUpdate,
  isDisabledAdditionalButton
}: TTableHeaderProps<TData, TValue>): React.ReactElement => {
  const tableService = useTableService<TData, TValue>();
  const globalSearch = useObservable(tableService.globalSearch);
  const [isMobileSearchOn, setIsMobileSearchOn] = useState<boolean>(false);

  useEffect(() => {
    tableService.searchRows(search || "");
  }, [search]);

  const handleSearch = useDebounce((value: string) => {
    tableService.searchRows(value);
    onSearch?.({ value });
  }, 200);

  const handleClickSearch = (): void => {
    isMobileSearchOn ? setIsMobileSearchOn(false) : setIsMobileSearchOn(true);
  };

  const renderSearch = (): ReactElement => {
    if (isMobile) {
      return (
        <Button
          size="s"
          viewType="ghost"
          icon={<IconSearchNormal1 />}
          onClick={handleClickSearch}
        />
      );
    } else {
      return (
        <SearchBoxStyled
          isRightPosition={!title}
          placeholder={placeholderSearch}
          size="m"
          value={globalSearch}
          onChange={(_, value) => handleSearch(value)}
        />
      );
    }
  };

  return (
    <HeaderWrapper size={size}>
      <MainHeaderContent>
        {title && (
          <H type={isMobile ? "capricornus" : "libra"} as="h4">
            {title}
          </H>
        )}
        <HeaderControlsWrapper isMobile={isMobile}>
          {isSearch && renderSearch()}
          {headerContent && <div className="buttonHolder">{headerContent}</div>}
          {isRefreshable && (
            <Button viewType="icon" size="m" onClick={onUpdate}>
              <IconReset />
            </Button>
          )}
          {isResize && (
            <Button viewType="icon" size="m" onClick={onResizeChange}>
              {isFullScreen ? <IconMinimize1 /> : <IconMaximize1 />}
            </Button>
          )}
          {additionalButton && (
            <Button
              viewType="icon"
              size="m"
              onClick={onClickAdditionalButton}
              isDisabled={isDisabledAdditionalButton}>
              {additionalButton}
            </Button>
          )}
        </HeaderControlsWrapper>
      </MainHeaderContent>
      {isMobileSearchOn && (
        <SearchBoxStyled
          isMobile={isMobile}
          isRightPosition={!title}
          placeholder={placeholderSearch}
          size="m"
          value={globalSearch}
          onChange={(_, value) => handleSearch(value)}
        />
      )}
      {description && (
        <P1 type="aquilla" as="div">
          {description}
        </P1>
      )}
    </HeaderWrapper>
  );
};

export default React.memo(Header) as typeof Header;
