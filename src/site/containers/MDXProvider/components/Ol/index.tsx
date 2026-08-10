import React, { PropsWithChildren } from "react";
import { OlStyled } from "./style";

const Ol: React.FC<PropsWithChildren> = ({ children }) => (
  <OlStyled>{children}</OlStyled>
);

export default Ol;
