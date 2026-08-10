import styled, { css } from "styled-components";

export const IndicatorsContainerStyle = styled.div<{ isMargin: boolean }>`
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  align-items: baseline;

  ${({ isMargin }) =>
    isMargin &&
    css`
      margin-top: -8px;
    `}
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    padding: 4px 0 0 0;
  }
`;
