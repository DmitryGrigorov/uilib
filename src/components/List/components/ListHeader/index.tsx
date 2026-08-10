import React, {
  useMemo,
  MouseEventHandler,
  PropsWithChildren,
  forwardRef
} from "react";
import { IconArrowDown1, IconArrowRight } from "@dmitrygrigorov/icons";
import H from "../../../typography/H";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { Avatar } from "../../../Avatar";
import { SPRING_PRESETS } from "../../../Pallette/motion";
import { IListHeaderProps } from "./types";
import { ListHeaderStyled, IconWrapper, CollapseIconMotion } from "./styles";

const ListHeader = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TPropsWithAttributes<IListHeaderProps>>
>(
  (
    {
      children,
      isSelectedDefault = false,
      isDisabled,
      leadIcon,
      trailIcon,
      className,
      style,
      onClick,
      viewType = "basic",
      avatar,
      size = "l",
      ...props
    },
    ref
  ) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
      if (!isDisabled) {
        onClick?.(event);
      }
    };

    const isSelected = viewType === "basic" ? false : isSelectedDefault;

    const trailContent = useMemo(() => {
      if (viewType === "collapse") {
        return (
          <IconWrapper className="list-header__collapse-icon-wpapper">
            <CollapseIconMotion
              className="list-header__collapse-icon"
              animate={{ rotate: isSelected ? 180 : 0 }}
              transition={SPRING_PRESETS.gentle}>
              <IconArrowDown1 width={12} height={12} />
            </CollapseIconMotion>
          </IconWrapper>
        );
      }
      if (viewType === "arrow") {
        return (
          <IconWrapper className="list-header__trail-content">
            <IconArrowRight width={16} height={16} />
          </IconWrapper>
        );
      }
      if (trailIcon) {
        return (
          <IconWrapper className="list-header__trail-content">
            {trailIcon}
          </IconWrapper>
        );
      }
      return null;
    }, [viewType, trailIcon, isSelected]);

    return (
      <ListHeaderStyled
        as="div"
        isSelected={isSelected}
        isDisabled={isDisabled}
        className={className}
        style={style}
        size={size !== "s" ? size : "m"}
        onClick={handleClick}
        ref={ref}
        {...props}>
        <>
          {!avatar && leadIcon && (
            <IconWrapper className="list-header__lead-content">
              {leadIcon}
            </IconWrapper>
          )}
          {avatar && <Avatar {...avatar} isDisabled={isDisabled} size="m" />}
          {typeof children === "string" ? (
            <H type="capricornus" as="h6">
              {children}
            </H>
          ) : (
            children
          )}
          {trailContent}
        </>
      </ListHeaderStyled>
    );
  }
);

ListHeader.displayName = "ListHeader";

export default ListHeader;
