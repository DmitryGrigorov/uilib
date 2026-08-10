import React, { MouseEvent, CSSProperties } from "react";
import { ClearIndicatorProps } from "react-select";
import { IconCloseCircle } from "@dmitrygrigorov/icons";

import { SelectBaseClearIndicatorStyled } from "./styles";

const SelectClearIndicator = <TOption, isMulti extends boolean = boolean>(
  props: ClearIndicatorProps<TOption, isMulti>
): JSX.Element => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps }
  } = props;

  const handleMouseDown = (event: MouseEvent): void => {
    event.preventDefault();
    props.clearValue();
  };
  return (
    <SelectBaseClearIndicatorStyled
      size={props.selectProps.size}
      data-element="select-clearIndicator"
      {...restInnerProps}
      onMouseDown={handleMouseDown}
      ref={ref}
      style={{
        ...(getStyles("clearIndicator", props) as CSSProperties),
        padding: 0
      }}>
      <IconCloseCircle data-element="input-clearIcon" width={16} height={16} />
    </SelectBaseClearIndicatorStyled>
  );
};

export default SelectClearIndicator;
