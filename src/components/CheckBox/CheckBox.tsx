import React, {
  KeyboardEventHandler,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent
} from "react";
import P2 from "../typography/P2";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { ICheckBoxProps } from "./types";
import {
  CheckBoxStyled,
  InputStyled,
  IconMinusStyled,
  IconTickStyled
} from "./styles";

const CheckBox = React.forwardRef<
  HTMLLabelElement,
  TPropsWithAttributes<ICheckBoxProps, "label">
>(
  (
    {
      className,
      label,
      inputRef,
      tabIndex,
      isChecked,
      onChange,
      isDisabled,
      name,
      isIndeterminate,
      onBlur,
      onFocus,
      testId = "testIDWithoutName",
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useStateProps<boolean>(
      typeof isChecked === "undefined" ? false : isChecked
    );

    const handleChange = (
      event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
    ): void => {
      setChecked((prevState) => !prevState);
      onChange?.(event, !checked);
    };

    const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (
      event
    ) => {
      if (event.key === "Enter") {
        setChecked((prevState) => !prevState);
        onChange?.(event, !checked);
      }
    };

    return (
      <CheckBoxStyled
        {...props}
        className={className}
        data-testid={`${testId}_checkBox`}
        data-element="checkBox"
        ref={ref}
        onClick={(event: MouseEvent<HTMLLabelElement>) => {
          event.stopPropagation();
          props.onClick?.(event);
        }}
        onMouseDown={(e) => e.preventDefault()}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        isChecked={checked}>
        {checked && !isIndeterminate && (
          <IconTickStyled width={16} height={16} className="checkbox-icon" />
        )}
        {isIndeterminate && (
          <IconMinusStyled width={16} height={16} className="checkbox-icon" />
        )}
        <InputStyled
          data-element="checkBox-input"
          checked={checked}
          ref={inputRef}
          tabIndex={tabIndex}
          type="checkbox"
          onChange={handleChange}
          onKeyUp={handlePressEnter}
          disabled={isDisabled}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          isIndeterminate={isIndeterminate}
          isChecked={checked}
        />
        {label && (
          <P2 type="corvus" data-element="checkBox-label">
            {label}
          </P2>
        )}
      </CheckBoxStyled>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
