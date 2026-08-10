import styled, { css } from "styled-components";
import { Button } from "@dmitrygrigorov/components";

export const ContextMenuButton = styled(Button)<{ isOpen?: boolean }>`
  transition: all 0.3s;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
