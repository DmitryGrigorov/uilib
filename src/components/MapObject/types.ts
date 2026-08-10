import React from "react";

export type TMapObjectType = "danger" | "warning" | "additional" | "positive";

export interface IMapObjectProps {
  className?: string;
  icon: JSX.Element;
  typeColor: TMapObjectType;
  isChecked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isDisabled?: boolean;
}
