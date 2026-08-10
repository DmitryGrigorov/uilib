import React, {
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  MouseEvent
} from "react";
import { ThemeContext } from "styled-components";
import { LIGHT_THEME } from "../../Pallette/themes";
import useDebounce from "../../hooks/useDebounce";
import { useStateProps } from "../../hooks/useStateProps";
import {
  TSliderValue,
  TOnChangeSlider,
  TSliderDirection,
  TSliderStatus
} from "../types";

export interface IUseSliderProps<Range extends boolean = false> {
  isDisabled: boolean;
  isRange: Range;
  value: TSliderValue<Range>;
  min: number;
  max: number;
  step?: number;
  onChange?: TOnChangeSlider<Range>;
  hintsRef: React.RefObject<HTMLButtonElement | null>[];
  direction?: TSliderDirection;
  defaultValue?: TSliderValue<Range>;
  inputsRef: React.RefObject<HTMLInputElement | null>[];
  status: TSliderStatus;
}

interface IUseSliderValues<Range extends boolean> {
  currentValue: TSliderValue<Range>;
  onResetLeft: (event: React.MouseEvent<HTMLDivElement>) => void;
  onResetRight: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleFromInput: (event: FormEvent<HTMLInputElement>) => void;
  handleToInput: (event: FormEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
}

interface IGetValidValueProps {
  value: number;
  min: number;
  max: number;
}

const getParsed = (
  currentFrom: HTMLInputElement | null,
  currentTo: HTMLInputElement,
  min: number
): [number, number] => {
  const from = currentFrom ? parseInt(currentFrom.value, 10) : min;
  const to = parseInt(currentTo.value, 10);
  return [from, to];
};

const getValidValue = ({ value, max, min }: IGetValidValueProps): number => {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};

const getCorrectPositionHint = (
  position: number,
  direction?: TSliderDirection
): number => {
  if (direction === "vertical") {
    if (position > 81 && position <= 100) {
      return position - 4;
    } else if (position >= 40) {
      return position - 3;
    }
    return position;
  }
  return position;
};

const getMarginVerticalHint = (value: number): number => {
  if (value < 10) {
    return 10;
  } else if (value < 20) {
    return 7;
  } else if (value < 100) {
    return 4;
  }
  return 0;
};

const getMarginHorizontalHint = (width: number): number => {
  if (width <= 21) {
    return -5;
  } else if (width <= 23) {
    return -7;
  } else if (width <= 27) {
    return -12;
  } else if (width <= 30) {
    return -17;
  }
  return -22;
};

export function useSlider<Range extends boolean>({
  min,
  max,
  value,
  defaultValue,
  isRange,
  inputsRef,
  hintsRef,
  onChange,
  status,
  isDisabled,
  direction,
  step
}: IUseSliderProps<Range>): IUseSliderValues<Range> {
  const theme = useContext(ThemeContext) || LIGHT_THEME;
  const [currentValue, setCurrentValue] =
    useStateProps<TSliderValue<Range>>(value);

  const directionOffset = useMemo(() => {
    if (direction === "vertical") {
      return "bottom";
    }
    return "left";
  }, [direction]);

  const [fromPosition, toPosition, rangeDistance] = useMemo(() => {
    const _rangeDistance = max - min;
    let _fromPosition = 0;
    let _toPosition: number;
    if (isRange) {
      _fromPosition = (currentValue as [number, number])[0] - min;
      _toPosition = (currentValue as [number, number])[1] - min;
    } else {
      _toPosition = (currentValue as TSliderValue<false>) - min;
    }
    return [_fromPosition, _toPosition, _rangeDistance];
  }, [max, currentValue, isRange, min]);

  const defineBackgroundColor = (): string => {
    switch (status.toLocaleLowerCase()) {
      case "success":
        return theme.colors.componentPrimaryTealDefault;
      case "error":
        return theme.colors.componentPrimaryRedDefault;
      case "warning":
        return theme.colors.componentPrimaryAmberDefault;
      default:
        return theme.colors.componentPrimaryOrangeDefault;
    }
  };

  // Directly mutates ref-held DOM nodes (hint offsets, track fill/gradient,
  // input values) instead of going through React state, so slider drag
  // interactions don't trigger a re-render on every pointer move.
  /* eslint-disable react-hooks/immutability */
  const fillSlider = (): void => {
    if (inputsRef[1].current) {
      inputsRef[1].current.style.background = `linear-gradient(
      to right,
      ${theme.colors.neutral2} 0%,
      ${theme.colors.neutral2} ${(fromPosition / rangeDistance) * 100}%,
      ${isDisabled ? theme.colors.neutral5 : defineBackgroundColor()} ${
        (fromPosition / rangeDistance) * 100
      }%,
      ${isDisabled ? theme.colors.neutral5 : defineBackgroundColor()} ${
        (toPosition / rangeDistance) * 100
      }%,
      ${theme.colors.neutral2} ${(toPosition / rangeDistance) * 100}%,
      ${theme.colors.neutral2} 100%)`;
    }
  };

  useEffect(() => {
    const offsetFrom = (fromPosition / rangeDistance) * 100;
    const offsetTo = (toPosition / rangeDistance) * 100;
    if (hintsRef[0].current) {
      hintsRef[0].current.style[directionOffset] = `${getCorrectPositionHint(
        offsetFrom,
        direction
      )}%`;
    }
    if (hintsRef[1].current) {
      hintsRef[1].current.style[directionOffset] = `${getCorrectPositionHint(
        offsetTo,
        direction
      )}%`;
    }
    if (direction === "vertical") {
      if (isRange) {
        if (hintsRef[0].current) {
          hintsRef[0].current.style.marginLeft = `${getMarginVerticalHint(
            (currentValue as [number, number])[0]
          )}px`;
        }
        if (hintsRef[1].current) {
          hintsRef[1].current.style.marginLeft = `${getMarginVerticalHint(
            (currentValue as [number, number])[1]
          )}px`;
        }
      } else if (hintsRef[1].current) {
        hintsRef[1].current.style.marginLeft = `${getMarginVerticalHint(
          currentValue as number
        )}px`;
      }
    } else if (isRange) {
      if (hintsRef[0].current) {
        hintsRef[0].current.style.marginLeft = `${getMarginHorizontalHint(
          hintsRef[0].current.clientWidth
        )}px`;
      }
      if (hintsRef[1].current) {
        hintsRef[1].current.style.marginLeft = `${getMarginHorizontalHint(
          hintsRef[1].current.clientWidth
        )}px`;
      }
    } else if (hintsRef[1].current) {
      hintsRef[1].current.style.marginLeft = `${getMarginHorizontalHint(
        hintsRef[1].current.clientWidth
      )}px`;
    }
    fillSlider();
  }, [fromPosition, toPosition, direction]);

  useEffect(() => {
    if (direction === "horizontal") {
      if (hintsRef[0].current) {
        hintsRef[0].current.style.removeProperty("bottom");
      }
      if (hintsRef[1].current) {
        hintsRef[1].current.style.removeProperty("bottom");
      }
    } else if (direction === "vertical") {
      if (hintsRef[0].current) {
        hintsRef[0].current.style.removeProperty("left");
      }
      if (hintsRef[1].current) {
        hintsRef[1].current.style.removeProperty("left");
      }
    }
  }, [direction]);

  useEffect(() => {
    fillSlider();
  }, [status, isDisabled, min, max]);

  useEffect(() => {
    if (typeof value !== "undefined") {
      const targetValue = isRange
        ? [
            getValidValue({ value: (value as [number, number])[0], min, max }),
            getValidValue({ value: (value as [number, number])[1], min, max })
          ]
        : getValidValue({ value: value as TSliderValue<false>, min, max });
      setCurrentValue(targetValue as TSliderValue<Range>);
      if (isRange && inputsRef[0].current && inputsRef[1].current) {
        inputsRef[0].current.value = String(
          (targetValue as [number, number])[0]
        );
        inputsRef[1].current.value = String(
          (targetValue as [number, number])[1]
        );
      } else if (inputsRef[1].current) {
        inputsRef[1].current.value = String(targetValue);
      }
    }
  }, [isRange, value, min, max]);

  const handleChangeDebounce = useDebounce(
    (event: FormEvent<HTMLInputElement>, _values: TSliderValue<Range>) => {
      onChange?.(event, _values);
    },
    500
  );

  const setToggleAccessible = (currentTarget: HTMLInputElement): void => {
    if (inputsRef[1].current) {
      if (Number(currentTarget.value) <= 0) {
        inputsRef[1].current.style.zIndex = "2";
      } else {
        inputsRef[1].current.style.zIndex = "0";
      }
    }
  };
  const handleOnResetLeft = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (defaultValue) {
      if (
        Array.isArray(defaultValue) &&
        Array.isArray(currentValue) &&
        isRange
      ) {
        onChange?.(event, [
          defaultValue[0],
          currentValue[1]
        ] as TSliderValue<Range>);
        setCurrentValue(
          (val) =>
            [
              defaultValue[0],
              (val as [number, number])[1]
            ] as TSliderValue<Range>
        );
        if (inputsRef[0].current) {
          inputsRef[0].current.value = String(defaultValue[0]);
        }
      } else {
        onChange?.(event, defaultValue);
        setCurrentValue(defaultValue);
      }
    } else if (!Array.isArray(defaultValue) && isRange) {
      onChange?.(event, [
        min,
        (currentValue as [number, number])[1]
      ] as TSliderValue<Range>);
      setCurrentValue(
        (val) => [min, (val as [number, number])[1]] as TSliderValue<Range>
      );
      if (inputsRef[0].current) {
        inputsRef[0].current.value = String(min);
      }
    }
    fillSlider();
  };

