import React, { FC, useEffect, useRef } from "react";
import { hsvToHex } from "../../../utils/colorConvectors/hsvToHex";
import { calculateChange } from "./helpers/calculateChange";
import { Saturation, PointButton, SaturationActiveBlock } from "./styles";
import { ISaturationProps } from "./types";

const SaturationBlock: FC<ISaturationProps> = ({
  hsv,
  hsl,
  setHsv,
  setColorInput
}) => {
  const container = useRef<HTMLDivElement>(null);

  const handleChange = (
    e:
      | MouseEvent
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
  ): void => {
    if (container.current) {
      const change = calculateChange(e, hsl, container.current);
      setHsv(change);
      setColorInput(hsvToHex(change).toUpperCase());
    }
  };

  const handleMouseUp = (): void => {
    unbindEventListeners();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    handleChange(e);
    const renderWindow = getContainerRenderWindow();
    if (renderWindow) {
      renderWindow.addEventListener("mousemove", handleChange);
      renderWindow.addEventListener("mouseup", handleMouseUp);
    }
  };

  const unbindEventListeners = (): void => {
    const renderWindow = getContainerRenderWindow();
    if (renderWindow) {
      renderWindow.removeEventListener("mousemove", handleChange);
      renderWindow.removeEventListener("mouseup", handleMouseUp);
    }
  };

  const getContainerRenderWindow = (): HTMLElement => {
    const currentContainer = container?.current;
    let renderWindow: any = window;
    while (
      !renderWindow.document.contains(currentContainer) &&
      renderWindow.parent !== renderWindow
    ) {
      renderWindow = renderWindow.parent;
    }
    return renderWindow;
  };

  useEffect(() => () => unbindEventListeners(), []);

  return (
    <Saturation
      ref={container}
      onMouseDown={handleMouseDown}
      onTouchMove={handleChange}
      onTouchStart={handleChange}
      hue={hsl.h}>
      <SaturationActiveBlock ref={container}>
        <PointButton
          top={Number(String(hsv.v).substr(0, 4))}
          left={Number(String(hsv.s).substr(0, 4))}
          hex={hsvToHex(hsv)}
        />
      </SaturationActiveBlock>
    </Saturation>
  );
};

export default SaturationBlock;
