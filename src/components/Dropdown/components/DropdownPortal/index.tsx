import React, { useState, useRef, useMemo, useLayoutEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { TPropsWithAttributes } from "../../../utils/types/propsWithAttributes";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { TDropdownPortalProps } from "../../types";
import {
  DEFAULT_RECT_ELEMENT,
  calculateRectElement,
  getDirection
} from "../../helpers";
import { DropdownListStyled as DropdownListStyledRaw } from "./styles";

// generic-variance mismatch between this component's Item type param and
// the styled component's own generic - cast is type-only.
const DropdownListStyled = DropdownListStyledRaw as any;

const TIMEOUT_TRANSITION = 100;

const DropdownPortal = <Item,>({
  direction,
  anchorRect,
  onClickOutsideClose,
  anchorRef,
  ...props
}: TPropsWithAttributes<TDropdownPortalProps<Item>, "div">): JSX.Element => {
  const [dropdownRect, setDropdownRect] = useState(DEFAULT_RECT_ELEMENT);

  const maxHeight = useMemo(
    () =>
      document.documentElement.scrollHeight -
      anchorRect.height -
      anchorRect.y -
      8,
    [anchorRect]
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setDropdownRect(calculateRectElement(dropdownRef.current));
  }, []);

  useOnClickOutside([dropdownRef, anchorRef], onClickOutsideClose);

  const portalDirection = useMemo(
    () => getDirection({ anchorRect, direction, dropdownRect, offset: 8 }),
    [dropdownRect, direction]
  );

  return (
    <CSSTransition
      nodeRef={dropdownRef}
      in={dropdownRect.width !== 0}
      timeout={TIMEOUT_TRANSITION}
      classNames="dropdown-transition">
      <DropdownListStyled
        height={props.height}
        maxHeight={maxHeight}
        anchorRect={anchorRect}
        dropdownRect={dropdownRect}
        ref={dropdownRef}
        direction={portalDirection}
        {...props}
      />
    </CSSTransition>
  );
};

DropdownPortal.displayName = "DropdownPortal";

export default DropdownPortal;
