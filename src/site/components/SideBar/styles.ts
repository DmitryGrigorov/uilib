import styled from "styled-components";
import { LightThemeSite } from "../../themes/light";
import { GridItem } from "../GridLayout";

export const SideBarStyled = styled(GridItem)`
  height: calc(100vh - 80px);
  padding: 32px 24px 33px 40px;
  border-radius: 0 32px 0 0;
  background: ${({ theme }) => theme.sideBar?.background};
  display: flex;
  flex-direction: column;
  .sidebar-child {
    margin-bottom: 48px;
  }

  .sidebar-tree {
    margin-bottom: 24px;
    & > div {
      gap: 24px;
    }
  }

  .tree_header {
    cursor: pointer;
  }
`;

SideBarStyled.defaultProps = {
  theme: LightThemeSite
};

export const SideBarTreeWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
`;
