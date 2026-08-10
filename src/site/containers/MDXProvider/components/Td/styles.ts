import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import Tag from "../../../../../components/Tag";

export const TagStyled = styled(Tag)<Pick<PropsWithChildren, "children">>`
  ${({ children }) =>
    children === "-"
      ? css`
          background: none;
          padding-left: 0px;

          :hover {
            background: none;
          }
        `
      : null};
`;

export const TdStyled = styled.td`
  margin-bottom: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-top: 16px;
  color: ${({ theme }) => theme.colorSecondary};
`;
