import { TCompStatus, TColorTypeStatus } from "@dmitrygrigorov/components";

export interface IStatusCellProps<TValue> {
  children?: TValue;
  status?: TCompStatus;
  leadIcon?: JSX.Element;
  trailIcon?: JSX.Element;
  colorType?: TColorTypeStatus;
  isFilled?: boolean;
}
