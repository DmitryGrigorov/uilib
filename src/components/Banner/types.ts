import { CSSProperties } from "react";
import { TLabelStatus } from "../Label";

export interface IBannerSecondaryButton {
  title: string;
  onClick?: () => void;
}

export type TTypeBanner = "overlay" | "shifting";

export interface IBannerProps {
  status: TLabelStatus;
  isIcon?: boolean;
  title: string;
  message: string;
  secondaryButton?: IBannerSecondaryButton;
  onPrimaryClick?: () => void;
  type: TTypeBanner;
  primaryTitle?: string;
  className?: string;
  style?: CSSProperties;
  testId?: string;
}

export interface IBannerContext {
  bannerShow: (props: IBannerProps) => () => void;
}

export interface IBannerService {
  idContainer?: string;
}
