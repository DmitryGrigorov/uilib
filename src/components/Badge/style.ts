import styled, { css } from "styled-components";
import { LIGHT_THEME, ITheme } from "../Pallette/themes";
import { IBadgeProps } from "./types";

interface IBadge extends Partial<IBadgeProps> {
  theme: ITheme;
}

type TBadgeComponentProps = Pick<
  IBadge,
  "isClick" | "colorType" | "isDisabled" | "theme"
> &
  Required<Pick<IBadge, "size">>;

export const BadgeWrapper = styled.button<TBadgeComponentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0 7px;
  border: 1px solid ${({ theme }) => theme.colors.neutral0};
  transition: all 0.2s linear;
  color: ${({ theme }) => theme.colors.textBasicExtra};
  cursor: ${({ isClick }) => (isClick ? "pointer" : "default")};

  ${({ size }) => {
    switch (size) {
      case "l":
        return css`
          height: 22px;
          border-radius: 16px;
        `;
      default:
        return css`
          height: 14px;
          border-radius: 8px;
        `;
    }
  }}

  ${({ isClick, colorType, isDisabled, theme }) => {
    if (isDisabled) {
      return css`
        background: ${theme.colors.neutral3};
        border: 1px solid ${theme.colors.neutral6};
        color: ${theme.colors.textBasicDisabled};
        cursor: not-allowed;
      `;
    }
    if (colorType === "teal") {
      return css`
        background: ${theme.colors.componentPrimaryTealDefault};
        ${
          isClick &&
          css`
            &:hover {
              background: ${theme.colors.componentPrimaryTealHover};
            }
            &:active {
              background: ${theme.colors.componentPrimaryTealPressed};
            }
          `
        }
      `;
    }
    if (colorType === "red") {
      return css`
        background: ${theme.colors.componentPrimaryRedDefault};
        ${
          isClick &&
          css`
            &:hover {
              background: ${theme.colors.componentPrimaryRedHover};
            }
            &:active {
              background: ${theme.colors.componentPrimaryRedPressed};
            }
          `
        }
      `;
    }
    if (colorType === "amber") {
      return css`
        background: ${theme.colors.componentPrimaryAmberDefault};
        ${
          isClick &&
          css`
            &:hover {
              background: ${theme.colors.componentPrimaryAmberHover};
            }
            &:active {
              background: ${theme.colors.componentPrimaryAmberPressed};
            }
          `
        }
      `;
    }
    if (colorType === "extra") {
      return css`
        background: ${theme.colors.componentTooltipBackground};
        color: ${theme.colors.componentTooltipTextColor};
      `;
    }
    return css`
      background: ${theme.colors.componentPrimaryOrangeDefault};
      ${
        isClick &&
        css`
          &:hover {
            background: ${theme.colors.componentPrimaryOrangeHover};
          }
          &:active {
            background: ${theme.colors.componentPrimaryOrangePressed};
          }
        `
      }
    `;
  }}
`;

BadgeWrapper.defaultProps = {
  theme: LIGHT_THEME
};
