import React from "react";
import P1 from "../typography/P1";
import Label from "../Label";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IProgressBarProps } from "./types";
import { getProgress } from "./helpers";
import { Filler, ProgressBarBase, ProgressBarStyle } from "./style";

const ProgressBar: React.FC<TPropsWithAttributes<IProgressBarProps>> = ({
  progress,
  variant,
  type = "Linear",
  size = "s",
  label,
  isText,
  ...props
}) => (
  <ProgressBarBase variant={variant} {...props}>
    <ProgressBarStyle className="progressbar" size={size}>
      <div className="background">
        <Filler
          className="filler"
          progress={getProgress({
            type,
            progress,
            step: 1,
            current_progress: 0
          })}
        />
      </div>
      {size === "m" && isText && (
        <P1 className="progress-text" type="cygnus">
          {progress}%
        </P1>
      )}
    </ProgressBarStyle>
    {label && (
      <Label
        status={variant === "info" ? "focused" : variant}
        isIcon={size === "s"}>
        {label}
      </Label>
    )}
  </ProgressBarBase>
);

export default ProgressBar;
