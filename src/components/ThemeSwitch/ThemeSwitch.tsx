import React, { useState } from "react";
import { useReducedMotion } from "motion/react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { SPRING_PRESETS } from "../Pallette/motion";
import {
  ThemeSwitchDayLayer,
  ThemeSwitchIconWrapper,
  ThemeSwitchKnob,
  ThemeSwitchNightLayer,
  ThemeSwitchRipple,
  ThemeSwitchTrack
} from "./style";
import { IThemeSwitchProps } from "./types";
import ThemeSwitchIcon from "./icons/ThemeSwitchIcon";
import {
  KNOB_OFFSET,
  KNOB_TRANSITION,
  RIPPLE_TRANSITION
} from "./motionVariants";

const REDUCED_MOTION_TRANSITION = { duration: 0.12 };

const ThemeSwitch = ({
  themeSelected,
  themes = ["light", "dark"],
  onChange,
  size = "l",
  testId = "themeSwitch",
  className,
  ...props
}: TPropsWithAttributes<IThemeSwitchProps, "button">): JSX.Element => {
  const reducedMotion = Boolean(useReducedMotion());
  const [isRippling, setIsRippling] = useState(false);
  const isDark = themeSelected === themes[1];

  const layerTransition = reducedMotion
    ? REDUCED_MOTION_TRANSITION
    : SPRING_PRESETS.gentle;
  const knobTransition = reducedMotion
    ? REDUCED_MOTION_TRANSITION
    : KNOB_TRANSITION;

  const handleChange = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const newTheme = themeSelected === themes[0] ? themes[1] : themes[0];
    if (!reducedMotion) {
      setIsRippling(true);
    }
    onChange && onChange(evt, newTheme);
  };

  const icon = (
    <ThemeSwitchIcon
      isDark={isDark}
      reducedMotion={reducedMotion}
      size={size}
    />
  );

  return (
    <ThemeSwitchTrack
      type="button"
      size={size}
      className={className}
      onClick={handleChange}
      data-testid={testId}
      role="switch"
      aria-checked={isDark}
      aria-label="Switch theme"
      whileTap={{ scale: 0.9 }}
      transition={SPRING_PRESETS.elastic}
      {...(props as object)}>
      <ThemeSwitchDayLayer
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={layerTransition}
      />
      <ThemeSwitchNightLayer
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={layerTransition}
      />
      {size === "l" ? (
        <ThemeSwitchKnob
          animate={{ x: isDark ? KNOB_OFFSET.dark : KNOB_OFFSET.light }}
          transition={knobTransition}>
          {icon}
        </ThemeSwitchKnob>
      ) : (
        <ThemeSwitchIconWrapper>{icon}</ThemeSwitchIconWrapper>
      )}
      {isRippling && (
        <ThemeSwitchRipple
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={RIPPLE_TRANSITION}
          onAnimationComplete={() => setIsRippling(false)}
        />
      )}
    </ThemeSwitchTrack>
  );
};

export default ThemeSwitch;
