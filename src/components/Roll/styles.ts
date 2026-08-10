import styled, { css } from "styled-components";
import { motion } from "motion/react";
import { BorderRadius, Padding } from "../Pallette/style-utils";
import { Shape } from "../Pallette/Shape";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { IRollProps } from "./types";

interface IRoll extends IRollProps {
  theme: ITheme;
}

export const RollStyled = styled.div<Pick<IRoll, "isOpenRoll" | "theme">>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  overflow: hidden;
  ${BorderRadius.roundBorder(Shape.borderRadiusMedium)};

  ${({ theme, isOpenRoll }) =>
    isOpenRoll &&
    css`
      background: ${theme.colors.neutral1};
    `};

  .roll__header {
    ${({ theme, isOpenRoll }) => isOpenRoll && theme.shadows.sp.bottom};
  }
`;

RollStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const RollAnimWrapper = styled(motion.div)`
  min-height: 1px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RollContentWrapper = styled.div<
  Pick<IRoll, "size" | "isOpenRoll" | "theme">
>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  ${({ size, isOpenRoll }) => {
    if (isOpenRoll) {
      return size === "l" ? Padding.allSide(3, 4) : Padding.allSide(2, 5);
    }
    return size === "l" ? Padding.allSide(3, 0) : Padding.allSide(2, 0);
  }}
  height: 100%;
  overflow: auto;

  background: ${({ theme, isOpenRoll }) => isOpenRoll && theme.colors.neutral1};
  ${BorderRadius.roundBorderBottom(Shape.borderRadiusMedium)};
`;

RollContentWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const FooterStyled = styled.div<Pick<IRoll, "theme">>`
  background: ${({ theme }) => theme.colors.neutral1};
  ${Padding.allSide(2, 4)};
  ${({ theme }) => theme.shadows.sp.top};
  ${BorderRadius.roundBorder(Shape.borderRadiusMedium)};
`;

FooterStyled.defaultProps = {
  theme: LIGHT_THEME
};
