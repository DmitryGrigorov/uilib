import React, { forwardRef, useRef, useMemo, useEffect } from "react";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { ISliderProps, TSliderValue } from "./types";
import {
  SliderWrapper,
  TagStyled,
  SliderLeadTextWrapper,
  SliderTrailTextWrapper,
  SliderInputStyled
} from "./styles";
import { useSlider } from "./helpers/useSlider";
import { defaultTooltipFormatter } from "./helpers/defaultTooltipFormatter";

export const SliderComponent = <Range extends boolean = false>(
  props: TPropsWithAttributes<ISliderProps<Range>>,
  ref?: React.Ref<HTMLDivElement>
): React.ReactElement => {
  const {
    isDisabled = false,
    value,
    isRange = false as Range,
    max = 100,
    min = 0,
    step = 1,
    onChange,
    direction = "horizontal",
    defaultValue,
    isReset,
    leadText,
    trailText,
    status = "info",
    isTooltip = true,
    size = "m",
    className,
    tooltipFormatter = defaultTooltipFormatter,
    style,
    width,
    height,
    testId = "slider",
    ...otherProps
  } = props;
  const leftHintRef = useRef<HTMLButtonElement>(null);
  const rightHintRef = useRef<HTMLButtonElement>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const sliderControlRef = useRef<HTMLDivElement>(null);
  const _value = useMemo<TSliderValue<Range>>(() => {
    if (value === undefined) {
      if (isRange) {
        return [min, max] as TSliderValue<Range>;
      }
      return 0 as TSliderValue<Range>;
    }
    return value;
  }, [value]);

  const fromDefaultValue = useMemo(() => {
    if (isRange) {
      if (typeof (_value as [number, number])[0] === "number") {
        return (_value as [number, number])[0];
      } else if (
        defaultValue &&
        typeof (defaultValue as [number, number])[0] === "number"
      ) {
        return (defaultValue as [number, number])[0];
      }
    }
    return min;
  }, [isRange, defaultValue, _value]);

  const toDefaultValue = useMemo(() => {
    if (isRange) {
      if (typeof (_value as [number, number])[1] === "number") {
        return (_value as [number, number])[1];
      } else if (
        defaultValue &&
        typeof (defaultValue as [number, number])[1] === "number"
      ) {
        return (defaultValue as [number, number])[1];
      }
    } else if (typeof _value === "number") {
      return _value;
    } else if (typeof defaultValue === "number") {
      return defaultValue;
    }
    return max;
  }, [isRange, defaultValue, _value]);

  useEffect(() => {
    if (direction === "vertical" && sliderControlRef.current) {
      if (toInputRef.current) {
        toInputRef.current.style.width = `${sliderControlRef.current.clientHeight}px`;
      }
      if (fromInputRef.current) {
        fromInputRef.current.style.width = `${sliderControlRef.current.clientHeight}px`;
      }
    } else {
      if (toInputRef.current) {
        toInputRef.current.style.removeProperty("width");
      }
      if (fromInputRef.current) {
        fromInputRef.current.style.removeProperty("width");
      }
    }
  }, [direction]);

  const {
    currentValue,
    handleFromInput,
    handleToInput,
    onResetRight,
    onResetLeft,
    handleClick
  } = useSlider<Range>({
    isDisabled,
    isRange,
    value: _value,
    min,
    max,
    step,
    onChange,
    hintsRef: [leftHintRef, rightHintRef],
    direction,
    defaultValue,
    inputsRef: [fromInputRef, toInputRef],
    status
  });

  return (
    <SliderWrapper
      size={size}
      className={className}
      style={style}
      ref={ref}
      direction={direction}
      width={width}
      height={height}
      data-testid={testId}
      {...otherProps}>
      {(leadText || (trailText && direction === "horizontal")) && (
        <SliderLeadTextWrapper size={size}>
          {leadText && (
            <P2 type="corvus" className="slider__lead-text">
              {leadText}
            </P2>
          )}
          {trailText && direction === "horizontal" && (
            <P2 type="corvus" className="slider__trail-text">
              {trailText}
            </P2>
          )}
        </SliderLeadTextWrapper>
      )}
      <div
        className="sliders_control"
        onMouseDown={handleClick}
        ref={sliderControlRef}>
        {isTooltip && isRange && (
          <TagStyled
            sizeSlider={size}
            direction={direction}
            ref={leftHintRef}
            size="xs"
            isClosable={isReset && !isDisabled}
            onClickClose={onResetLeft}>
            {tooltipFormatter((currentValue as [number, number])[0])}
          </TagStyled>
        )}
        {isTooltip && (
          <TagStyled
            sizeSlider={size}
            direction={direction}
            ref={rightHintRef}
            size="xs"
            isClosable={isReset && !isDisabled}
            onClickClose={onResetRight}>
            {tooltipFormatter(
              isRange
                ? (currentValue as [number, number])[1]
                : (currentValue as number)
            )}
          </TagStyled>
        )}
        {isRange && direction === "horizontal" && (
          <SliderInputStyled
            direction={direction}
            sizeS={size}
            status={status}
            ref={fromInputRef}
            id="fromSlider"
            type="range"
            step={step}
            defaultValue={fromDefaultValue}
            min={min}
            max={max}
            onInput={handleFromInput}
            disabled={isDisabled}
          />
        )}
        <SliderInputStyled
          direction={direction}
          sizeS={size}
          status={status}
          step={step}
          ref={toInputRef}
          id="toSlider"
          type="range"
          defaultValue={toDefaultValue}
          min={min}
          max={max}
          onInput={handleToInput}
          disabled={isDisabled}
        />
        {isRange && direction === "vertical" && (
          <SliderInputStyled
            direction={direction}
            sizeS={size}
            status={status}
            ref={fromInputRef}
            id="fromSlider"
            type="range"
            step={step}
            defaultValue={fromDefaultValue}
            min={min}
            max={max}
            onInput={handleFromInput}
            disabled={isDisabled}
          />
        )}
      </div>
      {trailText && direction === "vertical" && (
        <SliderTrailTextWrapper direction={direction} size={size}>
          <P2 type="corvus" className="slider__trail-text">
            {trailText}
          </P2>
        </SliderTrailTextWrapper>
      )}
    </SliderWrapper>
  );
};

export default forwardRef(SliderComponent) as typeof SliderComponent;
