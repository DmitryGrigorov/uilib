import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TDirection } from "../../../helpers/getPosition/types";
import {
  MARGIN,
  TooltipContentWrapper,
  TrailContentStyled
} from "../../styles";
import P2 from "../../../typography/P2";
import {
  getComputedDirection,
  calculateSizeAnPositionElement,
  DEFAULT_SIZE_AND_POSITION_ELEMENT
} from "../../../helpers/getPosition/helpers";
import { useReposition } from "../../../hooks/useReposition";
import { ITooltipContentProps } from "../../types";

const DEFAULT_DIRECTION = "top";
const TIMEOUT_TRANSITION = 100;

const TooltipContent: React.FC<ITooltipContentProps> = ({
  text,
  direction,
  anchorSizeAndPosition,
  isShadow,
  onTrailClick,
  trailText,
  isTrail,
  className,
  testId
}) => {
  const [_direction, setDirection] = useState<TDirection>(
    direction || DEFAULT_DIRECTION
  );
  const [textContentSize, setTextContentSize] = useState(
    DEFAULT_SIZE_AND_POSITION_ELEMENT
  );

  const textContentRef = useRef(null);

  useEffect(() => {
    setTextContentSize(calculateSizeAnPositionElement(textContentRef.current));
  }, []);

  const callComputedDirection = (): void => {
    const computedDirection = getComputedDirection({
      componentSizeAndPosition: anchorSizeAndPosition,
      textContentSize,
      offset: MARGIN,
      direction: direction || DEFAULT_DIRECTION
    });
    setDirection(computedDirection);
  };

  // Recomputes the tooltip's placement whenever its measured content size changes.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    callComputedDirection();
  }, [textContentSize]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Keep internal direction in sync with the externally-controlled `direction` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setDirection(direction || DEFAULT_DIRECTION);
  }, [direction]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useReposition(callComputedDirection);

  return (
    <CSSTransition
      nodeRef={textContentRef}
      in={textContentSize.width !== 0}
      timeout={TIMEOUT_TRANSITION}
      classNames="tooltip-content">
      <TooltipContentWrapper
        className={className}
        ref={textContentRef}
        isShadow={isShadow}
        direction={_direction}
        componentSizeAndPosition={anchorSizeAndPosition}
        data-testid={`${testId}-content`}
        textContentSize={textContentSize}>
        <P2 type="lynx">{text}</P2>
        {isTrail && (
          <TrailContentStyled type="cygnus" onClick={onTrailClick}>
            {trailText}
          </TrailContentStyled>
        )}
      </TooltipContentWrapper>
    </CSSTransition>
  );
};

export default TooltipContent;
