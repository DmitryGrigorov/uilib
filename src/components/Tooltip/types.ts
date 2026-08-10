import { TDirection } from "../helpers/getPosition/types";

export interface ITooltipProps {
  children: JSX.Element;
  direction?: TDirection;
  text: string;
  isShadow?: boolean;
  onVisibleChange?: (isVisible: boolean) => void;
  defaultIsVisible?: boolean;
  onTrailClick?: () => void;
  isShow?: boolean;
  trailText?: string;
  isTrail?: boolean;
  className?: string | undefined;
  isVisible?: boolean;
  testId?: string;
}

export interface IComponentSizeAndPosition {
  width: number;
  height: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  x: number;
  y: number;
}

export interface ITooltipContentProps {
  isTrail?: boolean;
  trailText?: string;
  onTrailClick?: () => void;
  text: string;
  isShadow?: boolean;
  direction?: TDirection;
  anchorSizeAndPosition: IComponentSizeAndPosition;
  className?: string;
  testId?: string;
}
