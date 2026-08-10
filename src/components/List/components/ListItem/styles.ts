import styled from "styled-components";
import { Padding } from "../../../Pallette/style-utils";
import { LIGHT_THEME } from "../../../Pallette/themes";
import { IListBaseItemStyledProps, ListBaseItemStyled } from "../../styles";

export const ListItemStyled = styled(
  ListBaseItemStyled
)<IListBaseItemStyledProps>`
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  gap: 10px;

  .list-item__lead-content {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .list-item_trail-content {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

ListItemStyled.defaultProps = {
  theme: LIGHT_THEME
};

export const IconWrapper = styled.div`
  display: flex;
  ${Padding.allSide(1)}
`;
