import { motion } from "motion/react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { DarkThemeSite } from "../themes/dark";

const focusRing = css`
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange3};
    outline-offset: 3px;
  }
`;

export const LandingRoot = styled.main`
  --site-content-width: 1200px;
  min-height: 100vh;
  overflow: hidden;
  color: ${({ theme }) => theme.colorMain};
  background:
    radial-gradient(
      circle at 8% 8%,
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.orange3} 18%,
        transparent
      ),
      transparent 30rem
    ),
    radial-gradient(
      circle at 92% 20%,
      color-mix(in srgb, ${({ theme }) => theme.colors.blue3} 10%, transparent),
      transparent 26rem
    ),
    ${({ theme }) => theme.background};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.neutral0};
    background: ${({ theme }) => theme.colors.orange3};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

LandingRoot.defaultProps = { theme: DarkThemeSite };

export const Section = styled.section<{ $compact?: boolean }>`
  position: relative;
  width: min(var(--site-content-width), calc(100% - 48px));
  margin: 0 auto;
  padding: ${({ $compact }) => ($compact ? "72px 0" : "112px 0")};

  @media (max-width: 720px) {
    width: min(100% - 32px, var(--site-content-width));
    padding: ${({ $compact }) => ($compact ? "52px 0" : "76px 0")};
  }
`;

export const HeroSection = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(420px, 0.96fr);
  align-items: center;
  min-height: calc(100svh - 84px);
  gap: clamp(48px, 7vw, 104px);
  padding-top: 84px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 88px;
  }

  @media (max-width: 560px) {
    padding-top: 64px;
  }
`;

export const HeroCopy = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 34px;
  padding: 6px 12px 6px 8px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.orange3} 38%, transparent);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.textColoredOrange};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.orange3} 9%,
    transparent
  );
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &::before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange3};
    box-shadow: 0 0 24px ${({ theme }) => theme.colors.orange3};
    content: "";
  }
`;

export const HeroTitle = styled.h1`
  max-width: 760px;
  margin: 28px 0 24px;
  color: ${({ theme }) => theme.colorMain};
  font-size: clamp(52px, 6.3vw, 88px);
  font-weight: 760;
  letter-spacing: -0.065em;
  line-height: 0.98;

  span {
    color: ${({ theme }) => theme.colors.textColoredOrange};
  }

  @media (max-width: 560px) {
    font-size: clamp(44px, 14vw, 64px);
  }
`;

export const HeroDescription = styled.p`
  max-width: 660px;
  margin: 0;
  color: ${({ theme }) => theme.colorSecondary};
  font-size: clamp(18px, 2vw, 21px);
  line-height: 1.65;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 34px;
`;

const actionStyles = css`
  ${focusRing};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PrimaryAction = styled(Link)`
  ${actionStyles};
  gap: 10px;
  color: ${({ theme }) => theme.colors.textBasicExtra};
  background: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};
  box-shadow: 0 16px 38px
    color-mix(in srgb, ${({ theme }) => theme.colors.orange3} 30%, transparent);

  &:hover {
    background: ${({ theme }) => theme.colors.componentPrimaryOrangeHover};
    box-shadow: 0 18px 44px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.orange3} 38%,
        transparent
      );
  }
`;

export const SecondaryAction = styled.a`
  ${actionStyles};
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  color: ${({ theme }) => theme.colorMain};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 78%,
    transparent
  );

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange3};
    background: ${({ theme }) => theme.backgroundSecondary};
  }
`;

export const InstallCommand = styled.button`
  ${focusRing};
  display: flex;
  align-items: center;
  width: min(100%, 480px);
  min-height: 56px;
  margin-top: 24px;
  padding: 8px 10px 8px 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral4};
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.neutral10};
  background: ${({ theme }) => theme.backgroundSecondary};
  cursor: pointer;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  text-align: left;
  transition: border-color 160ms ease;

  code {
    overflow: hidden;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    margin-left: 12px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.orange3};
    background: ${({ theme }) => theme.backgroundTag};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange3};
  }
`;

export const HeroPreviewShell = styled(motion.div)`
  position: relative;
  z-index: 1;
  padding: 1px;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.orange3},
    ${({ theme }) => theme.colors.neutral4} 42%,
    transparent 80%
  );
  box-shadow:
    0 30px 90px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.neutral13} 28%,
        transparent
      ),
    0 0 80px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.orange3} 16%,
        transparent
      );

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    content: "";
  }

  &::before {
    top: -42px;
    right: -42px;
    width: 150px;
    height: 150px;
    border: 1px solid
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.orange3} 36%,
        transparent
      );
  }

  &::after {
    bottom: -64px;
    left: -52px;
    width: 110px;
    height: 110px;
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.orange3} 22%,
      transparent
    );
    filter: blur(4px);
  }
`;

export const HeroPreview = styled.div`
  min-height: 540px;
  padding: 22px;
  border-radius: 29px;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 94%,
    transparent
  );
  backdrop-filter: blur(24px);

  @media (max-width: 560px) {
    min-height: auto;
    padding: 16px;
  }
`;

export const PreviewToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral3};

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 13px;
    font-weight: 700;
  }
`;

export const WindowDots = styled.span`
  display: inline-flex;
  gap: 5px;

  i {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.neutral5};
  }

  i:first-child {
    background: ${({ theme }) => theme.colors.orange3};
  }
`;

export const PreviewContent = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 20px;
`;

