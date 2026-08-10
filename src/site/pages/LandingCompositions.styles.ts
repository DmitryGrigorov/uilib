import { motion } from "motion/react";
import styled, { css, keyframes } from "styled-components";

const focusRing = css`
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange3};
    outline-offset: 3px;
  }
`;

const rowReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CompositionMotion = styled(motion.div)`
  display: grid;
  gap: 32px;
`;

export const CompositionTabs = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 10px 12px 10px 18px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 58%, transparent);
  border-radius: 20px;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 82%,
    transparent
  );
  backdrop-filter: blur(18px);

  > div:first-child {
    flex: 0 0 auto;
  }

  > p {
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 13px;
    line-height: 1.5;
    text-align: right;
  }

  @media (max-width: 820px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px;

    > p {
      text-align: left;
    }
  }

  @media (max-width: 560px) {
    overflow-x: auto;

    > div:first-child {
      min-width: 520px;
    }
  }
`;

export const CompositionCanvas = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral7} 54%, transparent);
  border-radius: 30px;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 92%,
    ${({ theme }) => theme.colors.orange1}
  );
  box-shadow: 0 36px 100px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.neutral13} 20%,
      transparent
    );

  &::before {
    position: absolute;
    z-index: 0;
    top: -120px;
    right: -80px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      color-mix(
          in srgb,
          ${({ theme }) => theme.colors.orange4} 18%,
          transparent
        )
        0%,
      transparent 70%
    );
    content: "";
    pointer-events: none;
  }
`;

export const BrowserBar = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr minmax(220px, 420px) 1fr;
  align-items: center;
  min-height: 54px;
  padding: 0 20px;
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 52%, transparent);
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 76%,
    transparent
  );
  backdrop-filter: blur(18px);

  > span:last-child {
    justify-self: end;
    color: ${({ theme }) => theme.colors.teal8};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr auto;
  }
`;

export const BrowserDots = styled.div`
  display: flex;
  gap: 7px;

  > i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.neutral6};
  }

  > i:first-child {
    background: ${({ theme }) => theme.colors.red6};
  }

  > i:nth-child(2) {
    background: ${({ theme }) => theme.colors.amber6};
  }

  > i:last-child {
    background: ${({ theme }) => theme.colors.teal6};
  }
`;

export const BrowserLocation = styled.div`
  overflow: hidden;
  padding: 7px 16px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 50%, transparent);
  border-radius: 999px;
  color: ${({ theme }) => theme.colorSecondary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.background} 78%,
    transparent
  );
  font-size: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const CompositionPanel = styled(motion.div)`
  position: relative;
  z-index: 1;
  overflow: auto;
  padding: 18px;

  @media (max-width: 620px) {
    padding: 10px;
  }
`;

export const FormCanvas = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.7fr);
  min-height: 620px;
  overflow: visible;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  border-radius: 22px;
  background: ${({ theme }) => theme.backgroundSecondary};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FormSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: clamp(24px, 4vw, 42px);
  border-right: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  border-radius: 22px 0 0 22px;
  background:
    linear-gradient(
      160deg,
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.orange3} 12%,
        transparent
      ),
      transparent 48%
    ),
    color-mix(
      in srgb,
      ${({ theme }) => theme.background} 88%,
      ${({ theme }) => theme.colors.neutral2}
    );

  @media (max-width: 900px) {
    border-right: 0;
    border-bottom: 1px solid
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.neutral6} 48%,
        transparent
      );
    border-radius: 22px 22px 0 0;
  }
`;

export const FormIntro = styled.div`
  display: grid;
  justify-items: start;
  gap: 12px;

  > h3 {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colorMain};
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  > p {
    max-width: 30ch;
    margin: 0;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 14px;
    line-height: 1.65;
  }
`;

export const FormSteps = styled.nav`
  display: grid;
  gap: 8px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormStep = styled.button<{
  $active: boolean;
  $complete: boolean;
}>`
  ${focusRing};
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 11px;
  border: 1px solid
    ${({ $active, theme }) =>
      $active
        ? theme.colors.orange4
        : `color-mix(in srgb, ${theme.colors.neutral6} 42%, transparent)`};
  border-radius: 13px;
  color: ${({ theme }) => theme.colorMain};
  background: ${({ $active, theme }) =>
    $active
      ? `color-mix(in srgb, ${theme.colors.orange3} 12%, transparent)`
      : "transparent"};
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    transform 180ms ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.orange4};
    transform: translateX(3px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }

  > span {
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border-radius: 11px;
    color: ${({ $active, $complete, theme }) =>
      $active || $complete ? theme.colors.neutral0 : theme.colorSecondary};
    background: ${({ $active, $complete, theme }) =>
      $active || $complete ? theme.colors.orange6 : theme.colors.neutral4};
    font-size: 13px;
    font-weight: 800;
  }

  > div {
    display: grid;
    min-width: 0;
    gap: 3px;
  }

  strong,
  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    font-size: 13px;
  }

  small {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 11px;
  }
`;

export const FormContent = styled.form`
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: clamp(28px, 5vw, 56px);

  h3 {
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colorMain};
    font-size: clamp(22px, 3vw, 30px);
    letter-spacing: -0.025em;
  }

  h3 + p {
    max-width: 62ch;
    margin: 0 0 32px;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 24px;

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  min-width: 0;
  gap: 9px;

  > label {
    color: ${({ theme }) => theme.colorMain};
    font-size: 13px;
    font-weight: 700;
  }
`;

