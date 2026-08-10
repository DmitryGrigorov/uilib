import styled, { css } from "styled-components";

export const FooterWrapper = styled.div<{ isLong?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ isLong }) =>
    isLong &&
    css`
      flex-direction: column;
      gap: 20px;
    `}

  color: ${({ theme }) => theme.colors.neutral12};

  .buttons {
    margin-left: 12px;
    display: flex;
    gap: 16px;

    ${({ isLong }) =>
      isLong &&
      css`
        width: 100%;
        button {
          width: 100%;
        }
      `}
  }

  .header {
    display: flex;
  }

  .icon {
    margin-right: 16px;
  }
`;
