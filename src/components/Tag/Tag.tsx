import React, { forwardRef } from "react";
import { IconCloseCircle } from "@dmitrygrigorov/icons";
import P2 from "../typography/P2";
import { TP2FontType } from "../typography/P2/types";
import { Avatar } from "../Avatar";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { TagWrapper, LeadIconWrapper, CloseIconWrapper } from "./style";
import { ITagProps, TTagSize } from "./types";

const FONT_MAPPING: Record<TTagSize, TP2FontType> = {
  s: "cetus",
  xs: "musca",
  m: "corvus"
};

const Tag = forwardRef<HTMLElement, TPropsWithAttributes<ITagProps, "button">>(
  (
    {
      children,
      className,
      avatarProps,
      isStroke,
      isClosable,
      leadIcon,
      isPressed,
      as,
      isDisabled,
      closeIcon = <IconCloseCircle />,
      size = "m",
      onClickClose,
      onClick,
      testId = "tag",
      isReadOnly,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      onClick && !isDisabled && onClick(event);
      //  TODO check release
    };

    const renderLeadIcon = (): JSX.Element | null => {
      if (leadIcon) {
        return (
          <LeadIconWrapper className="beforeSVG">{leadIcon}</LeadIconWrapper>
        );
      }
      return null;
    };

    const renderCloseIcon = (): JSX.Element | null => {
      if (closeIcon && isClosable) {
        return (
          isClosable && (
            <CloseIconWrapper
              onClick={handleClickClose}
              size={size}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              avatarProps={avatarProps}>
              {closeIcon}
            </CloseIconWrapper>
          )
        );
      }
      return null;
    };

    const handleClickClose = (e: React.MouseEvent<HTMLDivElement>): void => {
      e.preventDefault();
      e.stopPropagation();
      onClickClose && !isDisabled && onClickClose(e);
    };

    return (
      <TagWrapper
        className={className}
        isPressed={isPressed}
        as={as}
        isClosable={isClosable}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isStroke={isStroke}
        size={size}
        avatarProps={avatarProps}
        onClick={handleClick}
        ref={ref as any}
        data-testid={testId}
        {...props}>
        {renderLeadIcon()}
        {avatarProps && (size === "m" || size === "s" || !size) && (
          <Avatar
            className="tag__avatar"
            size="xs"
            isDisabled={isDisabled}
            {...avatarProps}
            as="div"
          />
        )}
        <P2
          type={FONT_MAPPING[size || "m"] || "corvus"}
          className={"placeholder"}>
          {children}
        </P2>

        {renderCloseIcon()}
      </TagWrapper>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
