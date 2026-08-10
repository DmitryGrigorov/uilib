import React, { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { calculateSizeAnPositionElement } from "../helpers/getPosition/helpers";
import { IPopoverProps } from "./types";
import PopoverContent from "./components/PopoverContent";
import { PopoverStyled } from "./styles";

const Popover: React.FC<IPopoverProps> = ({
  children,
  direction = "top",
  title,
  description,
  primaryButtonContent,
  secondaryButtonContent,
  isPrimaryButton = primaryButtonContent !== undefined,
  isSecondaryButton = secondaryButtonContent !== undefined,
  onPrimaryButton,
  onSecondaryButton,
  onVisibleChange,
  defaultIsVisible = false,
  className,
  isShow = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [containerPopover, setContainerPopover] =
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
    setContainerPopover(container);
    if (defaultIsVisible) {
      setIsVisible(defaultIsVisible);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    onVisibleChange && onVisibleChange(isVisible || false);
  }, [isVisible]);

  const handleMouseClick = (): void => {
    setIsVisible(isShow);
  };

  const handleClose = (): void => {
    setIsVisible(false);
  };

  return (
    <PopoverStyled
      ref={anchorComponentRef}
      onMouseDown={handleMouseClick}
      onBlur={handleClose}
      className={className}>
      {children}
      {containerPopover &&
        isVisible &&
        createPortal(
          <PopoverContent
            direction={direction}
            anchorSizeAndPosition={anchorSizeAndPosition}
            title={title}
            description={description}
            isPrimaryButton={isPrimaryButton}
            isSecondaryButton={isSecondaryButton}
            primaryButtonContent={primaryButtonContent}
            secondaryButtonContent={secondaryButtonContent}
            onPrimaryButton={onPrimaryButton}
            onSecondaryButton={onSecondaryButton}
            handleClose={handleClose}
          />,
          containerPopover
        )}
    </PopoverStyled>
  );
};

Popover.displayName = "Popover";

export default Popover;
