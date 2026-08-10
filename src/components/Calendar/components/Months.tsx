import React from "react";
import { IMonthsProps, IMonth } from "../interfaces";
import { MonthsContainer, MonthItem } from "../styles";
import { monthsListAriaLabel } from "../locale";
import { useRovingFocus } from "../hooks/useRovingFocus";

const GRID_COLUMNS = 3;

const Months = ({ locale, data, changeMonth }: IMonthsProps): JSX.Element => {
  const activeIndex = Math.max(
    data.findIndex(({ isActive }) => isActive),
    0
  );

  const { getTabIndex, registerItem, onKeyDown } = useRovingFocus({
    itemCount: data.length,
    columns: GRID_COLUMNS,
    activeIndex,
    isItemDisabled: (index) => Boolean(data[index]?.isDisabled),
    onActivate: (index) => changeMonth(data[index].id)
  });

  return (
    <MonthsContainer role="radiogroup" aria-label={monthsListAriaLabel[locale]}>
      {data.map(({ id, name, isActive, isDisabled }: IMonth, index: number) => (
        <MonthItem
          ref={registerItem(index)}
          role="radio"
          aria-checked={isActive}
          aria-disabled={isDisabled}
          tabIndex={getTabIndex(index)}
          isDisabled={isDisabled}
          key={id}
          isActive={isActive}
          onClick={() => !isDisabled && changeMonth(id)}
          onKeyDown={(event) => onKeyDown(event, index)}>
          {name}
        </MonthItem>
      ))}
    </MonthsContainer>
  );
};

export default Months;
