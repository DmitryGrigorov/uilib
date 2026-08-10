import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IPropsDivider } from "./types";

interface IDivider extends Partial<IPropsDivider> {
  theme: ITheme;
  isHasChildren: boolean;
}

type IDividerComponentPros = Required<
  Pick<IDivider, "status" | "direction" | "align" | "theme" | "isHasChildren">
> &
  Pick<IDivider, "width" | "height">;

export const DividerComponent = styled.div<IDividerComponentPros>`
  display: flex;
  align-items: center;
  ${({ direction, width, height }) =>
    direction === "row"
      ? css`
          width: ${width ? width : "100%"};
          flex-direction: row;
          gap: 8px;
          &::before,
          &::after {
            height: 1px;
          }
        `
      : css`
          height: ${height ? height : "100%"};
          flex-direction: column;
          gap: 2.4px;
          &::before,
          &::after {
            width: 1px;
          }
        `}
  ${({ isHasChildren }) =>
    !isHasChildren &&
    css`
      gap: 0;
    `}

  & > * {
    width: max-content;
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  &::before,
  &::after {
    content: "";
    ${({ theme, status }) => {
      switch (status) {
        default:
          return css`
            background-color: ${theme.colors.neutral6};
          `;
        case "active":
          return css`
            background-color: ${theme.colors.orange1};
          `;
        case "disabled":
          return css`
            background-color: ${theme.colors.neutral5};
          `;
        case "error":
          return css`
            background-color: ${theme.colors.textColoredRed};
          `;
        case "success":
          return css`
            background-color: ${theme.colors.textColoredTeal};
          `;
        case "warning":
          return css`
            background-color: ${theme.colors.textColoredAmber};
          `;
        case "filled":
          return css`
            background-color: ${theme.colors.neutral10};
          `;
      }
    }};
  }

  ${({ direction }) => {
    if (direction === "row") {
      return css`
        &::after {
          border-radius: 0 4px 4px 0;
        }
        &::before {
          border-radius: 4px 0 0 4px;
        }
      `;
    }
    return css`
      &::after {
        border-radius: 0 0 4px 4px;
      }
      &::before {
        border-radius: 4px 4px 0 0;
      }
    `;
  }}

  ${({ align, direction }) => {
    switch (align) {
      case "left":
        return css`
          &::before {
            ${direction === "row" ? "width: 8px;" : "height: 8px;"}
          }
          &::after {
            flex-grow: 1;
          }
        `;
      case "right":
        return css`
          &::before {
            flex-grow: 1;
          }
          &::after {
            ${direction === "row" ? "width: 8px;" : "height: 8px;"}
          }
        `;
      default:
        return css`
          &::before,
          &::after {
            flex-grow: 1;
          }
        `;
    }
  }}
`;

DividerComponent.defaultProps = {
  theme: LIGHT_THEME
};
