import styled, { css, RuleSet } from "styled-components";
import {
  piscesOnest,
  aquariusOnest,
  corvusOnest,
  lynxOnest,
  cetusOnest,
  pavoOnest,
  muscaOnest,
  columbaOnest
} from "../../Pallette/fonts";
import { LIGHT_THEME } from "../../Pallette/themes";
import { IP2Props, TP2FontSize, TP2FontType } from "./types";

const fontSizes: Record<TP2FontSize, RuleSet<object>> = {
  20: piscesOnest,
  16: corvusOnest,
  14: lynxOnest,
  12: cetusOnest,
  10: muscaOnest
};

const fontTypes: Record<TP2FontType, RuleSet<object>> = {
  pisces: piscesOnest,
  aquarius: aquariusOnest,
  corvus: corvusOnest,
  lynx: lynxOnest,
  cetus: cetusOnest,
  pavo: pavoOnest,
  musca: muscaOnest,
  columba: columbaOnest
};

export const P2Styled = styled.span<Partial<IP2Props>>`
  margin: 0;
  ${(props) => props.type && fontTypes[props.type]}
  ${(props) => props.size && fontSizes[props.size]}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

P2Styled.defaultProps = {
  theme: LIGHT_THEME
};
