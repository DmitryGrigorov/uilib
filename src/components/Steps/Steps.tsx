import React, { FC, MouseEvent } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { StepWrapper } from "./styles";
import { IStepsItem, IStepsProps } from "./types";
import StepItem, { IStepItemProps } from "./components/StepItem";

const Steps: FC<TPropsWithAttributes<IStepsProps>> = ({
  size,
  current,
  onItemClick,
  getItemDisabled,
  getItemTitle,
  getItemStatus,
  onChangeCurrent,
  getItemKey,
  getItemOnClick,
  className,
  classNameItem,
  width,
  height,
  direction = "horizontal",
  steps,
  ...otherProps
}) => {
  const getNewProps = (item: IStepsItem, _index: number): IStepItemProps => {
    const stepNumber = _index + 1;
    const status =
      getItemStatus?.(item) ??
      (item.status || (stepNumber < current && "completed") || "default");
    const isDisabled = getItemDisabled?.(item) ?? item.isDisabled;
    const title = getItemTitle?.(item) || item.title;

    const stepOnClick = (event: MouseEvent<HTMLDivElement>): void => {
      getItemOnClick
        ? getItemOnClick(item)?.(event, item)
        : onItemClick?.(event, item);
    };

    return {
      ...item,
      keyLocal: item.key,
      size,
      stepOnClick,
      status,
      isCurrent: stepNumber === current,
      direction,
      stepNumber,
      title,
      isLast: stepNumber === steps?.length,
      isDisabled: isDisabled || (!item.status && stepNumber > current),
      onChangeCurrent
    };
  };

  return (
    <StepWrapper
      direction={direction}
      height={height}
      className={className}
      width={width}
      {...otherProps}>
      {steps?.length > 0 &&
        steps.map((step, index) => {
          const props = getNewProps(step, index);
          return (
            <React.Fragment key={getItemKey?.(step) || step.key}>
              <StepItem className={classNameItem} {...props} />
            </React.Fragment>
          );
        })}
    </StepWrapper>
  );
};

export default Steps;
