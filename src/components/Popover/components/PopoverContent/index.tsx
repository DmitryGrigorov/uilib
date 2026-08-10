import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { MARGIN, PopoverContentWrapper } from "../../styles";
import P2 from "../../../typography/P2";
import H from "../../../typography/H";
import {
  getComputedDirection,
  calculateSizeAnPositionElement,
  DEFAULT_SIZE_AND_POSITION_ELEMENT
} from "../../../helpers/getPosition/helpers";
import { useReposition } from "../../../hooks/useReposition";
import { IPopoverContentProps } from "../../types";
import { TDirection } from "../../../helpers/getPosition/types";
import Button from "../../../Button";

const DEFAULT_DIRECTION = "top";
const TIMEOUT_TRANSITION = 100;

const PopoverContent: React.FC<IPopoverContentProps> = ({
  title,
  description,
  direction,
  anchorSizeAndPosition,
  onPrimaryButton,
  onSecondaryButton,
  handleClose,
  primaryButtonContent,
  secondaryButtonContent,
  isPrimaryButton,
  isSecondaryButton,
  className
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

  // Recomputes the popover's placement whenever its measured content size changes.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    callComputedDirection();
  }, [textContentSize]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handlePrimaryClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    onPrimaryButton?.(event);
    handleClose?.();
  };

  const handleSecondaryClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    onSecondaryButton?.(event);
    handleClose?.();
  };

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
      classNames="Popover-content">
      <PopoverContentWrapper
        onMouseDown={(e) => e.preventDefault()}
        className={className}
        ref={textContentRef}
        direction={_direction}
        componentSizeAndPosition={anchorSizeAndPosition}
        textContentSize={textContentSize}>
        <div className="popoverHeader">
          {title && <H type="capricornus">{title}</H>}
          {description && (
            <P2 type="corvus" className="popoverDescription">
              {description}
            </P2>
          )}
        </div>
        <div className="buttonHolder">
          {isSecondaryButton && secondaryButtonContent && (
            <Button
              size="s"
              viewType="ghost"
              onClick={(e) => handleSecondaryClick(e)}>
              {secondaryButtonContent}
            </Button>
          )}
          {isPrimaryButton && primaryButtonContent && (
            <Button
              size="s"
              viewType="link"
              onClick={(e) => handlePrimaryClick(e)}>
              {primaryButtonContent}
            </Button>
          )}
        </div>
      </PopoverContentWrapper>
    </CSSTransition>
  );
};

export default PopoverContent;
