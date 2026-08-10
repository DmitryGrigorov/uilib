import React, { forwardRef, PropsWithChildren } from "react";
import P2 from "../typography/P2";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { DateBoxWrapper } from "./style";
import { IDateBoxProps } from "./types";

const DateBox = forwardRef<
  HTMLButtonElement,
  TPropsWithAttributes<PropsWithChildren<IDateBoxProps>, "button">
>(
  (
    {
      children,
      viewType,
      isDisabled,
      className,
      onClick,
      size = "l",
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (onClick && !isDisabled) {
        onClick(event);
      }
    };

    return (
      <DateBoxWrapper
        className={className}
        viewType={viewType}
        disabled={isDisabled}
        onClick={handleClick}
        size={size}
        ref={ref}
        {...props}>
        <P2 type={viewType === "current" ? "pavo" : "cetus"}>{children}</P2>
      </DateBoxWrapper>
    );
  }
);

DateBox.displayName = "DateBox";

export default DateBox;
