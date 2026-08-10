import styled from "styled-components";
import Button from "../../../components/Button";

export const IconContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export const ListItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .searchbox {
    align-items: center;
  }
`;
