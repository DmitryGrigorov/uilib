import styled, { css, RuleSet } from "styled-components";
import { aquillaOnest, phoenixOnest, cygnusOnest } from "../../Pallette/fonts";
import { LIGHT_THEME } from "../../Pallette/themes";
import { IP1Props, TP1FontSize, TP1FontType } from "./types";

const fontSizes: Record<TP1FontSize, RuleSet<object>> = {
  20: aquillaOnest,
  16: phoenixOnest,
  14: cygnusOnest
};

const fontTypes: Record<TP1FontType, RuleSet<object>> = {
  aquilla: aquillaOnest,
  phoenix: phoenixOnest,
  cygnus: cygnusOnest
};

export const P1Styled = styled.span<Partial<IP1Props>>`
  margin: 0;
  ${(props) => props.type && fontTypes[props.type]}
  ${(props) => props.size && fontSizes[props.size]}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

P1Styled.defaultProps = {
  theme: LIGHT_THEME
};
