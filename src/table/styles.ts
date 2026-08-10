import styled, { css } from "styled-components";
import { LIGHT_THEME, ModalWindow, Padding } from "@dmitrygrigorov/components";
import { TLocalColumn, TTableSize } from "./types";

export interface PinningStyles {
  isPinned?: boolean;
  pinnedCounter?: number;
  pinnedColsLengthLeft?: number;
  widthColumnsLeft: number[];
  widthColumnsRight: number[];
  isShadowLeft?: boolean;
  isShadowRight?: boolean;
  pinnedRowsCount?: number;
  marginsTopPinRows: number[];
}

interface ITableColumnBaseStyledProps {
  size: TTableSize;
  isCheckboxSelection?: boolean;
}

interface ITableColumnTitleStyledProps {
  columnTypes?: TLocalColumn["columnTypes"];
}

export const TableStyled = styled.table<PinningStyles>`
  width: 100%;
  overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0;
  box-sizing: border-box;

  ${({ marginsTopPinRows }) =>
    marginsTopPinRows.map(
      (top, index) => css`
        tbody {
          tr:nth-child(${index + 1}) {
            position: sticky;
            top: ${top}px;
            z-index: 1;
          }
        }
      `
    )}

  ${({ widthColumnsLeft, isShadowLeft, theme }) => {
    let intendLeftCalculation = 0;
    const lastColumnOfPinned = widthColumnsLeft.length;
    return widthColumnsLeft.map((width, i) => {
      const styledPinnings = css`
        tr th:nth-child(${i + 1}),
        tr td:nth-child(${i + 1}) {
          z-index: 2;
          left: ${intendLeftCalculation}px;
        }
        tr td:nth-child(${i + 1}) {
          position: sticky;
          z-index: 0;
          background: ${theme.colors.backgroundPrimaryMain};
        }
        tr th:nth-child(${lastColumnOfPinned}),
        tr td:nth-child(${lastColumnOfPinned}) {
          ${
            isShadowLeft &&
            css`
              ${theme.shadows.sp.right}
              clip-path: inset(0px -16px 0px 0px);
            `
          };
        }
        tr:hover {
          td:nth-child(${i + 1}) {
            background: ${theme.colors.backgroundSecondaryNeutral};
          }
        }
      `;
      intendLeftCalculation = intendLeftCalculation + width;
      return styledPinnings;
    });
  }}
  ${({ widthColumnsRight, isShadowRight, theme }) => {
    let intendRightCalculation = 0;
    const lastColumnOfPinned = widthColumnsRight.length;
    return widthColumnsRight.map((width, i) => {
      const styledPinnings = css`
        tr th:nth-last-child(${i + 1}),
        tr td:nth-last-child(${i + 1}) {
          right: ${intendRightCalculation}px;
        }
        tr td:nth-last-child(${i + 1}) {
          position: sticky;
          z-index: 0;
          background: ${theme.colors.backgroundPrimaryMain};
        }
        tr th:nth-last-child(${lastColumnOfPinned}),
        tr td:nth-last-child(${lastColumnOfPinned}) {
          ${
            isShadowRight &&
            css`
              ${theme.shadows.sp.left}
              clip-path: inset(0px 0px 0px -16px);
            `
          };
        }
        tr:hover {
          td:nth-last-child(${i + 1}) {
            background: ${theme.colors.backgroundSecondaryNeutral};
          }
        }
      `;
      intendRightCalculation = intendRightCalculation + width;
      return styledPinnings;
    });
  }}
`;

TableStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

TableWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const ModalWrapperStyled = styled(ModalWindow)`
  padding: 40px;

  & > div {
    width: 100%;
    max-width: 100% !important;
    height: 100%;
  }
`;

export const TableContentStyles = styled.div<{ isFullScreen: boolean }>`
  ${({ isFullScreen }) =>
    !isFullScreen &&
    css`
      height: 100%;
      ${TableWrapper} {
        height: max-content;
        max-height: 100%;
      }
    `};
`;

export const TableColumnBaseStyled = styled.th<ITableColumnBaseStyledProps>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: ${({ isCheckboxSelection }) => isCheckboxSelection && "48px"};

  ${({ size }) => {
    if (size === "m") {
      return Padding.allSide(4, 5);
    } else if (size === "s") {
      return Padding.allSide(3, 5);
    }
    return Padding.allSide(5);
  }}
`;

TableColumnBaseStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const TableColumnTitleStyled = styled.div<ITableColumnTitleStyledProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: ${({ columnTypes }) =>
    columnTypes === "number" && "flex-end"};
`;
