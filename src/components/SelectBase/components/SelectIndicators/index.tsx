import React from "react";
import { components, IndicatorsContainerProps } from "react-select";
import { IndicatorsContainerStyle } from "./styles";

const SelectIndicators = <TOption, isMulti extends boolean = boolean>(
  props: IndicatorsContainerProps<TOption, isMulti>
): JSX.Element => (
  <IndicatorsContainerStyle
    data-element="select-indicatorsContainer"
    isMargin={
      (props.selectProps.menuIsOpen ||
        props.hasValue ||
        Boolean(props.selectProps.isReadOnly)) &&
      !props.isMulti
    }>
    <components.IndicatorsContainer {...props} />
  </IndicatorsContainerStyle>
);

export default SelectIndicators;
