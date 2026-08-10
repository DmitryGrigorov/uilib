import styled, { css } from "styled-components";
import P2 from "../typography/P2";
import { ITheme, LIGHT_THEME } from "../Pallette/themes";
import { Margin } from "../Pallette/style-utils";
import { IBreadcrumbItem } from "./types";

interface IBreadcrumbsItem extends Partial<IBreadcrumbItem> {
  theme: ITheme;
}

type TBreadcrumbsItemProps = Pick<
  IBreadcrumbsItem,
  "viewType" | "theme" | "isDisabled"
> & {
  href?: string;
  className?: string | undefined;
};

export const ItemWrapper = styled.div<TBreadcrumbsItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  cursor: pointer;
  margin: 0 4px;
  gap: 4px;

  ${({ viewType, theme, isDisabled }) => {
    if (isDisabled) {
      return css`
        color: ${theme.colors.textBasicDisabled};
        cursor: not-allowed;
      `;
    } else if (viewType === "current") {
      return css`
        color: ${theme.colors.textColoredOrange};
        cursor: default;
        ${BreadcrumbsDropdownIndicatorStyled} {
          transform: rotate(180deg);
          svg {
            color: ${theme.colors.textColoredOrange};
          }
        }
        &:hover {
          ${BreadcrumbsDropdownIndicatorStyled} {
            background-color: ${theme.colors.orange3};
          }
        }
        &.open-dropdown-pointer {
          cursor: pointer;
        }
      `;
    } else {
      return css`
        color: ${theme.colors.textBasicDefault};
        &:hover {
          color: ${theme.colors.textBasicHover};
          ${BreadcrumbsDropdownIndicatorStyled} {
            background-color: ${theme.colors.overlay2};
            .select-dropdown-icon {
              svg {
                color: ${theme.colors.textBasicHover};
              }
            }
          }
        }
      `;
    }
  }};
`;

ItemWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const BreadcrumbsWrapper = styled.div<{
  isLastChildEllipsis: boolean;
  widthLastNodeElement: "unset" | number;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 32px;

  & > div:last-child {
    min-width: 0;
    width: ${({ widthLastNodeElement }) =>
      typeof widthLastNodeElement === "string"
        ? widthLastNodeElement
        : `${widthLastNodeElement}px`};

    ${ItemWrapper} {
      width: ${({ widthLastNodeElement }) =>
        typeof widthLastNodeElement === "string"
          ? widthLastNodeElement
          : `${widthLastNodeElement}px`};
    }
  }

  .breadcrumbs__tooltip {
    width: inherit;
  }

  ${({ isLastChildEllipsis }) =>
    isLastChildEllipsis
      ? css`
          & > div:last-child span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        `
      : null}
`;

export const BreadcrumbsDropdownIndicatorStyled = styled.div<TBreadcrumbsItemProps>`
  padding: 2px;
  display: flex;

  &.select-dropdown-icon {
    color: ${({ theme }) => theme.colors.textBasicDefault};
  }

  border-radius: ${({ theme }) => theme.shape.borderRadiusSmall};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      &.select-dropdown-icon {
        svg {
          color: ${({ theme }) => theme.colors.textBasicDisabled};
        }
      }
    `}
`;

BreadcrumbsDropdownIndicatorStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const ContentWrapper = styled.div<TBreadcrumbsItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  ${({ viewType, theme, isDisabled }) => {
    if (isDisabled) {
      return css`
        ${Divider} {
          color: ${theme.colors.textBasicDisabled};
        }
      `;
    } else if (viewType === "current") {
      return css`
        ${Divider} {
          color: ${theme.colors.textColoredOrange};
        }
      `;
    } else {
      return css`
        &:hover {
          ${Divider} {
            color: ${theme.colors.textBasicHover};
          }
        }
      `;
    }
  }};
`;

ContentWrapper.defaultProps = {
  theme: LIGHT_THEME
};

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;

  & > span {
    color: unset;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Text = styled(P2)`
  ${Margin.allSide(0, 1)}
  white-space: nowrap;
`;

export const Divider = styled(P2)<Pick<IBreadcrumbsItem, "theme">>`
  ${Margin.allSide(0, 1)}
  color: ${({ theme }) => theme.colors.textBasicDefault};
  width: 16px;
  min-width: 16px;
  text-align: center;
`;

Divider.defaultProps = {
  theme: LIGHT_THEME
};
