import React, {
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  useEffect,
  useRef,
  cloneElement
} from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import useDebounce from "../hooks/useDebounce";
import getTextWidth from "../utils/getTextWidth";
import { ButtonComponent, PreloaderStyled } from "./style";
import { IButtonProps, buttonSizeDefault } from "./types";
import { getWithBlock } from "./helpers";

const Button = forwardRef<
  HTMLButtonElement,
  TPropsWithAttributes<
    PropsWithRef<PropsWithChildren<IButtonProps>>,
    "button" | "a"
  >
>(
  (
    {
      children,
      icon,
      viewType = "primary",
      isDisabled,
      size = buttonSizeDefault,
      color,
      width,
      href,
      className,
      onClick,
      onKeyPress,
      onKeyUp,
      testId = "button",
      isPressed,
      isLoading,
      as = "button",
      ...props
    },
    ref
  ) => {
    const textButtonRef = useRef<HTMLDivElement>(null);

    const setButtonTitle = (): void => {
      if (textButtonRef.current) {
        const parent = textButtonRef.current.parentNode as HTMLElement;
        const parentWidth = getWithBlock(parent, Boolean(icon), size);
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
      if (isLoading) {
        event.preventDefault();
        return;
      }
      if (onClick && !isDisabled && !href) {
        onClick(event);
      }
    };

    const handleKeyPress = (
      event: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      if (isLoading) {
        event.preventDefault();
        return;
      }
      if (onKeyPress && !isDisabled && !href) {
        onKeyPress(event);
      }
    };

    const handleKeyUp = (
      event: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      if (isLoading) {
        event.preventDefault();
      } else {
        onKeyUp?.(event);
      }
    };

    return (
      <ButtonComponent
        isPressed={isPressed}
        className={className}
        viewType={viewType}
        disabled={isDisabled}
        size={size}
        as={viewType === "link" && href ? "a" : as}
        href={href}
        $color={color}
        width={width}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        ref={ref}
        $content={children}
        data-testid={testId}
        isLoading={isLoading}
        {...props}>
        {isLoading && viewType === "icon" ? (
          <PreloaderStyled viewType={viewType} size={size} $color={color} />
        ) : (
          <>
            {isLoading && (
              <PreloaderStyled viewType={viewType} size={size} $color={color} />
            )}
            {!isLoading &&
              icon &&
              viewType !== "icon" &&
              cloneElement(icon, {
                className: "lead-icon",
                width: 16,
                height: 16
              })}
            {typeof children === "string" ? (
              <div className="button-text" ref={textButtonRef}>
                {children}
              </div>
            ) : viewType === "icon" ? (
              cloneElement(
                children as React.ReactElement,
                {
                  className: "button__icon",
                  width: size === "l" ? 24 : 16,
                  height: size === "l" ? 24 : 16
                } as object
              )
            ) : (
              children
            )}
          </>
        )}
      </ButtonComponent>
    );
  }
);

Button.displayName = "Button";

export default Button;
