import React, {
  MouseEventHandler,
  PropsWithChildren,
  PropsWithRef
} from "react";
import P2 from "../../../typography/P2";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { IListItemProps } from "./types";
import { ListItemStyled } from "./styles";
import ListItemLeadContent from "./LeadContent";
import ListItemTrailContent from "./TrailContent";

const ListItem = React.forwardRef<
  HTMLLIElement,
  TPropsWithAttributes<PropsWithRef<PropsWithChildren<IListItemProps>>, "li">
>(
  (
    {
      children,
      className,
      style,
      trailIcon,
      isSelected = false,
      onClick,
      isDisabled,
      leadIcon,
      leadContent,
      trailContent,
      onDoubleClick,
      size = "l",
      ...props
    },
    ref
  ) => {
    const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
      !isDisabled && onClick?.(event);
    };

    const handleDoubleClick: MouseEventHandler<HTMLLIElement> = (event) => {
      !isDisabled && onDoubleClick?.(event);
    };

    return (
      <ListItemStyled
        as="li"
        ref={ref}
        className={className}
        style={style}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        isSelected={isSelected}
        isDisabled={isDisabled}
        size={size}
        data-element="list-item"
        {...props}>
        <div className="list-item__lead-content">
          <ListItemLeadContent leadIcon={leadIcon} leadContent={leadContent} />
          <P2 type={"corvus"}>{children}</P2>
        </div>
        <div className="list-item_trail-content">
          <ListItemTrailContent
            trailIcon={trailIcon}
            trailContent={trailContent}
          />
        </div>
      </ListItemStyled>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
