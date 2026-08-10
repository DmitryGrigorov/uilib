import React from "react";
import { IThemeSite } from "../../themes/types";
import H from "../../../components/typography/H";
import { StyledHeader, StyledRealesedState, StyledTitle } from "./styles";

interface IPageHeaderProps {
  title: string;
  children: JSX.Element;
  releaseStatus?: string;
  theme?: IThemeSite;
}

export const SitePageHeader = ({
  children,
  title,
  releaseStatus,
  theme
}: IPageHeaderProps): JSX.Element => (
  <StyledHeader>
    <StyledTitle>
      <H type="cancer" as="h1" color={theme?.colorMain}>
        {title}
      </H>
      {releaseStatus && (
        <StyledRealesedState>{releaseStatus}</StyledRealesedState>
      )}
    </StyledTitle>
    {children}
  </StyledHeader>
);
