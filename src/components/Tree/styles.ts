import styled, { css } from "styled-components";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";

interface ITreeHeader {
  theme: ITheme;
  isOpened?: boolean;
  isDisabled?: boolean;
  isDragAllowed?: boolean;
  isAnyDragging?: boolean;
  isBorderless?: boolean;
  isHaveChildren?: boolean;
}

interface ITreeWrapper {
  theme?: ITheme;
  width?: number | string;
  isDragOver?: boolean;
  isDragging?: boolean;
  isAnyDragging?: boolean;
  position?: { x: number; y: number };
}

interface ITitle {
  readOnly: boolean;
  theme: ITheme;
}

export const TreeWrapper = styled.div<ITreeWrapper>`
  cursor: default;
  ${({ width }) =>
    typeof width !== "undefined" &&
    css`
      width: ${width};
    `}
  ${({ isDragOver, isDragging, isAnyDragging, theme }) => {
    if (isAnyDragging || isDragOver) {
      return css`
        cursor: grab;
        ${
          isAnyDragging &&
          css`
            * {
              user-select: none;
            }
          `
        }
        ${
          isDragOver &&
          css`
            background-color: ${theme.colors.backgroundSecondaryNeutral};
            border-radius: 8px;
          `
        }
      `;
    }
    if (isDragging) {
      return css`
        cursor: grab;
        .tree-header__title {
          background-color: transparent;
        }
        .tree_header {
          width: 50%;
          background-color: ${theme.colors.backgroundTetriary0};
          ${theme.shadows.tp.top}
          ${theme.shadows.tp.bottom}
          ${theme.shadows.tp.left}
          ${theme.shadows.tp.right}
        }
      `;
    }
    return "";
  }}
`;

export const TreeHeader = styled.div<ITreeHeader>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
  padding: 8px 0 8px 8px;

  ${({ isAnyDragging = false, isHaveChildren = false }) => {
    if (isAnyDragging) {
      return css`
        user-select: none;
        cursor: grab;
        .arrow-icon {
          cursor: pointer;
        }
      `;
    }
    if (isHaveChildren) {
      return css`
        cursor: pointer;
      `;
    }
    return css`
      cursor: default;
    `;
  }};

  gap: 8px;
  width: 100%;
  ${({ theme, isDisabled, isOpened }) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.colors.textBasicDisabled};
        .arrow-icon {
          color: ${theme.colors.textBasicDisabled};
        }
      `;
    } else if (isOpened) {
      return css`
        color: ${theme.colors.textColoredOrange};
        .arrow-icon {
          color: ${theme.colors.textColoredOrange};
        }
      `;
    }
    return css`
      color: ${theme.colors.textBasicDefault};
      &:hover {
        color: ${theme.colors.textBasicHover};
      }
    `;
  }}
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral1};
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .tree-header__right-content {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: 8px;
    color: ${({ theme }) => theme.colors.textColoredOrange};
    svg {
      color: ${({ theme }) => theme.colors.componentPrimaryOrangePressed};
    }
  }

  .title-span {
    padding: 4px;
  }

  [data-element="radioButton"] {
    align-items: normal;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TreeList = styled.div<Pick<ITreeHeader, "theme" | "isBorderless">>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${({ theme, isBorderless }) =>
    !isBorderless &&
    css`
      border-left: 1px solid ${theme.dividersColors.secondary};
      margin-left: 15px !important;
      padding-left: 15px;
    `};
`;

export const TreeItem = styled.div`
  padding: 8px 0;
  margin-left: 2px;
  ${TreeHeader} {
    padding: 0 8px 0 0;
  }
`;

export const IconWrapper = styled.div<{ isShown?: boolean }>`
  display: flex;

  .arrow-icon {
    transition: all 0.3s;
    transform: rotate(${({ isShown }) => (isShown ? "90deg" : "0deg")});
  }
`;

export const Title = styled.input<ITitle>`
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  border: none;
  :disabled {
    cursor: not-allowed;
  }
  ${({ readOnly }) =>
    readOnly &&
    css`
      cursor: pointer;
    `};
  :focus {
    outline: none;
    ${({ readOnly }) =>
      !readOnly &&
      css`
        border-radius: 8px;
        background-color: ${({ theme }) =>
          theme.colors.backgroundSecondaryNeutral};
      `}
  }
  z-index: 5;
`;

export const TreeRootDropArea = styled.div<{ isDragOverRoot: boolean }>`
  width: 100%;
  transition: all 0.3s;
  user-select: none;
  ${({ isDragOverRoot, theme }) => {
    if (isDragOverRoot) {
      return css`
        opacity: 1;
        height: 40px;
        border: none;
        border-radius: 16px;
        background-color: ${theme.colors.neutral1};
      `;
    } else {
      return css`
        height: 10px;
        border: 1px solid ${theme.colors.neutral1};
        opacity: 0.5;
        border-radius: 4px;
        background-color: ${theme.colors.neutral1};
      `;
    }
  }}
`;

Title.defaultProps = {
  theme: LIGHT_THEME
};

TreeList.defaultProps = {
  theme: LIGHT_THEME
};

TreeHeader.defaultProps = {
  theme: LIGHT_THEME
};

TreeWrapper.defaultProps = {
  theme: LIGHT_THEME
};

TreeRootDropArea.defaultProps = {
  theme: LIGHT_THEME
};
