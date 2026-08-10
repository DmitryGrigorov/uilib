import styled from "styled-components";

export const Row = styled.div<{ justify?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "space-around")};
  gap: 10px;
  margin-bottom: 16px;
`;

export const ComponentWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : "auto")};
`;

export const ExamplesWrapper = styled.div<{ currentTheme: string }>`
  margin: 20px 0;
  padding: 10px;
  background: ${({ currentTheme }) =>
    currentTheme === "light" ? "#FEFEFE" : "#151820"};
`;
