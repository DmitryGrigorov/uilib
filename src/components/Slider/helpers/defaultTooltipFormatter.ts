import { TSliderTooltipFormatter } from "../types";

export const defaultTooltipFormatter: TSliderTooltipFormatter = (value) =>
  value?.toString() || "";
