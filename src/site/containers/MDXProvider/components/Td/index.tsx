import React, { PropsWithChildren } from "react";
import { TdStyled, TagStyled } from "./styles";

const Td: React.FC<PropsWithChildren> = ({ children }) => (
  <TdStyled>
    <TagStyled>{children}</TagStyled>
  </TdStyled>
);

export default Td;
