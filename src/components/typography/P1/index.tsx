import React, { forwardRef, PropsWithChildren, PropsWithRef } from "react";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import { IP1Props } from "./types";
import { P1Styled } from "./styles";

const P1 = forwardRef<
  HTMLElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<IP1Props>>, "span">
>(
  (
    {
      className,
      title,
      children,
      size,
      type,
      onClick,
      color,
      as = "span",
      ...props
    },
    ref
  ) => (
    <P1Styled
      size={size}
      type={type}
      onClick={onClick}
      className={className}
      color={color}
      as={as}
      title={title}
      ref={ref}
      {...props}>
      {children}
    </P1Styled>
  )
);

P1.displayName = "P1";

export default P1;
