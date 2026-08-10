import React, {
  useState,
  FocusEvent,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  PropsWithChildren
} from "react";
import { flushSync } from "react-dom";
import { IconArrowUp1, IconArrowDown1 } from "@dmitrygrigorov/icons";
import { TStatusInput } from "../InputBase/interfaces";
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";

import Button from "../Button";
import { IInputNumberProps } from "./interfaces";
import { InputNumberWrapper, StepWrapper, InputNumberStyled } from "./style";
import { parseValue, verifyMinMax } from "./helpers";

const NOT_NUMBER_REGEXP = /[^\d,.\\-]/g;

const MAX_DECIMAL_SCALE = 99;

const InputNumber: React.FC<
  TPropsWithAttributes<PropsWithChildren<IInputNumberProps>>
> = (props) => {
  const {
    id,
    name,
    value,
    width,
    suffix,
    thousandSeparator,
    maxLength,
    isAutoFocus,
    decimalScale = MAX_DECIMAL_SCALE,
    isFixedDecimalScale = false,
    isNegative = true,
    onValueChange,
    type = "text",
    error,
    placeholder,
    tooltipContent,
    tooltipPosition = "bottom",
    title,
    alignText = "left",
    className,
    isDisabled,
    isShowClearIcon = true,
    onFocus,
    onBlur,
    onChange,
    onKeyPress,
    size = "m",
    isRequired,
    status,
    statusText,
    iconLeft,
    step = 1,
    min,
    max,
    viewType,
    decimalSeparator = ".",
    isReadOnly,
    testId = "inputNumber",
    readOnlyEmptyText = "Not provided",
    autoComplete,
    form,
    list,
    accessKey,
    ...otherProps
  } = props;

  const [isFocused, setFocused] = useState<boolean>(false);

  const [localValue, setLocalValue] = useState<number | undefined>(
    parseValue(value)
  );
  const [localStatus, setLocalStatus] = useStateProps<TStatusInput | undefined>(
    status
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value.trim().replace(NOT_NUMBER_REGEXP, "");
    if (inputValue === "") {
      setLocalValue(undefined);
      onChange?.(event, undefined, id);
    } else {
      const parsedValue = Number(
        Number(inputValue).toFixed(Math.min(decimalScale, MAX_DECIMAL_SCALE))
      );
      setLocalValue(parsedValue);
      onChange?.(event, parsedValue, id);

      if (verifyMinMax(parsedValue, min, max)) {
        !status && setLocalStatus(undefined);
      } else {
        setLocalStatus("error");
      }
    }
  };

  const handleStep = (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    direction: "up" | "down"
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    if (isDisabled) {
      return;
    }

    const parsedValue = Number(
      (
        (isNaN(Number(localValue)) ? 0 : (localValue ?? 0)) +
        (direction === "up" ? 1 : -1) * step
      ).toFixed(Math.min(decimalScale, MAX_DECIMAL_SCALE))
    );

    if (verifyMinMax(parsedValue, min, max)) {
      setLocalValue(parsedValue);
      onChange?.(event, parsedValue, id);
      onValueChange?.({
        formattedValue: parsedValue.toString(),
        value: parsedValue.toString(),
        floatValue: parsedValue
      });
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (!isReadOnly) {
      onFocus?.(event);
      setFocused(true);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    if (value !== localValue) {
      setLocalValue(parseValue(value));
    }
    onBlur?.(event, Number(localValue));
    setFocused(false);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress?.(event);
  };

  const handleClear = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    flushSync(() => {
      setLocalValue(NaN); // TODO: currently this is the only reliable way to clear the value.
    });
    onValueChange?.({
      floatValue: undefined,
      formattedValue: "",
      value: ""
    });
    onChange?.(event, undefined, id);
    setLocalValue(undefined);
  };

  /** On iOS, inputMode="decimal" does not show a minus key.
   * When negative values are allowed, inputMode={undefined} is required to show the full keyboard.
   */
  return (
    <InputNumberWrapper
      type={type}
      viewType={viewType}
      data-testid={testId}
      testId={testId}
      error={error}
      placeholder={placeholder}
      tooltipContent={tooltipContent}
      tooltipPosition={tooltipPosition}
      title={title}
      alignText={alignText}
      className={className}
      width={width}
      isDisabled={isDisabled}
      isShowClearIcon={isShowClearIcon}
      isFocused={isFocused}
      isHasValue={typeof localValue !== "undefined"}
      isPasswordVisible={false}
      onClear={handleClear}
      status={localStatus}
      isShowLabel={true}
      size={size}
      isRequired={isRequired}
      statusText={statusText}
      isReadOnly={isReadOnly}
      iconLeft={iconLeft}
      classNameAddonsRight="input-number__right-content"
      iconRight={
        <StepWrapper isDisabled={isDisabled}>
          <Button
            type="button"
            size="xs"
            viewType="ghost"
            className="stepper-icons"
            data-testid={`${testId}_stepper`}
            isDisabled={isDisabled}
            icon={<IconArrowUp1 width={6} height={6} />}
            onClick={(event) => handleStep(event, "up")}
          />
          <Button
            type="button"
            size="xs"
            viewType="ghost"
            className="stepper-icons"
            isDisabled={isDisabled}
            icon={<IconArrowDown1 width={6} height={6} />}
            data-testid={`${testId}_stepper_toLow`}
            onClick={(event) => handleStep(event, "down")}
          />
        </StepWrapper>
      }
      {...otherProps}>
      <InputNumberStyled
        data-testid={`${testId}_input`}
        allowNegative={true}
        id={id}
        autoFocus={isAutoFocus}
        name={name}
        defaultValue={null}
        value={localValue}
        suffix={suffix}
        allowedDecimalSeparators={[".", ","]}
        thousandSeparator={thousandSeparator}
        maxLength={maxLength}
        decimalScale={Math.min(decimalScale, MAX_DECIMAL_SCALE)}
        fixedDecimalScale={isFixedDecimalScale}
        decimalSeparator={decimalSeparator}
        valueIsNumericString={typeof value === "string"}
        onValueChange={onValueChange}
        type={"text"}
        inputMode={isNegative ? undefined : "decimal"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={isDisabled}
        placeholder={isReadOnly && !localValue ? readOnlyEmptyText : ""}
        autoComplete={autoComplete}
        form={form}
        list={list}
        accessKey={accessKey}
      />
    </InputNumberWrapper>
  );
};

export default InputNumber;
