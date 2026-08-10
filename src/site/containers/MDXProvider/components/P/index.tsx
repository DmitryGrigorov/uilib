import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { PStyled } from "./styles";

const P: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <PStyled type="corvus" color={theme.colorSecondary} forwardedAs="p">
      {children}
    </PStyled>
  );
};

export default P;
