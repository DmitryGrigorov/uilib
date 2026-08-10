import React from "react";
import { IListItemProps } from "./types";
import { IconWrapper } from "./styles";

type TListItemTrailContentProps = Pick<
  IListItemProps,
  "trailContent" | "trailIcon"
>;

const ListItemTrailContent: React.FC<TListItemTrailContentProps> = ({
  trailIcon,
  trailContent
}) => {
  if (trailIcon) {
    return <IconWrapper>{trailIcon}</IconWrapper>;
  } else if (trailContent) {
    return trailContent;
  }
  return null;
};

export default ListItemTrailContent;
