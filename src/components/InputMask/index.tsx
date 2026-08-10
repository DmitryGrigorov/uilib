import React, {
  MouseEvent,
  useState,
  FocusEvent,
  KeyboardEvent,
  forwardRef
} from "react";
import { IMaskInput as IMaskInputRaw } from "react-imask";

// react-imask 7.6's prop typing is stricter than this component's usage
// pattern can satisfy - cast is type-only, verified working at runtime.
const IMaskInput = IMaskInputRaw as any;
import { useStateProps } from "../hooks/useStateProps";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";

import InputBase from "../InputBase";
import { ISharedInputBase } from "../InputBase/interfaces";

import { IInputMaskProps } from "./types";

const InputMask = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<IInputMaskProps>
>((props, ref) => {
  const {
    id,
    isAutoFocus,
    error,
    name,
    type,
    isDisabled,
    placeholder,
    tooltipContent,
    tooltipPosition,
    onIconLeftClick,
    onIconRightClick,
    title,
    onKeyDown,
    alignText,
    className,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    isShowMask: isShowMaskProp,
    isShowMaskOnFocus,
    placeholderChar = "_",
    mask,
    testId,
    isReadOnly,
    isRequired,
    size = "l",
    status,
    statusText,
    iconLeft,
    iconRight,
    isShowClearIcon,
    width,
    viewType,
    readOnlyEmptyText = "Not provided",
    onClear,
    autoComplete,
    form,
    list,
    accessKey,
    blocks,
    ...otherProps
  } = props;

  const [isFocused, setFocused] = useState<boolean>(false);
  const [localValue, setLocalValue] = useStateProps(value);
  const [isShowMask, setShowMask] = useStateProps<boolean>(
    isShowMaskProp === undefined ? false : isShowMaskProp
  );

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (!isReadOnly) {
      onFocus?.(event);
      isShowMaskOnFocus && setShowMask(true);
      setFocused(true);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    onBlur?.(event, event.target.value);
    isShowMaskOnFocus && setShowMask(false);
    setFocused(false);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    onKeyPress?.(event);
  };

  const handleClear = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDisabled && !isReadOnly) {
      setLocalValue("");
      onChange?.(event, "");
      onClear?.(event);
    }
  };

  const baseInputProps: ISharedInputBase = {
    error,
    placeholder,
    tooltipContent,
    tooltipPosition,
    type,
    title,
    onIconLeftClick,
    onIconRightClick,
    alignText,
    className,
    isDisabled: isDisabled || isReadOnly,
    isFocused,
    isHasValue: Boolean(localValue),
    onClear: handleClear,
    isShowMask,
    testId,
    isReadOnly,
    isRequired,
    size,
    status,
    statusText,
    iconLeft,
    iconRight,
    isShowClearIcon,
    isShowLabel: true,
    width,
    viewType
  };

  const handleAccept = (_value: string, _ref: any, event: InputEvent): void => {
    if (!isReadOnly && !isDisabled) {
      setLocalValue(_value);
      onChange?.(
        !event ? ({ target: _ref.el.input } as InputEvent) : event,
        _value,
        id
      );
    }
  };

  const isShowMaskComputed = (isShowMaskOnFocus && isFocused) || isShowMask;

  return (
    <InputBase testId={testId} {...baseInputProps} ref={ref} {...otherProps}>
      <IMaskInput
        type={type}
        data-testid={`input-mask_${testId}`}
        data-element="input-mask"
        id={id}
        name={name}
        autoFocus={isAutoFocus}
        value={isReadOnly && !localValue ? readOnlyEmptyText : localValue}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        onAccept={handleAccept as any}
        mask={isReadOnly && !localValue ? readOnlyEmptyText : mask}
        disabled={isDisabled}
        readOnly={isReadOnly}
        ref={props.refMask}
        autoComplete={autoComplete}
        form={form}
        list={list}
        accessKey={accessKey}
        placeholderChar={placeholderChar}
        lazy={!isShowMaskComputed}
        blocks={blocks as any}
      />
    </InputBase>
  );
});

InputMask.displayName = "InputMask";

export default InputMask;
