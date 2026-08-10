import React from "react";
import { TPropsWithAttributes } from "../../utils/types/propsWithAttributes";
import { IBreadcrumbItemWrapper } from "../types";
import { IconWrapper, Text } from "../style";

const BreadcrumbItem: React.FC<
  TPropsWithAttributes<IBreadcrumbItemWrapper>
> = ({ item, children, index, items, _maxNoCollapsedItems }) => (
  <>
    {item.icon && item.iconType !== "trail" && (
      <IconWrapper className="lead-icon">{item.icon}</IconWrapper>
    )}
    {!(index < items.length - _maxNoCollapsedItems && item.icon) &&
      item.text && <Text type="corvus">{item.text}</Text>}
    {children}
  </>
);

export default BreadcrumbItem;
