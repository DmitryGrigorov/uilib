import styled from "styled-components";
import { IconClose, IconTick } from "@dmitrygrigorov/icons";
import { LIGHT_THEME } from "@dmitrygrigorov/components";

export const BooleanCell = styled.div`
  display: flex;
  justify-content: center;
`;

export const YesIconStyled = styled(IconTick)`
  svg {
    color: ${({ theme }) => theme.colors.componentPrimaryTealDefault};
  }
`;

YesIconStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const NoIconStyled = styled(IconClose)`
  svg {
    color: ${({ theme }) => theme.colors.componentPrimaryRedDefault};
  }
`;

NoIconStyled.defaultProps = {
  theme: LIGHT_THEME
};
