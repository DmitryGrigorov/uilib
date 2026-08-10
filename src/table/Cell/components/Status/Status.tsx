import React from "react";
import { Status } from "@dmitrygrigorov/components";
import { IStatusCellProps } from "./types";

const StatusCell = <TValue,>({
  status,
  leadIcon,
  trailIcon,
  children,
  colorType,
  isFilled
}: IStatusCellProps<TValue>): JSX.Element => (
  <Status
    isFilled={isFilled}
    status={status}
    leadIcon={leadIcon}
    trailIcon={trailIcon}
    colorType={colorType}>
    {children as React.ReactNode}
  </Status>
);

export default StatusCell;
