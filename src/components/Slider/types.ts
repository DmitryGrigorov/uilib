import { MouseEvent, ReactNode, CSSProperties, FormEvent } from "react";

export type TActiveButton = "left" | "right" | null | undefined;

export type TSliderValue<Range> = Range extends true
  ? [number, number]
  : number;

export const sliderStatus = ["info", "warning", "error", "success"] as const;
export type TSliderStatus = (typeof sliderStatus)[number];

export type TOnChangeSlider<Range> = (
  event: FormEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>,
  value: TSliderValue<Range>
) => void;

export type TSliderDirection = "vertical" | "horizontal";

export const sliderSize = ["m", "s"];

export type TSliderSize = (typeof sliderSize)[number];

export type TSliderTooltipFormatter = (value: number | undefined) => string;

export interface ISliderProps<Range extends boolean = false> {
  className?: string;
  step?: number;
  isRange?: Range;
  isDisabled?: boolean;
  direction?: TSliderDirection;
  value?: TSliderValue<Range>;
  status?: TSliderStatus;
  min?: number;
  max?: number;
  size?: TSliderSize;
  onChange?: TOnChangeSlider<Range>;
  leadText?: ReactNode;
  trailText?: ReactNode;
  defaultValue?: TSliderValue<Range>;
  isReset?: boolean;
  isTooltip?: boolean;
  tooltipFormatter?: TSliderTooltipFormatter;
  style?: CSSProperties;
  width?: string;
  height?: string;
  testId?: string;
}

export interface ISliderLine {
  isActive: boolean;
  length: number;
}

export type TTrackPosition = {
  x: number;
  y: number;
} | null;
