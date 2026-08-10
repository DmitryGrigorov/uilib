export interface IProgressBarProps {
  label?: string;
  progress: number;
  type?: "Linear" | "LinearSectioned";
  variant: TProgressBarVariant;
  size?: TProgressBarSize;
  isText?: boolean;
}

export type TProgressBarSize = "s" | "m";

export type TProgressBarVariant = "info" | "success" | "warning" | "error";
