import styled from "styled-components";
import { LIGHT_THEME, Padding } from "@dmitrygrigorov/components";
export const StyledNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const InputStyled = styled.input`
  display: inline-flex;
  position: relative;
  border: none;
  background-color: inherit;
  padding: 4px;
  box-sizing: content-box;

  :focus {
    background: ${({ theme }) => theme.colors.neutral1};
    outline: none;
    border-radius: 8px;
  }
`;

InputStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const StyledPostfix = styled.div`
  ${Padding.allSide(1)}
`;

export const StyledValue = styled.div<{ isEditable?: boolean }>`
  ${Padding.allSide(1)}
  justify-content: left;
`;
