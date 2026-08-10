import styled from "styled-components";
import H from "../../../components/typography/H";
import P1 from "../../../components/typography/P1";
import { GridItem } from "../../components/GridLayout";

export const ComponentVariantsTitleStyled = styled(H)`
  padding: 52px 24px 0;
  margin-bottom: 44px;
`;

export const ComponentVariantsTitleBooleanStyled = styled(P1)`
  margin-bottom: 12px;
`;

export const ComponentVariantsBoolean = styled.div`
  .variants-field__boolean {
    margin-bottom: 16px;
  }
`;

export const ComponentVariantsWrapper = styled.div`
  @media (min-height: 600px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
  padding: 0 24px 24px;
`;

export const ComponentVariantsStyled = styled(GridItem).attrs({
  $colStart: 6,
  $colEnd: 10
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
