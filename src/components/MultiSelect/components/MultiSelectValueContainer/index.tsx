import { ValueContainerProps } from "react-select";
import React, { useRef } from "react";
import { P2 } from "../../../typography";
import { ValueContainerStyle } from "./styles";

const MultiSelectValueContainer = <TOption,>(
  props: ValueContainerProps<TOption, true>
): JSX.Element => {
  const valueContainerRef = useRef<HTMLDivElement>(null);

  return (
    <ValueContainerStyle
      data-element="select-valueContainer"
      ref={valueContainerRef}
      size={props.selectProps.size}
      isMulti={props.isMulti}
      isHasValue={props.hasValue}
      isFocused={props.selectProps.menuIsOpen}
      isReadOnly={props.selectProps.isReadOnly}
      isDisabled={props.selectProps.isDisabled}
      viewType={props.selectProps.viewType}>
      {!props.hasValue && props.selectProps.isReadOnly ? (
        <P2 type="corvus" className="text-readonly">
          Not provided
        </P2>
      ) : (
        props.children
      )}
    </ValueContainerStyle>
  );
};

export default MultiSelectValueContainer;
