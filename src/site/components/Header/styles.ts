import { rgba } from "polished";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { DarkThemeSite } from "../../themes/dark";

interface IHeaderLayoutProps {
  $compact: boolean;
}

interface IMobilePanelProps {
  $isOpen: boolean;
}

const withAlpha = (color: unknown, opacity: number): string =>
  rgba(String(color), opacity);

const interactiveFocus = css`
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ theme }) =>
        withAlpha(theme.colors.componentPrimaryOrangeDefault, 0.28)};
  }
`;

export const HeaderStyled = styled.header<IHeaderLayoutProps>`
  position: sticky;
  z-index: ${({ theme }) => theme.zindex.foreground};
  top: 16px;
  display: flex;
  width: min(1280px, calc(100% - 32px));
  min-height: 64px;
  margin: 0 auto;
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => withAlpha(theme.colors.neutral6, 0.52)};
  border-radius: 18px;
  background: ${({ theme }) =>
    withAlpha(theme.colors.backgroundPrimaryMain, 0.82)};
  box-shadow: 0 16px 48px
    ${({ theme }) => withAlpha(theme.colors.neutral13, 0.12)};
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);

  ${({ $compact }) =>
    $compact &&
    css`
      position: static;
      width: 100%;
      min-height: 35px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    `}

  @media (max-width: 949px) {
    top: 8px;
    width: calc(100% - 24px);
    min-height: 60px;
    padding: 7px 8px 7px 12px;
    border-radius: 16px;

    ${({ $compact }) =>
      $compact &&
      css`
        width: 100%;
        min-height: 35px;
        padding: 0;
      `}
  }
`;

HeaderStyled.defaultProps = {
  theme: DarkThemeSite
};

export const HeaderInnerStyled = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  min-width: 0;
  gap: 10px;
`;

export const HeaderLogoStyled = styled(Link)`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  text-decoration: none;

  img {
    display: block;
    width: 122px;
    height: 35px;
  }

  ${interactiveFocus}
`;

HeaderLogoStyled.defaultProps = {
  theme: DarkThemeSite
};

export const DesktopNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: 949px) {
    display: none;
  }
`;

export const NavigationLinkStyled = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  transition:
    color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textColoredOrange};
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
  }

  &:active {
    transform: translateY(1px);
  }

  &[aria-current="page"] {
    color: ${({ theme }) => theme.colors.textColoredOrange};
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
  }

  ${interactiveFocus}
`;

export const HeaderSearchSlotStyled = styled.div`
  width: clamp(210px, 23vw, 320px);
  margin-left: auto;

  @media (max-width: 1120px) {
    width: clamp(190px, 21vw, 250px);
  }

  @media (max-width: 949px) {
    display: none;
  }
`;

export const SearchRootStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInputWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.textBasicDisabled};

  > .header-search-icon {
    position: absolute;
    z-index: 1;
    left: 12px;
    color: inherit;
    pointer-events: none;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 38px 0 38px;
  border: 1px solid ${({ theme }) => theme.colors.neutral5};
  border-radius: 11px;
  outline: none;
  background: ${({ theme }) =>
    withAlpha(theme.colors.backgroundTetriary1, 0.72)};
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 14px;
  line-height: 20px;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textBasicDisabled};
    opacity: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.neutral7};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    background: ${({ theme }) => theme.colors.backgroundPrimaryMain};
    box-shadow: 0 0 0 3px
      ${({ theme }) =>
        withAlpha(theme.colors.componentPrimaryOrangeDefault, 0.22)};
  }
`;

export const SearchClearButtonStyled = styled.button`
  position: absolute;
  right: 6px;
  display: inline-grid;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  place-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.textBasicDisabled};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.componentSecondaryNeutralHover};
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  svg {
    width: 14px;
    height: 14px;
  }

  ${interactiveFocus}
`;

export const SearchResultsStyled = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.tooltip};
  top: calc(100% + 8px);
  right: 0;
  left: 0;
  overflow: hidden;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.colors.neutral5};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.backgroundPrimaryMain};
  box-shadow: 0 18px 48px
    ${({ theme }) => withAlpha(theme.colors.neutral13, 0.2)};
`;

export const SearchResultStyled = styled.button`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  min-height: 48px;
  padding: 7px 9px 7px 11px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  text-align: left;
  cursor: pointer;

  &:hover,
  &[aria-selected="true"] {
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
  }

  ${interactiveFocus}
`;

export const SearchResultCopyStyled = styled.span`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 1px;
`;

export const SearchResultNameStyled = styled.span`
  overflow: hidden;
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 14px;
  font-weight: 650;
  line-height: 19px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SearchResultTitleStyled = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textBasicDisabled};
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SearchResultArrowStyled = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.textColoredOrange};

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const SearchEmptyStyled = styled.p`
  margin: 0;
  padding: 11px 12px;
  color: ${({ theme }) => theme.colors.textBasicDisabled};
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 13px;
  line-height: 18px;
`;

export const ResourceNavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: 1120px) {
    display: none;
  }
`;

export const ExternalLinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  gap: 5px;
  padding: 0 9px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-family: ${({ theme }) => theme.typography.fontFamily}, sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  text-decoration: none;
  transition:
    color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textColoredOrange};
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    width: 13px;
    height: 13px;
  }

  ${interactiveFocus}
`;

export const HeaderSettingsStyled = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-left: auto;

  [data-header-theme-label] {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    margin: -1px;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;

export const MenuButtonStyled = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 11px;
  place-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.componentSecondaryNeutralHover};
  }

  svg {
    width: 20px;
    height: 20px;
  }

  ${interactiveFocus}

  @media (max-width: 949px) {
    display: grid;
  }
`;

export const MobilePanelStyled = styled.div<IMobilePanelProps>`
  position: absolute;
  top: calc(100% + 16px);
  right: -8px;
  left: -12px;
  display: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => withAlpha(theme.colors.neutral6, 0.62)};
  border-radius: 16px;
  background: ${({ theme }) =>
    withAlpha(theme.colors.backgroundPrimaryMain, 0.96)};
  box-shadow: 0 18px 48px
    ${({ theme }) => withAlpha(theme.colors.neutral13, 0.2)};
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);

  @media (max-width: 949px) {
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
  }
`;

export const MobileNavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;

  ${NavigationLinkStyled} {
    justify-content: center;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;

    ${NavigationLinkStyled} {
      justify-content: flex-start;
    }
  }
`;

export const MobileResourcesStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral4};

  ${ExternalLinkStyled} {
    justify-content: center;
  }
`;

export const ScreenReaderOnlyStyled = styled.span`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip-path: inset(50%);
  white-space: nowrap;
`;
