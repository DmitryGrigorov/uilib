import { components, DropdownIndicatorProps } from "react-select";
import { IconArrowDownCircle } from "@dmitrygrigorov/icons";
import React from "react";
import {
  MultiSelectDropdownIndicatorStyled,
  MultiSelectDrawerIcon
} from "./styles";

const MultiSelectDropdownIndicator = <TOption,>(
  props: DropdownIndicatorProps<TOption, true>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    {props.selectProps.isDrawer ? (
      <MultiSelectDrawerIcon />
    ) : (
      <MultiSelectDropdownIndicatorStyled
        isDisabled={props.isDisabled}
        isFocused={props.selectProps.menuIsOpen}>
        <IconArrowDownCircle
          className="select-dropdown-icon"
          width={16}
          height={16}
        />
      </MultiSelectDropdownIndicatorStyled>
    )}
  </components.DropdownIndicator>
);

export default MultiSelectDropdownIndicator;
