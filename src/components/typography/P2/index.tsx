import React, { forwardRef, PropsWithChildren, PropsWithRef } from "react";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import { IP2Props } from "./types";
import { P2Styled } from "./styles";

const P2 = forwardRef<
  HTMLElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<IP2Props>>, "span">
>(
  (
    { className, children, size, type, onClick, color, as = "span", ...props },
    ref
  ) => (
    <P2Styled
      size={size}
      type={type}
      onClick={onClick}
      className={className}
      color={color}
      as={as}
      ref={ref}
      {...props}>
      {children}
    </P2Styled>
  )
);

P2.displayName = "P2";

export default P2;
