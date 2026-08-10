import React, { KeyboardEvent, useState } from "react";

import { IHeaderProps } from "../interfaces";
import {
  HeaderWrapper,
  HeaderContainer,
  ArrowLeft,
  ArrowRight,
  MonthBtn,
  YearBtn,
  ArrowsContainer
} from "../styles";
import { P1 } from "../../typography";
import {
  previousPeriodLabel,
  nextPeriodLabel,
  editMonthLabel,
  editYearLabel,
  monthHeadingLabel,
  yearHeadingLabel
} from "../locale";

const activateOnEnterOrSpace =
  (handler: () => void) =>
  (event: KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handler();
    }
  };

const Header = ({
  locale,
  currentMonth,
  currentYear,
  isMonthEditing,
  isYearEditing,
  setIsYearEditing,
  setIsMonthEditing,
  onNext,
  onPrevious
}: IHeaderProps): JSX.Element => {
  const btnMargin = 8;
  const [baseMonthElementWidth, setBaseMonthElementWidth] = useState<number>(0);
  const monthElementWidth = isYearEditing ? baseMonthElementWidth : 0;

  return (
    <HeaderWrapper
      data-element="calendar-header-wrapper"
      isMonthEditing={isMonthEditing}>
      {!isMonthEditing && (
        <ArrowsContainer
          role="button"
          tabIndex={0}
          aria-label={previousPeriodLabel[locale]}
          onClick={onPrevious}
          onKeyDown={activateOnEnterOrSpace(onPrevious)}>
          <ArrowLeft />
        </ArrowsContainer>
      )}
      <HeaderContainer
        data-element="calendar-header-container"
        offset={monthElementWidth}>
        <MonthBtn
          type="button"
          data-element="calendar-header-month"
          offset={monthElementWidth}
          aria-expanded={isMonthEditing}
          aria-label={editMonthLabel[locale]}
          ref={(node) => {
            if (node) {
              setBaseMonthElementWidth(
                parseFloat(node.getBoundingClientRect().width.toFixed(2)) +
                  btnMargin
              );
            }
          }}
          onClick={() => setIsMonthEditing(!isMonthEditing)}>
          <P1 type="phoenix">
            {isMonthEditing ? monthHeadingLabel[locale] : currentMonth}
          </P1>
        </MonthBtn>

        {!isMonthEditing && (
          <YearBtn
            type="button"
            data-element="calendar-header-year"
            offset={monthElementWidth}
            aria-expanded={isYearEditing}
            aria-label={editYearLabel[locale]}
            onClick={() => setIsYearEditing(!isYearEditing)}>
            <P1 type="phoenix">
              {isYearEditing ? yearHeadingLabel[locale] : currentYear}
            </P1>
          </YearBtn>
        )}
      </HeaderContainer>

      {!isMonthEditing && (
        <ArrowsContainer
          role="button"
          tabIndex={0}
          aria-label={nextPeriodLabel[locale]}
          onClick={onNext}
          onKeyDown={activateOnEnterOrSpace(onNext)}>
          <ArrowRight />
        </ArrowsContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
