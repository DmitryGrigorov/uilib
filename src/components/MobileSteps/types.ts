export type TMobileStepsType = "gallery" | "progress";

export interface IMobileStepsProps {
  type: TMobileStepsType;
  steps: number;
  current: number;
  onChange?: (step: number) => void;
  getStepKey?: (step: number) => string | number | undefined;
  className?: string;
  width?: string;
}
