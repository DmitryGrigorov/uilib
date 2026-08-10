import React, { PropsWithChildren } from "react";
import { TrStyled } from "./styles";

const Tr: React.FC<PropsWithChildren> = ({ children }) => (
  <TrStyled>{children}</TrStyled>
);

export default Tr;
