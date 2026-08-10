import React, { FC, useEffect, useRef } from "react";
import { hsvToHex } from "../../../utils/colorConvectors/hsvToHex";
import { calculateChange } from "./helpers/calculateChange";
import { IHueProps } from "./types";
import { ColorLine, PointButton } from "./styles";

const Hue: FC<IHueProps> = ({
  hsl,
  hsv,
  setHsl,
  setHsv,
  setColorInput
}): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: MouseEvent | React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (container.current) {
      const change = calculateChange(e, hsl, container.current);
      setHsl(change);
      const newHSV = { ...hsv, h: change.h };
      setHsv(newHSV);
      setColorInput(hsvToHex(newHSV).toUpperCase());
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>): void => {
    handleChange(e);
    window.addEventListener("mousemove", handleChange);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (): void => {
    unbindEventListeners();
  };

  const unbindEventListeners = (): void => {
    window.removeEventListener("mousemove", handleChange);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => () => unbindEventListeners(), []);

  return (
    <ColorLine ref={container}>
      <PointButton
        onMouseDown={handleMouseDown}
        hue={hsl.h}
        left={Math.round(hsl.h) * 100}
      />
    </ColorLine>
  );
};

export default Hue;
