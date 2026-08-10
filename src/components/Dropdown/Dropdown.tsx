import React, {
  useState,
  cloneElement,
  useEffect,
  useRef,
  useLayoutEffect
} from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { IDropdownProps } from "./types";
import { DropdownWrapper } from "./styles";
import DropdownPortal from "./components/DropdownPortal";
import { calculateRectElement, DEFAULT_RECT_ELEMENT } from "./helpers";

const Dropdown = <Item,>({
  children,
  direction = "bottom",
  onItemClick,
  onClickClose,
  onClickOutside,
  isOpen,
  isNotCloseOutside,
  isDisabled,
  ...props
}: TPropsWithAttributes<IDropdownProps<Item>, "div">): JSX.Element => {
  const [_isOpen, setIsOpen] = useState(isOpen || false);
  const [containerDropdown, setContainerDropdown] =
    useState<HTMLBodyElement | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [anchorRect, setAnchorRect] = useState(DEFAULT_RECT_ELEMENT);
  const transitionRef = useRef(null);

  const handleClickOutsideClose = (): void => {
    if (!isNotCloseOutside) {
      setIsOpen(false);
      if (_isOpen) {
        onClickOutside?.();
        onClickClose?.();
      }
    }
  };

  const calculateAnchorRect = (): void => {
    setAnchorRect(calculateRectElement(anchorRef.current));
  };

  useLayoutEffect(() => {
    calculateAnchorRect();
  }, [_isOpen]);

  useEffect(() => {
    window.addEventListener("resize", calculateAnchorRect);
    return () => window.removeEventListener("resize", calculateAnchorRect);
  }, []);

  // Portal target isn't available until after mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const container = document.getElementsByTagName("body").item(0);
    setContainerDropdown(container);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Keep internal open state in sync with the externally-controlled `isOpen` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (typeof isOpen !== "undefined") {
      setIsOpen(isOpen);
    }
  }, [isOpen]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleClick = (): void => {
    if (!isDisabled) {
      setIsOpen((prevState) => !prevState);
      if (_isOpen) {
        onClickClose?.();
      }
    }
  };

  return (
    <React.StrictMode>
      <DropdownWrapper ref={anchorRef}>
        {cloneElement(
          children as React.ReactElement<{
            onClick?: (e: MouseEvent) => void;
          }>,
          {
            onClick: (e: MouseEvent) => {
              handleClick();
              (
                children.props as { onClick?: (e: MouseEvent) => void }
              )?.onClick?.(e);
            }
          }
        )}
        {_isOpen &&
          containerDropdown &&
          createPortal(
            <Transition
              nodeRef={transitionRef}
              in={_isOpen}
              unmountOnExit
              timeout={500}>
              <DropdownPortal<Item>
                {...props}
                direction={direction}
                anchorRect={anchorRect}
                onItemClick={onItemClick}
                anchorRef={anchorRef}
                onClickOutsideClose={handleClickOutsideClose}
              />
            </Transition>,
            containerDropdown
          )}
      </DropdownWrapper>
    </React.StrictMode>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
