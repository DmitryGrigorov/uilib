import React from "react";
import { useTheme } from "styled-components";
import Tabs from "../../../components/Tabs";
import { SitePageHeader } from "../../components/SitePageHeader";
import { IThemeSite } from "../../themes/types";
import { GridItem } from "../../components/GridLayout";
import H from "../../../components/typography/H";
import {
  ColorPageContent,
  ColorPageDescription,
  ColorPageSubTitle,
  ColorPageCard,
  ColorsPageDescriptionWrapper,
  ColorsPageTabPanelStyled,
  ColorsPageStyled,
  StyledTable
} from "./styles";
import { TableRow } from "./components/TableRow";
import { colorTokens } from "./constants";

const ColorPage: React.FC = () => {
  const theme = useTheme() as IThemeSite;
  return (
    <ColorsPageStyled tab="design">
      <SitePageHeader
        theme={theme}
        title="Color tokens"
        releaseStatus="Released">
        <ColorsPageDescriptionWrapper>
          <ColorPageSubTitle
            type="capricornus"
            forwardedAs="h6"
            color={theme.colorMain}>
            The design system provides dedicated token sets for light and dark
            themes.
          </ColorPageSubTitle>
          <ColorPageDescription
            type="corvus"
            forwardedAs="p"
            color={theme.colorMain}>
            Each set includes neutral, brand, semantic, and supporting color
            palettes.
          </ColorPageDescription>
          <ColorPageDescription
            type="corvus"
            forwardedAs="p"
            color={theme.colorMain}>
            Every palette uses a clear, descriptive name that is easy to
            recognize.
          </ColorPageDescription>
        </ColorsPageDescriptionWrapper>
      </SitePageHeader>
      <GridItem $colStart={1} $colEnd={9}>
        <Tabs.TabProvider value="design">
          <Tabs value="design">
            <Tabs.Tab label="Design" value="design" />
            <Tabs.Tab label="Code" value="tab2" isDisabled />
            <Tabs.Tab label="Documentation" value="tab3" isDisabled />
          </Tabs>
          <ColorsPageTabPanelStyled value="design">
            {colorTokens(theme).map((element) => (
              <>
                <ColorPageContent
                  $padding="24px"
                  className="color-page__header__holder">
                  <H type="virgo" as="h3" size={24} color={theme.colorMain}>
                    {element?.title}
                  </H>
                  <ColorPageSubTitle
                    type="capricornus"
                    forwardedAs="h6"
                    color={theme.colorMain}>
                    {element?.subtitle}
                  </ColorPageSubTitle>
                </ColorPageContent>
                <ColorPageCard>
                  <StyledTable isOverlay={element?.colors[0]?.transparency}>
                    <H
                      type="libra"
                      as="h6"
                      className="left-align top-align"
                      color={theme.colorMain}>
                      №
                    </H>
                    <H
                      type="libra"
                      as="h6"
                      className="left-align top-align"
                      color={theme.colorMain}>
                      Sample
                    </H>
                    <H
                      type="libra"
                      as="h6"
                      className="top-align"
                      color={theme.colorMain}>
                      Color
                    </H>
                    {element?.colors[0].transparency && (
                      <H
                        type="libra"
                        as="h6"
                        className="top-align"
                        color={theme.colorMain}>
                        Opacity
                      </H>
                    )}
                    <H
                      type="libra"
                      as="h6"
                      className="left-align top-align"
                      color={theme.colorMain}>
                      Usage
                    </H>
                    {element?.colors.map((colorItem, index) => (
                      <TableRow
                        id={String(index + 1)}
                        theme={theme}
                        key={colorItem?.color}
                        colorToken={colorItem?.color}
                        colorName={colorItem?.colorName}
                        description={colorItem?.description}
                        transparency={colorItem?.transparency}
                      />
                    ))}
                  </StyledTable>
                </ColorPageCard>
              </>
            ))}
          </ColorsPageTabPanelStyled>
        </Tabs.TabProvider>
      </GridItem>
    </ColorsPageStyled>
  );
};

export default ColorPage;
