import React, { PropsWithChildren } from "react";
import { ThStyled } from "./styles";

const Th: React.FC<PropsWithChildren> = ({ children }) => (
  <ThStyled>{children}</ThStyled>
);

export default Th;
