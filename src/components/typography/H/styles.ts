import styled, { css, RuleSet } from "styled-components";
import { LIGHT_THEME } from "../../Pallette/themes";
import {
  ariesOnest,
  taurusOnest,
  geminiOnest,
  cancerOnest,
  leoOnest,
  virgoOnest,
  libraOnest,
  scorpiusOnest,
  capricornusOnest,
  saggitariusOnest,
  ariesNeueMachina,
  cancerNeueMachina,
  capricornusNeueMachina,
  geminiNeueMachina,
  leoNeueMachina,
  libraNeueMachina,
  saggitariusNeueMachina,
  scorpiusNeueMachina,
  taurusNeueMachina,
  virgoNeueMachina
} from "../../Pallette/fonts";
import { IHProps, THFontSize, THFontType } from "./types";

const fontSizesOnest: Record<THFontSize, RuleSet<object>> = {
  64: ariesOnest,
  56: taurusOnest,
  40: geminiOnest,
  32: cancerOnest,
  28: leoOnest,
  24: virgoOnest,
  20: libraOnest,
  16: capricornusOnest
};

const fontTypesOnest: Record<THFontType, RuleSet<object>> = {
  aries: ariesOnest,
  taurus: taurusOnest,
  gemini: geminiOnest,
  cancer: cancerOnest,
  leo: leoOnest,
  virgo: virgoOnest,
  libra: libraOnest,
  scorpius: scorpiusOnest,
  capricornus: capricornusOnest,
  saggitarius: saggitariusOnest
};

const fontTypesNeueMachina: Record<THFontType, RuleSet<object>> = {
  aries: ariesNeueMachina,
  taurus: taurusNeueMachina,
  gemini: geminiNeueMachina,
  cancer: cancerNeueMachina,
  leo: leoNeueMachina,
  virgo: virgoNeueMachina,
  libra: libraNeueMachina,
  scorpius: scorpiusNeueMachina,
  capricornus: capricornusNeueMachina,
  saggitarius: saggitariusNeueMachina
};

const fontSizesNeueMachina: Record<THFontSize, RuleSet<object>> = {
  64: ariesNeueMachina,
  56: taurusNeueMachina,
  40: geminiNeueMachina,
  32: cancerNeueMachina,
  28: leoNeueMachina,
  24: virgoNeueMachina,
  20: libraNeueMachina,
  16: capricornusNeueMachina
};

const getFont = ({
  fontFamily,
  fontType,
  fontSize
}: {
  fontFamily: string;
  fontType: THFontType;
  fontSize?: THFontSize;
}): RuleSet<object> => {
  if (fontFamily === "Neue Machina") {
    return fontSize
      ? fontSizesNeueMachina[fontSize]
      : fontTypesNeueMachina[fontType];
  }
  return fontSize ? fontSizesOnest[fontSize] : fontTypesOnest[fontType];
};

export const HStyled = styled.span<
  Pick<IHProps, "size" | "color"> &
    Required<Pick<IHProps, "fontFamily" | "type">>
>`
  margin: 0;
  ${(props) =>
    getFont({
      fontFamily: props.fontFamily,
      fontType: props.type,
      fontSize: props.size
    })};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

HStyled.defaultProps = {
  theme: LIGHT_THEME
};
