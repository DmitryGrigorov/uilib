import { components, DropdownIndicatorProps } from "react-select";
import { IconArrowDown1 } from "@dmitrygrigorov/icons";
import React from "react";
import { SelectDropdownIndicatorStyled, SelectDrawerIcon } from "./styles";

const SelectDropdownIndicator = <TOption,>(
  props: DropdownIndicatorProps<TOption, false>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    {props.selectProps.isDrawer ? (
      <SelectDrawerIcon />
    ) : (
      <SelectDropdownIndicatorStyled
        isDisabled={props.isDisabled}
        isFocused={props.isFocused && props.selectProps.menuIsOpen}>
        <IconArrowDown1
          className="select-dropdown-icon"
          width={16}
          height={16}
        />
      </SelectDropdownIndicatorStyled>
    )}
  </components.DropdownIndicator>
);

export default SelectDropdownIndicator;
