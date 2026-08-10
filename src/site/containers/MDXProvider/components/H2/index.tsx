import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { lowerCaseAndReplace } from "../../../../utils/lowerCaseAndReplace";
import { H2Styled } from "./styles";

const H2: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;

  return (
    <H2Styled
      type="leo"
      color={theme.colorMain}
      forwardedAs="h2"
      id={lowerCaseAndReplace(children as string)}>
      {children}
    </H2Styled>
  );
};

export default H2;
