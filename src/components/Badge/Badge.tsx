import React, { forwardRef } from "react";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { BadgeWrapper } from "./style";
import { IBadgeProps } from "./types";

const Badge = forwardRef<
  HTMLElement,
  TPropsWithAttributes<IBadgeProps, "button">
>(
  (
    {
      children,
      className,
      isDisabled,
      size = "m",
      isClick = false,
      colorType = "blue",
      testId = "badge",
      ...props
    },
    ref
  ) => (
    <BadgeWrapper
      className={className}
      isDisabled={isDisabled}
      size={size}
      ref={ref as any}
      isClick={isClick}
      colorType={colorType}
      data-testid={testId}
      {...props}>
      <P2 type={"musca"} className={"placeholder"}>
        {children}
      </P2>
    </BadgeWrapper>
  )
);

Badge.displayName = "Badge";

export default Badge;
