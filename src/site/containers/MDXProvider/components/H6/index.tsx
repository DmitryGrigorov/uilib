import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { lowerCaseAndReplace } from "../../../../utils/lowerCaseAndReplace";
import { IThemeSite } from "../../../../themes/types";
import { H6Styled } from "./style";

const H6: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <H6Styled
      type="saggitarius"
      id={lowerCaseAndReplace(children as string)}
      color={theme.colorMain}
      forwardedAs="h6">
      {children}
    </H6Styled>
  );
};

export default H6;
