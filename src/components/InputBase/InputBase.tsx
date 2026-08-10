import React, { PropsWithChildren, forwardRef, useMemo } from "react";

import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { ISharedInputBase, IIconsBox, TPlaceholder } from "./interfaces";
import IconsBox from "./components/IconsBox";
import {
  RequiredStyle,
  TextStatusStyled,
  LabelStyled,
  InputWrapperStyled,
  PlaceholderStyled,
  IconStyled,
  IconRightStyled,
  InputLeadContentStyled
} from "./style";

const InputBase = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithChildren<ISharedInputBase>>
>((props, ref) => {
  const {
    error,
    type,
    isDisabled,
    placeholder,
    tooltipContent,
    tooltipPosition,
    alignText,
    className,
    children,
    isFocused,
    onClear,
    onPasswordToggle,
    width,
    isPasswordVisible,
    isHasValue,
    isShowClearIcon,
    isShowMask,
    testId = "testIDWithoutName",
    isReadOnly,
    isRequired,
    size = "l",
    status,
    statusText,
    iconLeft,
    iconRight,
    classNameIconBox,
    isShowLabel,
    classNameAddonsRight,
    classNameContent,
    classNamePlaceholder,
    onIconLeftClick,
    onIconRightClick,
    viewType = "round",
    ...otherProps
  } = props;

  const IconsBoxProps: IIconsBox = {
    isHasValue,
    isDisabled,
    isShowClearIcon,
    type,
    isPasswordVisible,
    tooltipContent,
    tooltipPosition,
    onClear,
    onPasswordToggle,
    classNameIconBox,
    isReadOnly,
    isRightContent: Boolean(iconRight),
    size
  };

  const getPlaceholder = (value: TPlaceholder): string => {
    if (typeof value === "string") {
      return value;
    } else {
      return isHasValue || isFocused ? (value[1] ?? "") : (value[0] ?? "");
    }
  };

  const isPlaceholder = useMemo<boolean>(() => {
    if (typeof placeholder === "undefined") {
      return false;
    }
    if (typeof placeholder === "string") {
      return placeholder.trim().length > 0;
    }
    if (Array.isArray(placeholder) && placeholder.length >= 2) {
      return true;
    }
    return false;
  }, [placeholder]);

  return (
    <LabelStyled width={width} data-testid={`${testId}_label`}>
      <InputWrapperStyled
        ref={ref}
        isFocused={isFocused}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        size={size}
        width={width}
        alignText={alignText}
        className={className}
        status={status}
        viewType={viewType}
        statusText={statusText}
        error={error}
        isHasValue={isHasValue}
        data-testid={testId}
        {...otherProps}>
        <InputLeadContentStyled
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isFocused={isFocused}
          isHasValue={isHasValue || isReadOnly}
          isPlaceholder={isPlaceholder}
          className={classNameContent}>
          {iconLeft && (
            <IconStyled
              isFocused={isFocused}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              onClick={onIconLeftClick}>
              {iconLeft}
            </IconStyled>
          )}
          {placeholder && (isShowLabel || (!isFocused && !isHasValue)) && (
            <PlaceholderStyled
              iconLeft={Boolean(iconLeft)}
              iconRight={Boolean(iconRight)}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              data-element="input-placeholder"
              data-testid={`${testId}-placeholder`}
              error={error}
              size={size}
              isFocused={isFocused}
              isHasValue={
                isHasValue || Boolean(isShowMask) || Boolean(isReadOnly)
              }
              title={isDisabled ? undefined : getPlaceholder(placeholder)}
              status={status}
              className={classNamePlaceholder}>
              <span className="placeholder-text">
                {getPlaceholder(placeholder)}
              </span>
              {isRequired && (
                <>
                  &nbsp;
                  <RequiredStyle isDisabled={isDisabled || isReadOnly}>
                    *
                  </RequiredStyle>
                </>
              )}
            </PlaceholderStyled>
          )}
          {children}
        </InputLeadContentStyled>
        <IconsBox {...IconsBoxProps} />
        {iconRight && (
          <IconRightStyled
            isFocused={isFocused}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            className={classNameAddonsRight}
            onClick={(e) => {
              onIconRightClick && onIconRightClick();

              e.preventDefault();
            }}>
            {iconRight}
          </IconRightStyled>
        )}
      </InputWrapperStyled>
      {typeof error === "string" && Boolean(error.trim()) && (
        <TextStatusStyled status="error" data-element="input-error" type="pavo">
          {error}
        </TextStatusStyled>
      )}
      {status && statusText && (
        <TextStatusStyled
          status={status}
          data-element="input-text"
          data-testid={`${testId}_status-text`}
          type="pavo">
          {statusText}
        </TextStatusStyled>
      )}
    </LabelStyled>
  );
});

InputBase.displayName = "InputBase";

export default InputBase;
