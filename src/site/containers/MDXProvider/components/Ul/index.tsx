import React, { PropsWithChildren } from "react";
import { UlStyled } from "./styles";

const Ul: React.FC<PropsWithChildren> = ({ children }) => (
  <UlStyled>{children}</UlStyled>
);

export default Ul;
