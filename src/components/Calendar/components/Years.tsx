import React from "react";
import { IYearsProps, IYear } from "../interfaces";
import { YearsContainer, YearItem } from "../styles";
import { yearsListAriaLabel } from "../locale";
import { useRovingFocus } from "../hooks/useRovingFocus";

const GRID_COLUMNS = 3;

const Years = ({ locale, data, changeYear }: IYearsProps): JSX.Element => {
  const activeIndex = Math.max(
    data.findIndex(({ isActive }) => isActive),
    0
  );

  const handleActivate = (index: number): void => {
    const year = data[index];

    if (!year.isDisabled) {
      changeYear(parseInt(year.name, 10));
    }
  };

  const { getTabIndex, registerItem, onKeyDown } = useRovingFocus({
    itemCount: data.length,
    columns: GRID_COLUMNS,
    activeIndex,
    isItemDisabled: (index) => Boolean(data[index]?.isDisabled),
    onActivate: handleActivate
  });

  return (
    <YearsContainer role="radiogroup" aria-label={yearsListAriaLabel[locale]}>
      {data.map(({ id, name, isActive, isDisabled }: IYear, index: number) => (
        <YearItem
          ref={registerItem(index)}
          role="radio"
          aria-checked={isActive}
          aria-disabled={isDisabled}
          tabIndex={getTabIndex(index)}
          key={id}
          isActive={isActive}
          isDisabled={isDisabled}
          onClick={() => handleActivate(index)}
          onKeyDown={(event) => onKeyDown(event, index)}>
          {name}
        </YearItem>
      ))}
    </YearsContainer>
  );
};

export default Years;
