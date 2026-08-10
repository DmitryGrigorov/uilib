import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Shape } from "../../../components/Pallette/Shape";

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CatalogPage = styled.main`
  width: min(100%, 1280px);
  min-height: 100%;
  padding-bottom: 72px;
  color: ${({ theme }) => theme.colors.textBasicDefault};
`;

export const CatalogHero = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 48px;
  align-items: end;
  overflow: hidden;
  padding: clamp(36px, 5vw, 72px);
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: 32px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.backgroundTetriary0} 0%,
    ${({ theme }) => theme.colors.backgroundTetriary1} 62%,
    ${({ theme }) => theme.colors.componentSecondaryOrangeDefault} 160%
  );
  box-shadow: 0 30px 80px -56px ${({ theme }) => theme.colors.neutral13};

  &::before {
    position: absolute;
    z-index: -1;
    top: -180px;
    right: -120px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    filter: blur(92px);
    opacity: 0.48;
    content: "";
  }
`;

export const CatalogHeroCopy = styled.div`
  max-width: 720px;
`;

export const CatalogEyebrow = styled.p`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.textColoredOrange};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const CatalogTitle = styled.h1`
  max-width: 720px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 720;
  line-height: 0.98;
  letter-spacing: -0.055em;
`;

export const CatalogIntro = styled.p`
  max-width: 680px;
  margin: 28px 0 0;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
`;

export const Stats = styled.dl`
  display: grid;
  gap: 12px;
  margin: 0;
`;

export const Stat = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 16px;
  align-items: baseline;
  padding: 15px 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: ${Shape.borderRadiusMedium};
  background: ${({ theme }) => theme.colors.backgroundTetriary0};
`;

export const StatValue = styled.dt`
  color: ${({ theme }) => theme.colors.textColoredOrange};
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
`;

export const StatLabel = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: 13px;
  line-height: 1.4;
`;

export const CatalogControls = styled.section`
  position: sticky;
  z-index: 5;
  top: 0;
  margin-top: 28px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.backgroundPrimaryMain};
  box-shadow: 0 18px 54px -42px ${({ theme }) => theme.colors.neutral13};
`;

export const SearchLabel = styled.label`
  display: block;
  margin: 0 0 9px 2px;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  font-size: 13px;
  font-weight: 600;
`;

export const SearchField = styled.div`
  position: relative;
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 18px;
  color: ${({ theme }) => theme.colors.textBasicDisabled};
  font-size: 24px;
  line-height: 1;
  transform: translateY(-55%) rotate(-18deg);
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 52px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: 14px;
  outline: none;
  background: ${({ theme }) => theme.colors.backgroundTetriary1};
  color: ${({ theme }) => theme.colors.textBasicPressed};
  font: inherit;
  font-size: 15px;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    background-color 160ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textBasicDisabled};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.componentPrimaryNeutralHover};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    box-shadow: 0 0 0 3px
      ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    background: ${({ theme }) => theme.colors.backgroundTetriary0};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const ClearSearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  display: grid;
  width: 32px;
  height: 32px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font: inherit;
  font-size: 22px;
  line-height: 1;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.componentSecondaryNeutralHover};
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    outline-offset: 1px;
  }
`;

export const CategoryFilters = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-top: 14px;
  padding: 2px 1px 4px;
  scrollbar-width: thin;
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 9px;
  align-items: center;
  min-height: 38px;
  padding: 8px 13px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active
        ? theme.colors.componentPrimaryOrangeDefault
        : theme.colors.neutral4};
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active
      ? theme.colors.componentPrimaryOrangeDefault
      : theme.colors.componentSecondaryNeutralDefault};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textBasicExtra : theme.colors.textBasicDefault};
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 150ms ease,
    border-color 150ms ease,
    background-color 150ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    outline-offset: 2px;
  }
`;

export const CategoryCount = styled.span`
  min-width: 22px;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundTetriary0};
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: 11px;
  line-height: 18px;
  text-align: center;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 68px;
  padding: 20px 2px 8px;
`;

export const ResultsSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: 14px;
  font-weight: 600;
`;

export const ResultsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ResultsItem = styled.li`
  min-width: 0;
  animation: ${enter} 360ms ease both;
`;

