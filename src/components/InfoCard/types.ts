export type TInfoCardSize = "m" | "l";

export interface IInfoCardProps {
  status: "error" | "info" | "success" | "warning";
  label: string;
  isClosableIcon?: boolean;
  message?: string;
  width?: string;
  showMessage?: boolean;
  moreButtonText?: string;
  collapseButtonText?: string;
  onCloseClick?: () => void;
  size?: TInfoCardSize;
  testId?: string;
}
