import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { motion } from "motion/react";
import { Padding } from "../../../Pallette/style-utils";
import { IListBaseItemStyledProps, ListBaseItemStyled } from "../../styles";
import { ITheme, LIGHT_THEME } from "../../../Pallette/themes";

interface IListHeaderProps extends PropsWithChildren<IListBaseItemStyledProps> {
  theme: ITheme;
}

export const ListHeaderStyled = styled(ListBaseItemStyled)<IListHeaderProps>`
  gap: 12px;

  ${({ theme, isSelected, isDisabled }) => {
    if (isSelected) {
      return css`
        .list-header__collapse-icon {
          color: ${theme.colors.componentPrimaryOrangePressed};
        }
      `;
    } else if (isDisabled) {
      return css`
        .list-header__collapse-icon {
          color: ${theme.colors.textBasicDisabled};
        }
      `;
    }
    return css`
      .list-header__collapse-icon {
        color: ${theme.colors.textBasicDefault};
      }
      :hover {
        .list-header__collapse-icon-wpapper {
          background: ${theme.colors.overlay2};
          .list-header__collapse-icon {
            color: ${theme.colors.textBasicHover};
          }
        }
      }
    `;
  }};

  .list-header__lead-content {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .list-header__trail-content {
    margin-right: 0;
    margin-left: auto;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .list-header__collapse-icon-wpapper {
    border-radius: 8px;
    margin-right: 0;
    margin-left: auto;
    /* TODO: a 24x24 wrapper around a 12x12 icon needs 6px padding, but SUPER_PIXEL is 4px. */
    ${Padding.allSide(1.5)}
  }
`;

ListHeaderStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const IconWrapper = styled.div`
  display: flex;
  ${Padding.allSide(1)}
`;

export const CollapseIconMotion = styled(motion.span)`
  display: flex;
`;
