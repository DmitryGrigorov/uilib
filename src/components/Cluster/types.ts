import React from "react";

export interface IClusterProps {
  className?: string;
  isDisabled?: boolean;
  isPressed?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: string;
}
