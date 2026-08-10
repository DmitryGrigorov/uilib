import styled, { css } from "styled-components";
import { ISelectStyle } from "../../types";

export const ControlSelectStyle = styled.div<
  Pick<ISelectStyle, "menuIsOpen" | "isMulti">
>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ isMulti }) =>
    !isMulti &&
    css`
      overflow: hidden;
    `}

  ${({ menuIsOpen }) =>
    menuIsOpen &&
    css`
      & .select-dropdown-icon {
        transition: 0.3s;
        transform: rotate(180deg);
      }
    `};
`;
