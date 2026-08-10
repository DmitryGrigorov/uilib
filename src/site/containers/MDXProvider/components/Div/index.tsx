import React, { PropsWithChildren } from "react";

import { DivStyled } from "./style";

const Div: React.FC<PropsWithChildren> = ({ children, ...props }) => (
  <DivStyled {...props}>{children}</DivStyled>
);

export default Div;
