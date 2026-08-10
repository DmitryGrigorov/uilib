import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { lowerCaseAndReplace } from "../../../../utils/lowerCaseAndReplace";
import { H3Styled } from "./styles";

const H3: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <H3Styled
      type="virgo"
      color={theme.colorMain}
      forwardedAs="h3"
      id={lowerCaseAndReplace(children as string)}>
      {children}
    </H3Styled>
  );
};

export default H3;
