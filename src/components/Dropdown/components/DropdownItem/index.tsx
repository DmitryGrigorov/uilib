import React from "react";
import { TDropdownItemProps } from "./types";
import { DropdownItemStyled } from "./styles";

const DropdownItem = <Item,>({
  getItemLabel,
  getItemOnClick,
  onItemClick,
  getItemDisabled,
  getItemLeadContent,
  getItemAttributes,
  item
}: TDropdownItemProps<Item>): JSX.Element => (
  <DropdownItemStyled
    {...getItemAttributes?.(item)}
    icon={getItemLeadContent?.(item)}
    isDisabled={getItemDisabled?.(item)}
    viewType="ghost"
    size="s"
    onClick={(event) => {
      event.preventDefault();
      const itemOnClick = getItemOnClick?.(item);
      if (itemOnClick) {
        itemOnClick(event, item);
      } else {
        onItemClick?.(event, item);
      }
    }}>
    {getItemLabel(item)}
  </DropdownItemStyled>
);

export default DropdownItem;
