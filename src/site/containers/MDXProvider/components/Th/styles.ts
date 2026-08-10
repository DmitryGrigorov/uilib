import styled from "styled-components";

export const ThStyled = styled.th`
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colorSecondary};
  background: ${({ theme }) => theme.backgroundSecondary};
`;
