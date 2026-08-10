import styled, { css } from "styled-components";
import Badge from "../../../Badge";
import { LIGHT_THEME, ITheme } from "../../../Pallette/themes";
import { BorderRadius, MEDIA, Padding } from "../../../Pallette/style-utils";
import { TSnackBarParams } from "../../types";

type ISnackBar = Partial<TSnackBarParams> & {
  theme: ITheme;
};

type TSnackBarComponentProps = Pick<ISnackBar, "status">;

export const SnackBarStyled = styled.div<TSnackBarComponentProps>`
  ${({ theme }) => css`
    ${BorderRadius.roundBorder(theme.shape.borderRadiusMedium)};
  `};
  ${Padding.allSide(3, 4)};
  ${MEDIA.desktopXl`max-width: 1290px`};
  ${MEDIA.desktopL`max-width: 960px`};
  ${MEDIA.desktopM`max-width: 678px`};
  ${MEDIA.mobile`width: calc(100vw - 48px); min-width: auto;`};
  display: flex;
  min-width: 440px;
  align-items: center;
  pointer-events: all;
  transition: all 0.3s;
  height: 48px;

  ${({ status, theme }) => {
    if (status === "info") {
      return css`
        background: ${theme.colors.blue10};
        color: ${theme.colors.textBasicExtra};
      `;
    }
    if (status === "success") {
      return css`
        background: ${theme.colors.teal10};
        color: ${theme.colors.textBasicExtra};
      `;
    }
    if (status === "error") {
      return css`
        background: ${theme.colors.red10};
        color: ${theme.colors.textBasicExtra};
      `;
    }
    if (status === "warning") {
      return css`
        background: ${theme.colors.amber10};
        color: ${theme.colors.textBasicExtra};
      `;
    }
    return css`
      background: ${theme.colors.componentTooltipBackground};
      color: ${theme.colors.componentTooltipTextColor};
    `;
  }}

  .snack-bar__text {
    word-break: break-all;
    padding: 4px;
  }

  &.snack-bar-enter,
  &.snack-bar-exit {
    opacity: 0;
    transform: translateY(100%);
  }

  &.snack-bar-enter-done {
    opacity: 1;
    transform: translateY(0);
  }

  &.snack-bar-exit-active {
    position: absolute;
  }

  .action-button {
    margin-left: auto;
    padding: 4px 8px;
  }
`;

SnackBarStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const SnackBarCounterStyled = styled(
  Badge
).attrs<TSnackBarComponentProps>(({ status }) => ({
  colorType: status ? "extra" : "blue",
  size: "l"
}))<TSnackBarComponentProps>`
  position: absolute;
  right: -10px;
  top: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

SnackBarCounterStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const CloseIconWrapper = styled.span<
  Pick<ISnackBar, "status" | "theme" | "action">
>`
  cursor: pointer;
  padding: 4px;
  margin-left: ${({ action }) => (action ? "8px" : "auto")};
  & > span {
    color: ${({ theme, status }) =>
      status
        ? theme.colors.textBasicExtra
        : theme.colors.componentTooltipTextColor};
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

CloseIconWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const LeadIconWrapper = styled.span<Pick<ISnackBar, "status" | "theme">>`
  padding: 4px;
  margin-right: 8px;
  & > span {
    color: ${({ theme, status }) =>
      status
        ? theme.colors.textBasicExtra
        : theme.colors.componentTooltipTextColor};
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

LeadIconWrapper.defaultProps = {
  theme: LIGHT_THEME
};
