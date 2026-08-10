import React from "react";
import Badge from "../../..";
import { TBadgeColor, TBadgeSize } from "../../../types";

export const BadgeExample: React.FC<{
  size?: TBadgeSize;
  isClick?: boolean;
  colorType?: TBadgeColor;
}> = ({ size, isClick, colorType }) => (
  <Badge size={size} isClick={isClick} colorType={colorType}>
    P2-l
  </Badge>
);

export const BadgeExampleDisabled: React.FC<{
  size?: TBadgeSize;
  colorType?: TBadgeColor;
}> = ({ size, colorType }) => (
  <Badge isDisabled size={size} colorType={colorType}>
    P2-l
  </Badge>
);
