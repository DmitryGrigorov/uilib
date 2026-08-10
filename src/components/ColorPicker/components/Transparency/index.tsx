import React, { FC, useEffect, useRef } from "react";
import { RGB } from "../../../utils/colorConvectors/types";
import { TransparencyLine, PointButton } from "./styles";
import { calculateChange } from "./helpers/calculateChange";

const Transparency: FC<{
  colorRgb: RGB;
  alpha: number;
  setAlpha: (alpha: string) => void;
}> = ({ colorRgb, alpha, setAlpha }) => {
  const container = useRef<HTMLDivElement>(null);
  const pointButtonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (
    e: MouseEvent | React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (container.current && pointButtonRef.current) {
      setAlpha(calculateChange(e, container.current) + "%");
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
    <TransparencyLine colorRgb={colorRgb} ref={container}>
      <PointButton
        ref={pointButtonRef}
        onMouseDown={handleMouseDown}
        alpha={alpha / 100}
        colorRgb={colorRgb}
      />
    </TransparencyLine>
  );
};
export default Transparency;
