import React, {
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  useEffect,
  useRef,
  cloneElement
} from "react";
import { P1, useDebounce, getTextWidth } from "@dmitrygrigorov/components";
import { getWithBlock } from "./helpers";
import { TableButtonStyled } from "./style";
import { ITableButtonProps, buttonSizeDefault } from "./types";

const TableButton = forwardRef<
  HTMLButtonElement,
  PropsWithRef<PropsWithChildren<ITableButtonProps>>
>(
  (
    {
      children,
      icon,
      isDisabled,
      size = buttonSizeDefault,
      href,
      className,
      onClick,
      isPressed,
      ...props
    },
    ref
  ) => {
    const textButtonRef = useRef<HTMLDivElement>(null);

    const setButtonTitle = (): void => {
      if (textButtonRef.current) {
        const parent = textButtonRef.current.parentNode as HTMLElement;
        const parentWidth = getWithBlock(parent, Boolean(icon));
        const fontParent = getComputedStyle(parent).font;
        parent.setAttribute("title", "");

        if (typeof children === "string") {
          const childrenWidth = getTextWidth(children, fontParent);

          if (parentWidth < childrenWidth) {
            parent.setAttribute("title", children);
          }
        }
      }
    };

    const setButtonTitleDebounce = useDebounce(setButtonTitle, 500);

    useEffect(() => {
      window.addEventListener("resize", setButtonTitleDebounce);
      setButtonTitle();
      return () => window.removeEventListener("resize", setButtonTitleDebounce);
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      onClick && !isDisabled && !href && onClick(event);
    };
    return (
      <TableButtonStyled
        isPressed={isPressed}
        className={className}
        disabled={isDisabled}
        size={size}
        href={href}
        onClick={handleClick}
        ref={ref}
        {...props}>
        {icon &&
          cloneElement(icon, { className: "lead-icon", width: 16, height: 16 })}
        {typeof children === "string" ? (
          <P1
            className="button-text"
            type={size === "s" ? "phoenix" : "cygnus"}
            ref={textButtonRef}>
            {children}
          </P1>
        ) : (
          children
        )}
      </TableButtonStyled>
    );
  }
);

TableButton.displayName = "Button";

export default TableButton;