  const handleOnResetRight = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (defaultValue) {
      if (
        Array.isArray(defaultValue) &&
        Array.isArray(currentValue) &&
        isRange
      ) {
        onChange?.(event, [
          currentValue[0],
          defaultValue[1]
        ] as TSliderValue<Range>);
        setCurrentValue(
          (val) =>
            [
              (val as [number, number])[0],
              defaultValue[1]
            ] as TSliderValue<Range>
        );
        if (inputsRef[1].current) {
          inputsRef[1].current.value = String(defaultValue[1]);
        }
      } else if (inputsRef[1].current) {
        onChange?.(event, defaultValue);
        setCurrentValue(defaultValue);
        inputsRef[1].current.value = String(defaultValue);
      }
    } else if (!Array.isArray(defaultValue) && isRange) {
      onChange?.(event, [
        (currentValue as [number, number])[0],
        max
      ] as TSliderValue<Range>);
      setCurrentValue(
        (val) => [(val as [number, number])[0], max] as TSliderValue<Range>
      );
      if (inputsRef[1].current) {
        inputsRef[1].current.value = String(max);
      }
    } else if (inputsRef[1].current) {
      onChange?.(event, min as TSliderValue<Range>);
      setCurrentValue(min as TSliderValue<Range>);
      inputsRef[1].current.value = String(min);
    }
  };

  const handleFromInput = (event: FormEvent<HTMLInputElement>): void => {
    const fromSlider = inputsRef[0].current;
    const toSlider = inputsRef[1].current;
    if (fromSlider && toSlider && isRange) {
      const [from, to] = getParsed(fromSlider, toSlider, min);
      const _value = from > to ? to : from;
      fromSlider.value = String(_value);
      setCurrentValue(
        (previousValue) =>
          [
            _value,
            (previousValue as [number, number])[1]
          ] as TSliderValue<Range>
      );
      handleChangeDebounce(event, [
        _value,
        (currentValue as [number, number])[1]
      ] as TSliderValue<Range>);
    }
  };

  const handleToInput = (event: FormEvent<HTMLInputElement>): void => {
    const fromSlider = inputsRef[0].current;
    const toSlider = inputsRef[1].current;
    if (toSlider) {
      const [from, to] = getParsed(fromSlider, toSlider, min);
      const _value = from <= to ? to : from;
      toSlider.value = String(_value);
      setToggleAccessible(toSlider);
      fillSlider();
      if (isRange) {
        setCurrentValue(
          (previousValue) =>
            [
              (previousValue as [number, number])[0],
              _value
            ] as TSliderValue<Range>
        );
        handleChangeDebounce(event, [
          (currentValue as [number, number])[0],
          _value
        ] as TSliderValue<Range>);
      } else {
        setCurrentValue(_value as TSliderValue<Range>);
        handleChangeDebounce(event, _value as TSliderValue<Range>);
      }
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    const { x, width, y } = event.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = event;
    let positionClick: number;
    let valueClick: number;
    if (direction === "horizontal") {
      positionClick = clientX - x;
      valueClick = Math.abs(
        Math.round(rangeDistance * (positionClick / width))
      );
    } else {
      positionClick = clientY - y;
      valueClick = Math.abs(
        Math.round(rangeDistance * (positionClick / width)) - max
      );
    }
    if (step) {
      valueClick = Math.floor((valueClick + step - 1) / step) * step;
    }

    if (valueClick >= min && valueClick <= max) {
      if (isRange) {
        const distanceValue1 = Math.abs(
          valueClick - (currentValue as [number, number])[0]
        );
        const distanceValue2 = Math.abs(
          valueClick - (currentValue as [number, number])[1]
        );
        if (distanceValue1 < distanceValue2 && inputsRef[0].current) {
          inputsRef[0].current.value = String(valueClick);
          onChange?.(event, [
            valueClick,
            (currentValue as [number, number])[1]
          ] as TSliderValue<Range>);
          setCurrentValue(
            (prevState) =>
              [
                valueClick,
                (prevState as [number, number])[1]
              ] as TSliderValue<Range>
          );
        } else if (inputsRef[1].current) {
          inputsRef[1].current.value = String(valueClick);
          onChange?.(event, [
            (currentValue as [number, number])[0],
            valueClick
          ] as TSliderValue<Range>);
          setCurrentValue(
            (prevState) =>
              [
                (prevState as [number, number])[0],
                valueClick
              ] as TSliderValue<Range>
          );
        }
      } else if (inputsRef[1].current) {
        inputsRef[1].current.value = String(valueClick);
        onChange?.(event, valueClick as TSliderValue<Range>);
        setCurrentValue(valueClick as TSliderValue<Range>);
      }
    }
  };
  /* eslint-enable react-hooks/immutability */

  return {
    currentValue,
    onResetLeft: handleOnResetLeft,
    onResetRight: handleOnResetRight,
    handleFromInput,
    handleToInput,
    handleClick
  };
}
