import { MouseEvent } from "react";
import {
  TStepsSize,
  TStepsStatus,
  TStepsDirection,
  TStepOnChangeCurrent
} from "../../";

export interface IStepItemProps {
  status: TStepsStatus;
  isDisabled?: boolean;
  isCurrent?: boolean;
  title?: string | JSX.Element;
  description?: string;
  direction: TStepsDirection;
  size: TStepsSize;
  stepNumber: string | number;
  isLast: boolean;
  stepOnClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeCurrent?: TStepOnChangeCurrent;
  keyLocal: number;
}
