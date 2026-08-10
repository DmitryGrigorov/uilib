import React, { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { calculateSizeAnPositionElement } from "../helpers/getPosition/helpers";
import { ITooltipProps } from "./types";
import TooltipContent from "./components/TooltipContent";
import { TooltipStyled } from "./styles";

const Tooltip: React.FC<ITooltipProps> = ({
  children,
  direction = "top",
  text,
  onVisibleChange,
  isTrail,
  trailText,
  isShadow,
  defaultIsVisible = false,
  className,
  isShow = true,
  isVisible: propsIsVisible = true,
  testId
}) => {
  const [isVisible, setIsVisible] = useState(
    typeof defaultIsVisible === "undefined" ? false : defaultIsVisible
  );
  const [containerTooltip, setContainerTooltip] =
    useState<HTMLBodyElement | null>(null);

  const anchorComponentRef = useRef(null);

  // Re-measures the anchor's DOM size/position whenever visibility toggles.
  /* eslint-disable react-hooks/refs */
  const anchorSizeAndPosition = useMemo(
    () => calculateSizeAnPositionElement(anchorComponentRef.current),
    [isVisible]
  );
  /* eslint-enable react-hooks/refs */

  // Portal target isn't available until after mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainerTooltip(container);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    onVisibleChange && onVisibleChange(isVisible || false);
  }, [isVisible]);

  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const handleMouseEnter = (): void => {
    if (isShow) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = (): void => {
    setIsVisible(false);
  };

  return isTouch ? (
    children
  ) : (
    <TooltipStyled
      ref={anchorComponentRef}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      data-testid={testId}
      className={className}>
      {children}
      {containerTooltip &&
        propsIsVisible &&
        isVisible &&
        text &&
        createPortal(
          <TooltipContent
            testId={testId}
            direction={direction}
            anchorSizeAndPosition={anchorSizeAndPosition}
            text={text}
            trailText={trailText}
            isShadow={isShadow}
            isTrail={isTrail}
          />,
          containerTooltip
        )}
    </TooltipStyled>
  );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