export const CatalogCard = styled(Link)`
  position: relative;
  display: flex;
  min-height: 248px;
  overflow: hidden;
  flex-direction: column;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: ${Shape.borderRadiusMedium};
  background: ${({ theme }) => theme.colors.backgroundTetriary0};
  color: ${({ theme }) => theme.colors.textBasicDefault};
  text-decoration: none;
  box-shadow: 0 16px 42px -40px ${({ theme }) => theme.colors.neutral13};
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &::before {
    position: absolute;
    top: 0;
    right: 22px;
    left: 22px;
    height: 3px;
    border-radius: 0 0 3px 3px;
    background: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    content: "";
    transform: scaleX(0.24);
    transform-origin: left;
    transition: transform 180ms ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
    box-shadow: 0 28px 58px -42px ${({ theme }) => theme.colors.neutral13};
    transform: translateY(-4px);

    &::before {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    outline-offset: 3px;
  }
`;

export const CatalogCardHeader = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CatalogCardLabel = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.45;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ReleaseBadge = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 6px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColoredTeal};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.componentPrimaryTealDefault};
  }
`;

export const CatalogCardName = styled.h2`
  overflow: hidden;
  margin: 32px 0 12px;
  color: ${({ theme }) => theme.colors.textBasicPressed};
  font-size: clamp(23px, 2.4vw, 30px);
  font-weight: 690;
  line-height: 1.1;
  letter-spacing: -0.04em;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CatalogCardDescription = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.textBasicDefault};
  font-size: 13px;
  line-height: 1.55;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const CatalogCardFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.textBasicDisabled};
  font-size: 11px;
  font-weight: 600;
`;

export const ViewLabel = styled.span`
  color: ${({ theme }) => theme.colors.textColoredOrange};
  font-size: 12px;
  transition: transform 180ms ease;

  ${CatalogCard}:hover & {
    transform: translateX(3px);
  }
`;

export const EmptyState = styled.section`
  display: grid;
  min-height: 360px;
  padding: 48px 24px;
  place-items: center;
  align-content: center;
  border: 1px dashed ${({ theme }) => theme.colors.neutral4};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.backgroundTetriary0};
  text-align: center;

  h2 {
    margin: 18px 0 8px;
    color: ${({ theme }) => theme.colors.textBasicPressed};
    font-size: 24px;
    letter-spacing: -0.03em;
  }

  p {
    max-width: 460px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textBasicDefault};
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const EmptyStateMark = styled.div`
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
  color: ${({ theme }) => theme.colors.textColoredOrange};
  font-size: 32px;
  transform: rotate(-12deg);
`;

export const EmptyStateButton = styled.button`
  min-height: 42px;
  margin-top: 24px;
  padding: 10px 18px;
  border: 1px solid ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
  color: ${({ theme }) => theme.colors.textBasicExtra};
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 150ms ease,
    transform 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.componentPrimaryOrangeHover};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.componentSecondaryOrangeDefault};
    outline-offset: 3px;
  }
`;

export const CatalogResponsiveStyles = createGlobalStyle`
  @media (max-width: 1080px) {
    ${CatalogHero} {
      grid-template-columns: 1fr;
    }

    ${Stats} {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    ${Stat} {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    ${ResultsGrid} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    ${CatalogPage} {
      padding-bottom: 48px;
    }

    ${CatalogHero} {
      gap: 32px;
      padding: 32px 22px;
      border-radius: 24px;
    }

    ${CatalogIntro} {
      margin-top: 20px;
    }

    ${Stats} {
      grid-template-columns: 1fr;
    }

    ${Stat} {
      grid-template-columns: 72px 1fr;
    }

    ${CatalogControls} {
      margin-top: 18px;
      padding: 14px;
      border-radius: ${Shape.borderRadiusMedium};
    }

    ${SearchInput} {
      padding-right: 46px;
      padding-left: 46px;
    }

    ${ResultsGrid} {
      grid-template-columns: 1fr;
    }

    ${CatalogCard} {
      min-height: 224px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    ${ResultsItem} {
      animation: none;
    }

    ${CatalogCard},
    ${CategoryButton},
    ${EmptyStateButton},
    ${ViewLabel} {
      transition: none;
    }

    ${CatalogCard}:hover,
    ${CategoryButton}:hover,
    ${EmptyStateButton}:hover {
      transform: none;
    }
  }
`;
