import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { SitePageHeader } from "../../components/SitePageHeader";
import Tabs from "../../../components/Tabs";
import { IThemeSite } from "../../themes/types";
import { ICreateComponentStand } from "../../types";
import P2 from "../../../components/typography/P2";
import { GridItem } from "../../components/GridLayout";
/*eslint import/namespace: ['error', { allowComputed: true }]*/
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as variants from "../../build/variants";
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as docs from "../../build/docs";
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as codes from "../../build/codes";
import {
  ComponentPageSubTitle,
  ComponentDescriptionWrapper,
  ComponentPageStyled,
  ComponentPageTabPanelStyled,
  ComponentDescriptionArrayWrapper
} from "./styles";
import ComponentData from "./components/ComponentData";

const ComponentPage: React.FC<ICreateComponentStand> = ({
  componentStand,
  componentStandTabs
}) => {
  const theme = useTheme() as IThemeSite;
  const isDisabledTab = (id: string): boolean => {
    if (
      id === "code" &&
      !(codes as Record<string, unknown>)[componentStand.id]
    ) {
      return true;
    }
    if (
      !(variants as Record<string, unknown>)[componentStand.id] &&
      id === "design"
    ) {
      return true;
    }
    if (
      !(docs as Record<string, unknown>)[componentStand.id] &&
      id === "docs"
    ) {
      return true;
    }
    return false;
  };
  const valueTab = useMemo((): string | number => {
    let value = "";
    for (const tab of componentStandTabs) {
      if (!isDisabledTab(tab.id)) {
        value = tab.id;
        break;
      }
    }
    return value;
  }, [componentStandTabs]);
  const [currentTab, setCurrentTab] = useState(valueTab);

  return (
    <ComponentPageStyled tab={currentTab}>
      <SitePageHeader
        theme={theme}
        title={componentStand.title}
        releaseStatus={componentStand.status ? "Released" : undefined}>
        {Array.isArray(componentStand.subTitle) ? (
          <ComponentDescriptionArrayWrapper>
            {componentStand.subTitle.map((subTitle, index) => (
              <ComponentDescriptionWrapper key={subTitle}>
                <ComponentPageSubTitle
                  type="capricornus"
                  color={theme.colorMain}
                  forwardedAs="p">
                  {subTitle}
                </ComponentPageSubTitle>
                <P2 type="corvus" as="p" color={theme.colorSecondary}>
                  {Array.isArray(componentStand.description) &&
                    componentStand.description[index]}
                </P2>
              </ComponentDescriptionWrapper>
            ))}
          </ComponentDescriptionArrayWrapper>
        ) : (
          <ComponentDescriptionWrapper>
            <ComponentPageSubTitle
              type="capricornus"
              color={theme.colorMain}
              forwardedAs="p">
              {componentStand.subTitle}
            </ComponentPageSubTitle>
            <P2 type="corvus" as="p" color={theme.colorSecondary}>
              {componentStand.description}
            </P2>
          </ComponentDescriptionWrapper>
        )}
      </SitePageHeader>
      <Tabs.TabProvider value={valueTab}>
        <GridItem $colStart={1} $colEnd={9}>
          <Tabs onChange={(_, value) => setCurrentTab(value)}>
            {componentStandTabs.map((tab) => (
              <Tabs.Tab
                key={tab.id}
                isDisabled={isDisabledTab(tab.id)}
                value={tab.id}
                label={tab.label}
              />
            ))}
          </Tabs>
        </GridItem>
        {componentStandTabs.map((tab) => (
          <ComponentPageTabPanelStyled
            as={Tabs.TabPanel}
            key={tab.id}
            value={tab.id}
            $colStart={1}
            $colEnd={9}>
            <ComponentData componentName={componentStand.id} tabName={tab.id} />
          </ComponentPageTabPanelStyled>
        ))}
      </Tabs.TabProvider>
    </ComponentPageStyled>
  );
};

export default ComponentPage;
