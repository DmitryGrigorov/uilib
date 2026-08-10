import styled, { css } from "styled-components";
import { motion } from "motion/react";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { LIGHT_COLORS } from "../Pallette/Colors";
import { IThemeSwitchProps, TThemeSwitchSize } from "./types";

interface IThemeSwitch extends Partial<IThemeSwitchProps> {
  theme: ITheme;
  size: TThemeSwitchSize;
}

interface ITrackSize {
  width: number;
  height: number;
  radius: number;
}

const TRACK_SIZE: Record<TThemeSwitchSize, ITrackSize> = {
  l: { width: 44, height: 24, radius: 16 },
  xl: { width: 64, height: 64, radius: 20 }
};

export const KNOB_SIZE = 20;
export const KNOB_PADDING = 2;

export const ThemeSwitchTrack = styled(motion.button)<IThemeSwitch>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 0;
  font: inherit;
  box-sizing: border-box;
  outline: none;

  &:focus-visible {
    outline: 2px solid ${LIGHT_COLORS.orange3};
    outline-offset: 2px;
  }

  ${({ size }) => {
    const { width, height, radius } = TRACK_SIZE[size];
    return css`
      width: ${width}px;
      height: ${height}px;
      border-radius: ${radius}px;
    `;
  }}
`;

export const ThemeSwitchLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

export const ThemeSwitchDayLayer = styled(ThemeSwitchLayer)`
  background: linear-gradient(
    135deg,
    ${LIGHT_COLORS.orange6},
    ${LIGHT_COLORS.orange3}
  );
`;

export const ThemeSwitchNightLayer = styled(ThemeSwitchLayer)`
  background: linear-gradient(
    135deg,
    ${LIGHT_COLORS.neutral13},
    ${LIGHT_COLORS.blue11}
  );
`;

export const ThemeSwitchKnob = styled(motion.div)`
  position: absolute;
  top: ${KNOB_PADDING}px;
  left: ${KNOB_PADDING}px;
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeSwitchIconWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeSwitchRipple = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: ${LIGHT_COLORS.neutral1};
  pointer-events: none;
`;

ThemeSwitchTrack.defaultProps = {
  theme: LIGHT_THEME
};
