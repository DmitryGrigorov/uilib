import React, { useState } from "react";
import Tabs from "../../Tabs";
import { ITabsItem } from "../../Tabs/components/Tabs/types";
import ThemeProvider from "../../ThemeProvider/ThemeProvider";
import { LIGHT_THEME, DARK_THEME } from "../../Pallette/themes";
import { Row, ComponentWrapper, ExamplesWrapper } from "./styles";

const THEME_TABS = [
  { label: "Light theme", value: "light" },
  { label: "Dark theme", value: "dark" }
];

const StorybookDocExamples: React.FC<{
  items: Array<{
    key: string;
    [key: string]: React.ReactElement | string | undefined;
  }>;
  sizeTabs?: ITabsItem[];
}> = ({ items, sizeTabs }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [currentSize, setCurrentSize] = useState(
    String(sizeTabs?.[0].value || "")
  );

  const handleChangeTheme = (_: any, newValue: string | number): void => {
    setCurrentTheme(String(newValue));
  };
  const handleChangeSize = (_: any, newValue: string | number): void => {
    setCurrentSize(String(newValue));
  };

  return (
    <>
      <Row justify="space-between">
        <Tabs items={THEME_TABS} value="light" onChange={handleChangeTheme} />
        {sizeTabs && (
          <Tabs
            items={sizeTabs}
            value={sizeTabs[0].value}
            onChange={handleChangeSize}
          />
        )}
      </Row>
      <ExamplesWrapper currentTheme={currentTheme}>
        {items.map((item) => (
          <Row key={item.key}>
            <ThemeProvider
              theme={currentTheme === "light" ? LIGHT_THEME : DARK_THEME}>
              {Object.entries(item)
                .filter(([_, component]) => typeof component !== "string")
                .map(([key, component]) => (
                  <ComponentWrapper key={`${key}${currentSize}`}>
                    {currentSize
                      ? React.cloneElement(
                          component as React.ReactElement<{ size?: string }>,
                          { size: currentSize }
                        )
                      : component}
                  </ComponentWrapper>
                ))}
            </ThemeProvider>
          </Row>
        ))}
      </ExamplesWrapper>
    </>
  );
};

export default StorybookDocExamples;
