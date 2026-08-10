import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../Pallette/themes";
import P2 from "../typography/P2";
import H from "../typography/H";
import { defineResponsibleWidth } from "../utils/defineResponsibleSize";
import { TEmptyStateProps } from "./types";

export const EmptyStateWrapper = styled.div<TEmptyStateProps>`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  ${({ width }) => defineResponsibleWidth(width)};
`;

EmptyStateWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const IconBox = styled.div<TEmptyStateProps & { children: JSX.Element }>`
  ${({ theme }) => css`
    background: ${theme.colors.amber2};
    svg {
      width: 32px;
      height: 32px;
      color: ${theme.colors.componentPrimaryAmberPressed};
      z-index: 2;
    }
  `}
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 24px;
`;

IconBox.defaultProps = {
  theme: LIGHT_THEME
};

export const HeaderStyled = styled(H)<TEmptyStateProps>`
  ${({ theme }) => css`
    color: ${theme.colors.textBasicPressed};
  `};
  text-align: center;
  padding: 4px;
  line-height: 24px;
  margin-bottom: 8px;
`;

HeaderStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const TextStyled = styled(P2)<TEmptyStateProps>`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.fontSizeM};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.textBasicDefault};
  `};
  text-align: center;
  padding: 4px;
  margin-bottom: 24px;
  line-height: 24px;
`;

TextStyled.defaultProps = {
  theme: LIGHT_THEME
};
