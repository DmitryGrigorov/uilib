import React, { useMemo } from "react";

import { IconStarloader, IconLoading } from "@dmitrygrigorov/icons";
import { IPreloaderProps } from "./types";
import { Filler, Label, PreloaderBase, ProgressBarStyle } from "./style";

const Preloader: React.FC<IPreloaderProps> = ({
  progress,
  type = "circular",
  isShowLabel,
  width,
  height,
  className,
  children
}): JSX.Element => {
  const getPreloader = useMemo(() => {
    if (type === "star") {
      return <IconStarloader width={24} height={24} />;
    } else if (type === "circular") {
      return <IconLoading width={24} height={24} />;
    } else {
      return children ? children : "Loading";
    }
  }, [type, isShowLabel]);
  return (
    <PreloaderBase
      isShowLabel={isShowLabel}
      className={className}
      width={width}
      height={height}>
      {getPreloader}
      {progress !== undefined && (
        <div className="progressbar">
          {isShowLabel && <Label>{String(progress) + "%"}</Label>}
          <ProgressBarStyle>
            <Filler progress={progress} />
          </ProgressBarStyle>
        </div>
      )}
    </PreloaderBase>
  );
};

export default Preloader;
