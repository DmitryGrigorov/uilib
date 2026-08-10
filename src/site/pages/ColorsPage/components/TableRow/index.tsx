import React from "react";
import { ColorBadge, ColorExample, ColorPageDescription } from "../../styles";
import P2 from "../../../../../components/typography/P2";
import H from "../../../../../components/typography/H";
import { IThemeSite } from "../../../../themes/types";

export const TableRow = ({
  id,
  theme,
  colorToken,
  description,
  transparency,
  colorName
}: {
  id: string;
  theme: IThemeSite;
  colorToken?: string;
  description?: string;
  transparency?: string;
  gridTemplateColumns?: string;
  colorName?: string;
}): JSX.Element => (
  <>
    <H type="libra" as="h6" color={theme.colorMain} className="left-align">
      {id}
    </H>
    <ColorExample $color={colorToken} className="left-align"></ColorExample>
    <ColorBadge>
      <P2 type="corvus" color={theme.foundation?.colorsPage.colorText}>
        {colorName ? colorName : colorToken?.replace("#", "")}
      </P2>
    </ColorBadge>
    {transparency && (
      <ColorBadge>
        <P2 type="corvus" color={theme.foundation?.colorsPage.colorText}>
          {transparency}
        </P2>
      </ColorBadge>
    )}
    <ColorPageDescription
      type="corvus"
      forwardedAs="p"
      className="left-align"
      color={theme.colorMain}>
      {description}
    </ColorPageDescription>
  </>
);
