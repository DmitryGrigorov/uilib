import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { Padding } from "../Pallette/style-utils";
import Button from "../Button";
import { ZINDEX } from "../Pallette/ZIndex";

interface IBannerStyled {
  type: "overlay" | "shifting";
  theme: ITheme;
}

type TBannerWrapper = Omit<IBannerStyled, "type">;

export const BannerContainer = styled.div<IBannerStyled>`
  padding: 24px 0;
  border-radius: 16px;
  width: 100%;
  ${({ type }) =>
    type === "overlay" &&
    css`
      position: fixed;
      top: 0;
      z-index: ${ZINDEX.tooltip};
    `}

  background: ${({ theme }: { theme: ITheme }) =>
    theme.colors.backgroundPrimaryMain};
`;

BannerContainer.defaultProps = {
  theme: LIGHT_THEME
};

export const BannerStyled = styled.div<Omit<IBannerStyled, "type">>`
  display: flex;
  ${({ theme }) => theme.dividers.secondary.bottom}
  ${Padding.allSide(6, 10, 4)};
`;

BannerStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const ContentWrapper = styled.div<TBannerWrapper>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  .banner-message {
    padding: 4px;
    color: ${({ theme }) => theme.colors.textBasicPressed};
  }
`;

ContentWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`;

export const ButtonStyled = styled(Button)`
  margin-top: auto;
  padding: 4px 8px;
  height: 32px;
  p {
    margin: 0;
  }
`;
