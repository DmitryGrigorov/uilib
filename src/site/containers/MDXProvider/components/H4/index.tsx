import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { lowerCaseAndReplace } from "../../../../utils/lowerCaseAndReplace";
import { H4Styled } from "./styles";

const H4: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <H4Styled
      type="scorpius"
      color={theme.colorMain}
      id={lowerCaseAndReplace(children as string)}
      forwardedAs="h4">
      {children}
    </H4Styled>
  );
};

export default H4;
