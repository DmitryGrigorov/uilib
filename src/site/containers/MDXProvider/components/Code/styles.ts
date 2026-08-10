import styled from "styled-components";

export const CodeStyled = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 16px;

  button {
    margin: auto 0 0 auto;
  }
`;
