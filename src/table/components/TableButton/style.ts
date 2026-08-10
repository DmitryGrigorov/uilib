import styled, { css } from "styled-components";
import { LIGHT_THEME, Padding, Shape } from "@dmitrygrigorov/components";

import { ITableButtonProps } from "./types";

const ButtonSizeStyles = {
  s: css`
    border-radius: ${Shape.borderRadiusMedium};
  `,
  xs: css`
    height: 24px;
    border-radius: ${Shape.borderRadiusDefault};
    ${Padding.allSide(1, 2, 1, 1)};
  `
};

export const TableButtonStyled = styled.button<ITableButtonProps>`
  padding: 8px;
  display: flex;
  border: none;
  gap: 8px;
  align-items: center;
  background: none;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.textBasicDefault};
    svg {
      color: ${theme.colors.textBasicDefault};
    }
  `}
  :hover:enabled {
    ${({ theme, isPressed }) =>
      !isPressed &&
      css`
        background: ${theme.colors.neutral3};
        color: ${theme.colors.textBasicHover};
        svg {
          color: ${theme.colors.textBasicHover};
        }
      `}
  }

  :disabled {
    ${({ theme }) => css`
      color: ${theme.colors.textBasicDisabled};
      svg {
        color: ${theme.colors.textBasicDisabled};
      }
    `}
    cursor: not-allowed;
  }

  ${({ isPressed, theme }) =>
    isPressed &&
    css`
      color: ${theme.colors.componentPrimaryOrangePressed};
      svg {
        color: ${theme.colors.componentPrimaryOrangePressed};
      }
    `};

  ${({ size = "s" }) => ButtonSizeStyles[size]};
`;

TableButtonStyled.defaultProps = {
  theme: LIGHT_THEME
};
