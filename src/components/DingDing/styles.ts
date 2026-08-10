import styled, { css, RuleSet } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import type { IDingDingProps, TSizeDingDing } from "./types";

type TDingDingStyledProps = Pick<IDingDingProps, "size" | "isSelected">;

type TDingDingDot = Pick<IDingDingProps, "colorNotificationCount">;

const SIZE_ICON: Record<TSizeDingDing, RuleSet<object>> = {
  s: css`
    width: 12px;
    height: 12px;
  `,
  m: css`
    width: 16px;
    height: 16px;
  `,
  l: css`
    width: 24px;
    height: 24px;
  `
};

const SIZE_DING_DING: Record<TSizeDingDing, RuleSet<object>> = {
  s: css`
    width: 24px;
    height: 24px;
  `,
  m: css`
    width: 32px;
    height: 32px;
  `,
  l: css`
    width: 48px;
    height: 48px;
  `
};

const activeStyles = css`
  background: ${({ theme }) => theme.colors.backgroundSecondaryNeutral};
  .ding-ding__icon {
    color: ${({ theme }) => theme.colors.textBasicPressed};
  }
`;

export const DingDingStyled = styled.button<TDingDingStyledProps>`
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  gap: ${({ size }) => (size === "l" ? 4 : 2)}px;

  ${({ size }) => SIZE_DING_DING[size]};

  .ding-ding__icon {
    ${({ theme, size }) => css`
      color: ${theme.colors.textBasicDefault};
      svg {
        ${SIZE_ICON[size]};
      }
    `};
  }

  &:hover {
    ${({ theme }) => css`
      background: ${theme.colors.backgroundSecondaryNeutral};
      .ding-ding__icon {
        color: ${theme.colors.textBasicHover};
      }
    `};
  }

  &:active {
    ${activeStyles};
  }

  &:disabled {
    ${({ theme }) => css`
      cursor: not-allowed;
      background: ${theme.colors.backgroundSecondaryNeutral};
      .ding-ding__icon {
        color: ${theme.colors.textBasicDisabled};
      }
    `}
  }

  .ding-ding__badge {
    position: absolute;
    right: ${({ size }) => (size === "s" ? -5 : -10)}px;
    top: 0;
  }

  ${({ isSelected }) => isSelected && activeStyles}
`;

DingDingStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const DingDingStick = styled.div`
  width: 8px;
  height: 1px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.textBasicPressed};
`;

DingDingStick.defaultProps = {
  theme: LIGHT_THEME
};

export const DingDingDot = styled.div<TDingDingDot>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral0};
  background: ${({ theme, colorNotificationCount }) =>
    colorNotificationCount === "blue"
      ? theme.colors.componentPrimaryBlueDefault
      : theme.colors.componentPrimaryRedDefault};
`;

DingDingDot.defaultProps = {
  theme: LIGHT_THEME
};
