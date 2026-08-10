import React, { MouseEvent, KeyboardEvent, forwardRef } from "react";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { RadioButtonComponent, Input, Mark } from "./style";
import { IRadioButtonProps } from "./types";

const RadioButton = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IRadioButtonProps>
>((props, ref) => {
  const {
    label,
    name,
    value,
    isChecked,
    isDisabled,
    isError,
    onClick,
    onChange,
    className,
    inputRef,
    inputId,
    onBlur,
    onFocus,
    testId = "testIDWithoutName",
    ...otherProps
  } = props;

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    onClick?.(event, value);
    !isChecked && onChange?.(event, value);
  };

  const handlePressEnter = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (!isChecked && event.key === "Enter") {
      onChange?.(event, value);
    }
  };

  return (
    <RadioButtonComponent
      ref={ref}
      data-element="radioButton"
      data-testid={`${testId}_radioButton`}
      tabIndex={1}
      isError={!isChecked && isError}
      onKeyUp={handlePressEnter}
      onClick={handleClick}
      isDisabled={isDisabled}
      onFocus={onFocus}
      onBlur={onBlur}
      isChecked={isChecked}
      className={className}
      {...otherProps}>
      <Input
        ref={inputRef}
        data-element="radioButton-input"
        tabIndex={-1}
        type="radio"
        checked={isChecked}
        name={name}
        value={value}
        readOnly={true}
        isDisabled={isDisabled}
        id={inputId}
      />
      <Mark
        data-element="radioButton-mark"
        tabIndex={-1}
        isDisabled={isDisabled}
      />
      <P2 type="corvus" data-element="radioButton-label" tabIndex={-1}>
        {label}
      </P2>
    </RadioButtonComponent>
  );
});

RadioButton.displayName = "RadioButton";

export default RadioButton;
