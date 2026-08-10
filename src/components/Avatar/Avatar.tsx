import React, { forwardRef, useMemo, cloneElement } from "react";

import { IconEdit2, IconForbidden2 } from "@dmitrygrigorov/icons";
import H from "../typography/H";
import P1 from "../typography/P1";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IAvatarProps } from "./types";
import { AvatarStyle, OnlineStatus, AvatarWrapper } from "./style";

export const Avatar = forwardRef<
  HTMLButtonElement,
  TPropsWithAttributes<IAvatarProps>
>(
  (
    {
      className,
      text,
      hoverIcon = <IconEdit2 />,
      icon,
      disabledIcon = <IconForbidden2 />,
      image,
      onClick,
      isDisabled,
      status,
      size = "xl",
      as = "button",
      testId = "avatar",
      ...props
    },
    ref
  ) => {
    const initials = useMemo(() => {
      if (!text) {
        return "";
      }
      return text.slice(0, size === "xs" ? 1 : 2).toLocaleUpperCase();
    }, [text]);

    return (
      <AvatarWrapper className={className} data-testid={testId}>
        <AvatarStyle
          onClick={onClick}
          disabled={isDisabled}
          image={image}
          ref={ref}
          size={size}
          as={as}
          {...props}>
          {!isDisabled &&
            hoverIcon &&
            cloneElement(hoverIcon, {
              width: 16,
              height: 16,
              className: "edit"
            })}
          {icon &&
            !image &&
            !initials &&
            !isDisabled &&
            cloneElement(icon, {
              width: 16,
              height: 16,
              className: "avatar_icon"
            })}
          {!isDisabled &&
            (!icon && !image && initials && (size === "xl" || size === "l") ? (
              <H type="libra" className="text">
                {initials}
              </H>
            ) : (
              <P1 className="text" type="cygnus">
                {initials}
              </P1>
            ))}
          {isDisabled &&
            disabledIcon &&
            cloneElement(disabledIcon, {
              className: "disabled-icon",
              width: 16,
              height: 16
            })}
        </AvatarStyle>
        {!isDisabled && status && <OnlineStatus status={status} size={size} />}
      </AvatarWrapper>
    );
  }
);

Avatar.displayName = "Avatar";
