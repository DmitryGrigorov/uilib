import React, { PropsWithChildren } from "react";
import ListItem from "../ListItem";
import { Avatar } from "../../../Avatar";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { IListItemAvatarProps } from "./types";

const ListItemAvatar = React.forwardRef<
  HTMLLIElement,
  TPropsWithAttributes<PropsWithChildren<IListItemAvatarProps>, "li">
>((props, ref) => {
  const { status, image, text, icon, ...listItemProps } = props;
  return (
    <ListItem
      ref={ref}
      leadContent={
        <Avatar
          status={status}
          image={image}
          size={"s"}
          text={text}
          icon={icon}
          isDisabled={listItemProps.isDisabled}
        />
      }
      {...listItemProps}
    />
  );
});

ListItemAvatar.displayName = "ListItemAvatar";

export default ListItemAvatar;
