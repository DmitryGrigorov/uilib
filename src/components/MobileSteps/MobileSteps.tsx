import React, { FC, useEffect, useMemo, useRef } from "react";
import { IconArrowLeft1, IconArrowRight1 } from "@dmitrygrigorov/icons";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { useStateProps } from "../hooks/useStateProps";
import {
  MobileStepsWrapper,
  StepButton,
  StepGalleryStyle,
  StepPoint,
  StepProgressStyle
} from "./styles";
import { IMobileStepsProps } from "./types";

const MobileSteps: FC<TPropsWithAttributes<IMobileStepsProps>> = ({
  type,
  width,
  steps,
  current,
  getStepKey,
  onChange,
  className,
  ...otherProps
}) => {
  const minStepValue = useMemo(() => (type === "progress" ? 0 : 1), [type]);

  const [_current, _setCurrent] = useStateProps(
    Math.min(Math.max(current, minStepValue), steps)
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!isInitialMount.current) {
      onChange?.(_current);
    } else {
      isInitialMount.current = false;
    }
  }, [_current]);

  const getPercent = (): number => Math.round((_current / steps) * 100);

  const handleNext = (): void => _setCurrent(Math.min(steps, _current + 1));
  const handlePrevious = (): void =>
    _setCurrent(Math.max(minStepValue, _current - 1));

  return (
    <MobileStepsWrapper
      className={className}
      width={width}
      type={type}
      {...otherProps}>
      <StepButton
        size="xs"
        isDisabled={_current === minStepValue}
        onClick={handlePrevious}
        icon={<IconArrowLeft1 />}
        viewType="ghost"
      />
      {type === "progress" ? (
        <StepProgressStyle percent={getPercent()}>
          <span className="step-progress-bar"></span>
        </StepProgressStyle>
      ) : (
        <StepGalleryStyle>
          {Array(steps)
            .fill(0)
            .map((_, index) => {
              const stepIndex = index + 1;
              return (
                <StepPoint
                  isCurrent={_current === stepIndex}
                  key={`step-point-${getStepKey?.(stepIndex) || steps - index}`}
                />
              );
            })}
        </StepGalleryStyle>
      )}
      <StepButton
        size="xs"
        isDisabled={_current === steps}
        onClick={handleNext}
        icon={<IconArrowRight1 />}
        viewType="ghost"
      />
    </MobileStepsWrapper>
  );
};

export default MobileSteps;
