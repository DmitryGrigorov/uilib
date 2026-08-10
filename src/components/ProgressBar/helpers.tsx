import { IProgressBarProps } from "./types";

interface IGetProgress {
  type: IProgressBarProps["type"];
  progress: number;
  step: number;
  current_progress: number;
}
export const getProgress = ({
  type,
  progress,
  step,
  current_progress
}: IGetProgress): number => {
  const threshold = 20;
  if (type === "Linear") {
    return progress;
  }
  if (type === "LinearSectioned") {
    if (progress > current_progress) {
      while (progress / step >= threshold) {
        current_progress += threshold;
        step++;
      }
    } else if (progress < current_progress) {
      while (current_progress - progress + threshold >= threshold) {
        current_progress -= threshold;
        step--;
      }
    }
  }
  return current_progress;
};
