import React, { FC, useState } from "react";
import PaginationDropDown from "../PaginationDropDown/PaginationDropDown";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { IPaginationPageSelection } from "../../types";
import { P2 } from "../../../typography";
import { PaginationPageSelectionStyled } from "./style";

const PaginationPageSelection: FC<
  TPropsWithAttributes<IPaginationPageSelection>
> = ({ pages, onPageChange }) => {
  const [selectedOption, setSelectedOption] = useState<number>(pages[0].value);

  const onOptionClicked = (value: number): void => {
    setSelectedOption(value);
    onPageChange?.(value);
  };

  return (
    <PaginationPageSelectionStyled data-element="paginationPageSeleciton">
      <P2 type="corvus">Go to page:</P2>
      <PaginationDropDown
        options={pages}
        textSelect={String(selectedOption)}
        onItemClick={onOptionClicked}
      />
    </PaginationPageSelectionStyled>
  );
};

export default PaginationPageSelection;
