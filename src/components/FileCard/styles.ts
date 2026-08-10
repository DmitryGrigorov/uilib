import styled, { css, RuleSet, DefaultTheme } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import { P2 } from "../typography";
import { TFileCardStatus } from "./types";

interface IFileCardIconWrapperProps {
  status?: TFileCardStatus;
}

const getStylesIconWrapper = ({
  status,
  theme
}: {
  status?: TFileCardStatus;
  theme: DefaultTheme;
}): RuleSet<object> => {
  switch (status) {
    case "warning":
      return css`
        background: ${theme.colors.backgroundSecondaryAmber};
        color: ${theme.colors.textColoredAmber};
      `;
    case "error":
      return css`
        background: ${theme.colors.backgroundSecondaryRed};
        color: ${theme.colors.textColoredRed};
      `;
    case "success":
      return css`
        background: ${theme.colors.backgroundSecondaryTeal};
        color: ${theme.colors.textColoredTeal};
      `;
    default:
      return css`
        background: ${theme.colors.backgroundSecondaryOrange};
        color: ${theme.colors.textColoredOrange};
      `;
  }
};

export const FileCardIconWrapper = styled.div<IFileCardIconWrapperProps>`
  padding: 8px;
  border-radius: ${({ theme }) => theme.shape.borderRadiusDefault};
  ${getStylesIconWrapper};
  .file-card__icon-extension {
    color: unset;
  }

  .file-card__loader {
    margin: 0;
    padding: 4px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

FileCardIconWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const FileCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

export const FileCardContentStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const FileNameTextStyled = styled(P2)`
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.neutral12};
`;

FileNameTextStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const FileNameInputStyled = styled.input`
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.neutral1};
  color: ${({ theme }) => theme.colors.neutral12};
  border: none;
  padding: 4px;
  outline: none;
`;

FileNameInputStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const FileCardButtonStyled = styled.button`
  padding: 4px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.overlay2};
  }

  &:active {
    color: ${({ theme }) => theme.colors.orange9};
    background: transparent;
  }
`;

FileCardButtonStyled.defaultProps = {
  theme: LIGHT_THEME
};
