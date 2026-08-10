import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { H1Styled } from "./styles";

const H1: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;

  return (
    <H1Styled type="cancer" color={theme.colorMain} forwardedAs="h1">
      {children}
    </H1Styled>
  );
};

export default H1;