export const PreviewCard = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: 18px;
  background: ${({ theme }) => theme.background};

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colorMain};
    font-size: 16px;
  }

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const PreviewCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
`;

export const PreviewForm = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 10px;

  > div {
    min-width: 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewStatusRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const TrustStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: min(var(--site-content-width), calc(100% - 48px));
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral3};

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    width: min(100% - 32px, var(--site-content-width));
  }
`;

export const TrustMetric = styled.div`
  padding: 30px 20px;
  text-align: center;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.neutral3};
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colorMain};
    font-size: clamp(24px, 3vw, 34px);
    letter-spacing: -0.04em;
  }

  span {
    margin-top: 6px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 13px;
  }

  @media (max-width: 720px) {
    &:nth-child(3) {
      border-left: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.neutral3};
    }

    &:nth-child(4) {
      border-top: 1px solid ${({ theme }) => theme.colors.neutral3};
    }
  }
`;

export const SectionHeading = styled.div`
  max-width: 720px;
  margin-bottom: 48px;

  > span {
    color: ${({ theme }) => theme.colors.orange3};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 14px 0 16px;
    color: ${({ theme }) => theme.colorMain};
    font-size: clamp(36px, 5vw, 58px);
    letter-spacing: -0.055em;
    line-height: 1.05;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 18px;
    line-height: 1.65;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(motion.article)`
  position: relative;
  min-height: 260px;
  padding: 28px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: 24px;
  background: ${({ theme }) => theme.backgroundSecondary};

  &::after {
    position: absolute;
    right: -50px;
    bottom: -60px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.orange3} 11%,
      transparent
    );
    content: "";
    transition: transform 220ms ease;
  }

  &:hover::after {
    transform: scale(1.18);
  }

  h3 {
    max-width: 380px;
    margin: 22px 0 12px;
    color: ${({ theme }) => theme.colorMain};
    font-size: 25px;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 470px;
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    line-height: 1.65;
  }
`;

export const FeatureIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.orange3} 34%, transparent);
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.orange3};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.orange3} 10%,
    transparent
  );
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseCard = styled(motion.article)<{ $columns?: number }>`
  grid-column: span ${({ $columns = 4 }) => $columns};
  min-height: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: 24px;
  background: ${({ theme }) => theme.backgroundSecondary};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colorMain};
    font-size: 18px;
  }

  > p {
    min-height: 42px;
    margin: 8px 0 24px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 14px;
    line-height: 1.5;
  }

  @media (max-width: 820px) {
    grid-column: auto;
  }
`;

export const ComponentStage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  gap: 12px;
  padding: 20px;
  border-radius: 18px;
  background:
    linear-gradient(
      ${({ theme }) => theme.colors.neutral3} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.neutral3} 1px,
      transparent 1px
    ),
    ${({ theme }) => theme.background};
  background-size: 24px 24px;
`;

export const InputStage = styled(ComponentStage)`
  > div {
    width: min(100%, 340px);
  }
`;

export const PerformancePanel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 42px;
  padding: clamp(28px, 5vw, 54px);
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: 30px;
  background: ${({ theme }) => theme.backgroundSecondary};

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

export const PerformanceCopy = styled.div`
  h2 {
    margin: 14px 0 18px;
    color: ${({ theme }) => theme.colorMain};
    font-size: clamp(34px, 5vw, 54px);
    letter-spacing: -0.055em;
    line-height: 1.04;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 17px;
    line-height: 1.7;
  }
`;

export const PerformanceList = styled.div`
  display: grid;
  gap: 12px;
`;

export const PerformanceItem = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral3};
  border-radius: 18px;
  background: ${({ theme }) => theme.background};

  > strong {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.orange3};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.orange3} 11%,
      transparent
    );
    font-size: 13px;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colorMain};
    font-size: 16px;
  }

  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const CtaSection = styled(Section)`
  padding-top: 76px;
`;

export const CtaPanel = styled(motion.div)`
  position: relative;
  padding: clamp(38px, 7vw, 80px);
  overflow: hidden;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.textBasicExtra};
  background: ${({ theme }) => theme.colors.componentPrimaryOrangeDefault};

  &::before {
    position: absolute;
    top: -180px;
    right: -100px;
    width: 440px;
    height: 440px;
    border: 80px solid
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.textBasicExtra} 12%,
        transparent
      );
    border-radius: 50%;
    content: "";
  }

  h2,
  p,
  div {
    position: relative;
    z-index: 1;
  }

  h2 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(38px, 6vw, 68px);
    letter-spacing: -0.06em;
    line-height: 1;
  }

  p {
    max-width: 630px;
    margin: 22px 0 0;
    color: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.textBasicExtra} 84%,
      transparent
    );
    font-size: 18px;
    line-height: 1.6;
  }
`;

export const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

export const CtaPrimary = styled(Link)`
  ${actionStyles};
  color: ${({ theme }) => theme.colors.textBasicDefault};
  background: ${({ theme }) => theme.colors.backgroundPrimaryMain};
`;

export const CtaSecondary = styled.a`
  ${actionStyles};
  border: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.textBasicExtra} 52%,
      transparent
    );
  color: ${({ theme }) => theme.colors.textBasicExtra};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.textBasicExtra} 10%,
    transparent
  );
`;

export const ModalDemoContent = styled.div`
  display: grid;
  gap: 14px;
  padding: 4px 0;
  color: ${({ theme }) => theme.colorMain};

  p {
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    line-height: 1.6;
  }
`;
