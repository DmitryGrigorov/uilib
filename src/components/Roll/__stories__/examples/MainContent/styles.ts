import styled, { css } from "styled-components";
import { LIGHT_THEME } from "../../../../Pallette/themes";
import { BorderRadius, Padding } from "../../../../Pallette/style-utils";

export const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MessageStyled = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral1};
    color: ${theme.colors.neutral12};
  `};

  ${Padding.allSide(4, 6)};
  ${BorderRadius.roundBorder("16px")};

  .user-message {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

MessageStyled.defaultProps = {
  theme: LIGHT_THEME
};
