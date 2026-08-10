import React, {
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  cloneElement
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { StatusStyled as StatusStyledRaw } from "./styles";
import { IStatusProps } from "./types";

// styled-components v6's generic prop-merging widens these literal props
// (type/size) to string/number in this component chain's overload
// resolution - cast is type-only, the underlying component/props are
// unchanged.
const StatusStyled = StatusStyledRaw as any;

const Status = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<IStatusProps>>>
>(
  (
    {
      leadIcon,
      isFilled,
      trailIcon,
      children,
      status,
      colorType,
      className,
      isDisabled,
      isPressed,
      canHover,
      testId = "status",
      ...props
    },
    ref
  ) => (
    <StatusStyled
      type="phoenix"
      size={16}
      colorType={colorType || "blue"}
      isDisabled={isFilled ? isDisabled : false}
      isPressed={isFilled ? isPressed : false}
      canHover={canHover}
      status={status}
      isFilled={isFilled}
      className={className}
      data-testid={testId}
      ref={ref}
      {...props}>
      {leadIcon && cloneElement(leadIcon, { className: "status__icon" })}
      {children}
      {trailIcon && cloneElement(trailIcon, { className: "status__icon" })}
    </StatusStyled>
  )
);

Status.displayName = "Status";

export default Status;
