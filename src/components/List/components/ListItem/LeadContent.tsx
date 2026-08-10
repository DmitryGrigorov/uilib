import React from "react";
import { IListItemProps } from "./types";
import { IconWrapper } from "./styles";

type TListItemLeadContentProps = Pick<
  IListItemProps,
  "leadIcon" | "leadContent"
>;

const ListItemLeadContent: React.FC<TListItemLeadContentProps> = ({
  leadIcon,
  leadContent
}) => {
  if (leadIcon) {
    return <IconWrapper>{leadIcon}</IconWrapper>;
  } else if (leadContent) {
    return leadContent;
  }
  return null;
};

export default ListItemLeadContent;
