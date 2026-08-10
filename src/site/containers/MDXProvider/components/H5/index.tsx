import React, { PropsWithChildren } from "react";
import { useTheme } from "styled-components";
import { IThemeSite } from "../../../../themes/types";
import { lowerCaseAndReplace } from "../../../../utils/lowerCaseAndReplace";
import { H5Styled } from "./style";

const H5: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <H5Styled
      type="capricornus"
      id={lowerCaseAndReplace(children as string)}
      color={theme.colorMain}
      forwardedAs="h5">
      {children}
    </H5Styled>
  );
};

export default H5;
