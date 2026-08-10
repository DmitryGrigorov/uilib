import React, { FC, useRef, useState } from "react";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { P2 } from "../../../typography";
import { IDropDown } from "../../types";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  PaginationDropDownStyled
} from "./style";

const PaginationDropDown: FC<TPropsWithAttributes<IDropDown>> = ({
  options,
  textSelect,
  onItemClick,
  isNotCloseOutside
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggling = (): void => setIsOpen(!isOpen);

  const clickItem = (value: number): void => {
    onItemClick(value);
    setIsOpen(false);
  };

  const handleClickOutsideClose = (): void => {
    if (!isNotCloseOutside) {
      setIsOpen(false);
    }
  };

  useOnClickOutside(dropdownRef, handleClickOutsideClose, isOpen);

  return (
    <PaginationDropDownStyled ref={dropdownRef}>
      <DropDownContainer>
        <DropDownHeader isOpen={isOpen} onClick={toggling}>
          <P2 className="paginationHeader-title" type="corvus">
            {textSelect || "Page number"}
          </P2>
          <IconArrowDown1
            width={16}
            height={16}
            className="pagination-dropdown-icon"
          />
        </DropDownHeader>
      </DropDownContainer>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                onClick={() => clickItem(option.value)}
                key={option.value}>
                <P2 className="paginationHeader-title" type="corvus">
                  {option.label}
                </P2>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </PaginationDropDownStyled>
  );
};

export default PaginationDropDown;
