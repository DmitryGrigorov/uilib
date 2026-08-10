import styled from "styled-components";
import { LIGHT_THEME, P2 } from "@dmitrygrigorov/components";

export const EditableContainer = styled(P2)<{ isEditable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 4px;
  :focus-within {
    border-radius: 8px;
  }

  span {
    align-items: center;
  }
`;

EditableContainer.defaultProps = {
  theme: LIGHT_THEME
};

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
