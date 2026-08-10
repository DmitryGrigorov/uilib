import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const interactiveStyles = css`
  border-radius: 8px;
  transition:
    color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const FooterRoot = styled.footer`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral3};
  background:
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.backgroundSecondaryOrange} 0%,
      transparent 52%
    ),
    ${({ theme }) => theme.colors.backgroundPrimaryMain};
  color: ${({ theme }) => theme.colors.textBasicDefault};

  &::before {
    position: absolute;
    z-index: -1;
    top: -112px;
    right: -80px;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    content: "";
    filter: blur(96px);
    opacity: 0.42;
    pointer-events: none;
  }
`;

export const FooterContainer = styled.div`
  width: min(100% - 48px, 1200px);
  margin: 0 auto;
  padding: 72px 0 28px;

  @media (max-width: 640px) {
    width: min(100% - 32px, 1200px);
    padding-top: 48px;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 1.6fr) repeat(2, minmax(140px, 0.7fr));
  gap: 48px;
  padding-bottom: 56px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > div:first-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    gap: 36px;

    > div:first-child {
      grid-column: auto;
    }
  }
`;

export const BrandLink = styled(Link)`
  ${interactiveStyles}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.textColoredOrange};
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    outline-offset: 4px;
  }
`;

export const BrandMark = styled.span`
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
  ${({ theme }) => theme.shadows.sp.bottom};
  color: ${({ theme }) => theme.colors.textBasicExtra};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const BrandName = styled.span`
  font-size: 22px;
  font-weight: 750;
  letter-spacing: -0.03em;
`;

export const BrandDescription = styled.p`
  max-width: 430px;
  margin: 22px 0 0;
  color: ${({ theme }) => theme.colors.neutral8};
  font-size: 15px;
  line-height: 1.7;
`;

export const FooterLinkGroup = styled.nav`
  min-width: 0;
`;

export const FooterHeading = styled.h2`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const FooterLinkList = styled.ul`
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterInternalLink = styled(Link)`
  ${interactiveStyles}
  display: inline-flex;
  margin-left: -8px;
  padding: 7px 8px;
  color: ${({ theme }) => theme.colors.neutral8};
  font-size: 15px;
  line-height: 1.4;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    color: ${({ theme }) => theme.colors.textColoredOrange};
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    outline-offset: 2px;
  }
`;

export const FooterExternalLink = styled.a`
  ${interactiveStyles}
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-left: -8px;
  padding: 7px 8px;
  color: ${({ theme }) => theme.colors.neutral8};
  font-size: 15px;
  line-height: 1.4;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    color: ${({ theme }) => theme.colors.textColoredOrange};
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    outline-offset: 2px;
  }
`;

export const ExternalArrow = styled.span`
  color: ${({ theme }) => theme.colors.textColoredOrange};
  font-size: 14px;
  line-height: 1;
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral3};

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
`;

export const FooterMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral7};
  font-size: 13px;
  line-height: 1.5;
`;
