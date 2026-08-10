import styled, { css, RuleSet } from "styled-components";
import DropdownList from "../DropdownList";
import { TDropdownDirection } from "../../types";
import { ZINDEX } from "../../../Pallette/ZIndex";

type TDropdownListStyledProps = {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  dropdownRect: DOMRect;
  maxHeight: number;
  height?: string;
  ref: any;
};

const MARGIN = 8;

const getDirectionStyles = ({
  direction,
  anchorRect,
  dropdownRect
}: TDropdownListStyledProps): RuleSet<object> => {
  switch (direction) {
    case "top":
      return css`
        left: ${
          anchorRect.left + anchorRect.width / 2 - dropdownRect.width / 2
        }px;
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
      `;
    case "bottom":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${
          anchorRect.left + anchorRect.width / 2 - dropdownRect.width / 2
        }px;
      `;
    case "bottomRight":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${anchorRect.right - dropdownRect.width}px;
      `;
    case "bottomLeft":
      return css`
        top: ${anchorRect.bottom + MARGIN}px;
        left: ${anchorRect.left}px;
      `;
    case "topLeft":
      return css`
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
        left: ${anchorRect.left}px;
      `;
    case "topRight":
      return css`
        top: ${anchorRect.top - MARGIN - dropdownRect.height}px;
        left: ${anchorRect.right - dropdownRect.width}px;
      `;
    case "right":
      return css`
        top: ${
          anchorRect.height / 2 - dropdownRect.height / 2 + anchorRect.top
        }px;
        left: ${anchorRect.left + MARGIN + anchorRect.width}px;
      `;
    case "left":
      return css`
        left: ${anchorRect.left - MARGIN - dropdownRect.width}px;
        top: ${
          anchorRect.height / 2 - dropdownRect.height / 2 + anchorRect.top
        }px;
      `;
    default:
      return css``;
  }
};

export const DropdownListStyled = styled(
  DropdownList
)<TDropdownListStyledProps>`
  position: absolute;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight}px;
  height: ${({ height }) => height || "max-content"};

  &.dropdown-transition {
    &-enter {
      opacity: 0;
    }
    &-enter-done {
      opacity: 1;
    }
    &-exit {
      opacity: 1;
    }
    &-exit-active {
      opacity: 0;
    }
  }

  z-index: ${ZINDEX.tooltip};
  ${getDirectionStyles};
`;
