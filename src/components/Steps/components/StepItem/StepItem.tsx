import React, { FC, MouseEventHandler, useMemo } from "react";
import {
  IconClose,
  IconTick,
  IconInfo,
  IconClock1
} from "@dmitrygrigorov/icons";
import { P1 } from "../../../typography";
import Divider from "../../../Divider";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import {
  StepItemVertical as StepItemVerticalRaw,
  Description,
  NumberStep,
  Title,
  StepItemHorizontal as StepItemHorizontalRaw
} from "./styles";
import { IStepItemProps } from "./";

// styled-components v6's generic prop-merging (via .attrs()) widens this
// component chain's overload resolution beyond what TS can verify here -
// casts are type-only, the underlying components/props are unchanged.
const StepItemVertical = StepItemVerticalRaw as any;
const StepItemHorizontal = StepItemHorizontalRaw as any;

const StepItem: FC<TPropsWithAttributes<IStepItemProps>> = ({
  status,
  isCurrent,
  isDisabled,
  size,
  description,
  stepOnClick,
  onChangeCurrent,
  title,
  className,
  direction,
  stepNumber,
  isLast,
  keyLocal,
  ...otherProps
}) => {
  const handelClick: MouseEventHandler<HTMLDivElement> = (event): void => {
    if (isDisabled) {
      return;
    }
    onChangeCurrent?.({
      title,
      isDisabled,
      status,
      description,
      key: keyLocal
    });
    stepOnClick?.(event);
  };

  const StatusIcon = useMemo(() => {
    if (!status && (isCurrent || isDisabled)) {
      return null;
    }
    switch (status) {
      case "error":
        return <IconClose width={16} height={16} />;
      case "warning":
        return <IconInfo width={16} height={16} />;
      case "completed":
        return <IconTick width={16} height={16} />;
      case "waiting":
        return <IconClock1 width={16} height={16} />;
      default:
        return null;
    }
  }, [size, status, isDisabled, isCurrent]);

  return direction === "horizontal" ? (
    <StepItemHorizontal
      status={status}
      isDisabled={isDisabled}
      className={className}
      isCurrent={isCurrent}
      isChange={!!onChangeCurrent}
      {...otherProps}>
      <div className="step-item-row">
        <NumberStep onClick={handelClick} className="step-item-number">
          {StatusIcon || <P1 type="cygnus">{stepNumber}</P1>}
        </NumberStep>
        {size !== "s" && (
          <Title
            onClick={handelClick}
            className="step-item-title"
            type="phoenix">
            {title}
          </Title>
        )}
        {!isLast && <Divider className="step-item-divider" />}
      </div>
      {size === "l" && description && (
        <Description className="step-item-description" type="cetus">
          {description}
        </Description>
      )}
    </StepItemHorizontal>
  ) : (
    <StepItemVertical
      status={status}
      className={className}
      isDisabled={isDisabled}
      isCurrent={isCurrent}
      {...otherProps}>
      <div>
        <NumberStep onClick={handelClick} className="step-item-number">
          {StatusIcon || <P1 type="cygnus">{stepNumber}</P1>}
        </NumberStep>
        {!isLast && (
          <Divider direction="column" className="step-item-divider" />
        )}
      </div>
      <div onClick={handelClick} className="step-item-text">
        {size !== "s" && (
          <Title className="step-item-title" type="phoenix">
            {title}
          </Title>
        )}
        {size === "l" && description && (
          <Description className="step-item-description" type="cetus">
            {description}
          </Description>
        )}
      </div>
    </StepItemVertical>
  );
};

export default StepItem;
