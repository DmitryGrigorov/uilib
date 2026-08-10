import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import ThemeProvider from "../../../../ThemeProvider/ThemeProvider";
import { DARK_THEME } from "../../../../Pallette/themes";
import Tabs from "../../../";

export const TabsExampleDark: React.FC = () => (
  <div style={{ background: "#1E2129", padding: "10px" }}>
    <ThemeProvider theme={DARK_THEME}>
      <Tabs.TabProvider value="tab1">
        <Tabs>
          <Tabs.Tab label="Tab 1" value="tab1" icon={<IconSetting1 />} />
          <Tabs.Tab label="Tab 2" value="tab2" />
          <Tabs.Tab label="Tab 3" value="tab3" isDisabled />
        </Tabs>
        <Tabs.TabPanel value="tab1">Tab 1</Tabs.TabPanel>
        <Tabs.TabPanel value="tab2">Tab 2</Tabs.TabPanel>
        <Tabs.TabPanel value="tab3">Tab 3</Tabs.TabPanel>
      </Tabs.TabProvider>
    </ThemeProvider>
  </div>
);