export const SpanField = styled(FieldGroup)`
  grid-column: 1 / -1;
`;

export const SwitchSetting = styled.div`
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  border-radius: 14px;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.background} 74%,
    transparent
  );

  > div {
    display: grid;
    gap: 4px;
  }

  strong {
    color: ${({ theme }) => theme.colorMain};
    font-size: 13px;
  }

  span {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 11px;
    line-height: 1.4;
  }
`;

export const ScheduleCard = styled.div`
  padding: 18px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 52%, transparent);
  border-radius: 17px;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.background} 68%,
    transparent
  );
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  > div {
    display: grid;
    gap: 4px;
  }

  strong {
    color: ${({ theme }) => theme.colorMain};
    font-size: 14px;
  }

  span {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 11px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(40px, 1fr));
  gap: 8px;

  > button {
    width: 100%;
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(4, minmax(40px, 1fr));
  }
`;

export const SubmissionNote = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;

  > span:last-child {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 12px;
  }
`;

export const FormActions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 22px;
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);

  > div {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 520px) {
    align-items: stretch;
    flex-direction: column-reverse;

    > div {
      justify-content: flex-end;
    }
  }
`;

export const DashboardCanvas = styled.div`
  display: grid;
  min-height: 690px;
  grid-template-columns: 190px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  border-radius: 22px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const DashboardSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 22px 14px;
  border-right: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 50%, transparent);
  background: ${({ theme }) => theme.backgroundSecondary};

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-right: 0;
    border-bottom: 1px solid
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.neutral6} 50%,
        transparent
      );
  }

  @media (max-width: 620px) {
    grid-template-columns: minmax(0, 1fr) auto;

    > nav {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }
`;

export const DashboardBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 7px;

  > span {
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border-radius: 11px;
    color: ${({ theme }) => theme.colors.neutral0};
    background: ${({ theme }) => theme.colors.orange6};
    font-size: 12px;
    font-weight: 900;
  }

  > div {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  strong {
    color: ${({ theme }) => theme.colorMain};
    font-size: 13px;
  }

  small {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 10px;
  }
`;

export const DashboardNav = styled.nav`
  display: grid;
  align-content: start;
  gap: 6px;
  height: 100%;

  @media (max-width: 900px) {
    display: flex;
    height: auto;
    overflow-x: auto;
  }
`;

export const DashboardNavItem = styled.button<{ $active?: boolean }>`
  ${focusRing};
  display: flex;
  min-height: 42px;
  align-items: center;
  gap: 10px;
  padding: 0 11px;
  border: 0;
  border-radius: 11px;
  color: ${({ $active, theme }) =>
    $active ? theme.colorMain : theme.colorSecondary};
  background: ${({ $active, theme }) =>
    $active
      ? `color-mix(in srgb, ${theme.colors.orange3} 14%, transparent)`
      : "transparent"};
  font: inherit;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  text-align: left;
  cursor: pointer;
  transition:
    color 160ms ease,
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colorMain};
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.colors.orange3} 10%,
      transparent
    );
    transform: translateX(2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
  }

  > div:last-child {
    margin-left: auto;
  }
`;

export const DashboardMain = styled.div`
  min-width: 0;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.background} 90%,
    ${({ theme }) => theme.colors.neutral2}
  );
`;

export const DashboardTopbar = styled.header`
  display: flex;
  min-height: 66px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 24px;
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.backgroundSecondary} 88%,
    transparent
  );

  > div:first-child {
    width: min(100%, 300px);
    margin-right: auto;
  }

  @media (max-width: 620px) {
    padding-inline: 14px;
  }
`;

export const DashboardContent = styled.div`
  display: grid;
  gap: 15px;
  padding: 20px 24px 26px;

  @media (max-width: 620px) {
    padding: 16px 14px 20px;
  }
`;

export const DashboardPageHead = styled.div`
  > div {
    width: 100%;
  }

  .page-header_text {
    font-size: 25px;
    letter-spacing: -0.025em;
  }
`;

export const DashboardKpis = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 620px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const KpiCard = styled.div`
  display: grid;
  justify-items: start;
  gap: 7px;
  padding: 14px;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 46%, transparent);
  border-radius: 14px;
  background: ${({ theme }) => theme.backgroundSecondary};

  > span:first-child {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 11px;
    font-weight: 600;
  }

  > strong {
    color: ${({ theme }) => theme.colorMain};
    font-size: 24px;
    letter-spacing: -0.03em;
  }
`;

export const DashboardTableFrame = styled.div`
  overflow: hidden;
  border: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundSecondary};

  .dashboard-table-scroll {
    overflow-x: auto;
  }

  table {
    min-width: 670px;
  }

  .composition-row {
    animation: ${rowReveal} 420ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    .composition-row {
      animation: none;
    }
  }

  ${[0, 1, 2, 3, 4]
    .map(
      (index) => `
        .composition-row-${index} {
          animation-delay: ${index * 55}ms;
        }
      `
    )
    .join("")}
`;

export const DashboardFilterBar = styled.div`
  display: flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 7px 14px;
  border-bottom: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const DashboardPagination = styled.footer`
  display: flex;
  min-height: 62px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 8px 14px;
  border-top: 1px solid
    color-mix(in srgb, ${({ theme }) => theme.colors.neutral6} 48%, transparent);

  > span {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 11px;
  }

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
    padding-block: 12px;
  }
`;
