import React, { FC, useState } from "react";
import PaginationDropDown from "../PaginationDropDown/PaginationDropDown";
import { P2 } from "../../../typography";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { IPaginationControl, defaultItemCounts } from "../../types";
import { PaginationControlStyled } from "./style";

const PaginationControl: FC<TPropsWithAttributes<IPaginationControl>> = ({
  itemsPerPage = defaultItemCounts,
  onItemsPerPageChange
}) => {
  const [selectedOption, setSelectedOption] = useState<number>(
    itemsPerPage[0].value
  );

  const onOptionClicked = (value: number): void => {
    setSelectedOption(value);
    onItemsPerPageChange?.(value);
  };

  return (
    <PaginationControlStyled data-element="paginationControl">
      <P2 type="corvus">Items per page:</P2>
      <PaginationDropDown
        options={itemsPerPage}
        textSelect={String(selectedOption)}
        onItemClick={onOptionClicked}
      />
    </PaginationControlStyled>
  );
};

export default PaginationControl;
