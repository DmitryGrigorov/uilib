import { IInputProps } from "../Input/interfaces";
import { TDirection } from "../helpers/getPosition/types";

export type TInputColorProps = Omit<
  IInputProps,
  "onChange" | "tooltipContent" | "tooltipPosition"
> & {
  onChange?: (color: string) => void;
  direction?: TDirection;
  isInputColorPicker?: boolean;
  lastColors?: string[];
};
