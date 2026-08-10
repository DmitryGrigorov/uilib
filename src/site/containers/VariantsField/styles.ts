import styled from "styled-components";
import { Shape } from "../../../components/Pallette/Shape";
import P1 from "../../../components/typography/P1";

export const VariantsFieldTitleStyled = styled(P1)`
  margin-bottom: 12px;
`;

export const VariantsFieldStyled = styled.div`
  margin-bottom: 40px;
`;

export const VariantsColorsStyled = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: 16px;
  }
`;

export const VariantColorStyled = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: ${Shape.borderRadiusDefault};
  background: ${({ color }) => color};
  cursor: pointer;
`;
