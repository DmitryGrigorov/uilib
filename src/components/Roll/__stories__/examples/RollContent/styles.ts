import styled from "styled-components";

export const RollContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  color: ${({ theme }) => theme.colors.neutral12};
`;
