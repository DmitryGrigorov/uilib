import React, { useState } from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Tabs from "../../../";
import { ITabsItem } from "../../../components/Tabs/types";
import { TSize } from "../../../components/Tab/types";

export const TabsItemsText: React.FC = () => {
  const ITEMS = ["Tab1", "Tab2", "Tab3"];

  return <Tabs items={ITEMS} value={0} />;
};

export const TabsItemsObject: React.FC = () => {
  const ITEMS: ITabsItem[] = [
    { label: "Tab1", value: "Tab1" },
    { label: "Tab2", value: "Tab2", icon: <IconSetting1 /> },
    { label: "Tab3", value: "Tab3" }
  ];

  return <Tabs items={ITEMS} value="Tab2" />;
};

export const TabsItemsChild: React.FC = () => (
  <Tabs value="tab2">
    <Tabs.Tab label="Tab 1" value="tab1" icon={<IconSetting1 />} />
    <Tabs.Tab label="Tab 2" value="tab2" />
    <Tabs.Tab label="Tab 3" value="tab3" isDisabled />
  </Tabs>
);

const TabPanel: React.FC<
  React.PropsWithChildren<{ index: number; value: number | string }>
> = ({ children, index, value }) => {
  if (index === value) {
    return <div>{children}</div>;
  }
  return null;
};

export const TabsCustomPanel: React.FC = () => {
  const [value, setValue] = useState<string | number>(0);

  const handleChange = (
    _: React.MouseEvent,
    newValue: number | string
  ): void => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tabs.Tab label="Tab 1" />
        <Tabs.Tab label="Tab 2" />
        <Tabs.Tab label="Tab 3" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Tab 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab 3
      </TabPanel>
    </div>
  );
};

export const TabsTabPanel: React.FC = () => (
  <Tabs.TabProvider value="tab1">
    <Tabs>
      <Tabs.Tab label="Tab 1" value="tab1" />
      <Tabs.Tab label="Tab 2" value="tab2" />
      <Tabs.Tab label="Tab 3" value="tab3" />
    </Tabs>
    <Tabs.TabPanel value="tab1">Tab 1</Tabs.TabPanel>
    <Tabs.TabPanel value="tab2">Tab 2</Tabs.TabPanel>
    <Tabs.TabPanel value="tab3">Tab 3</Tabs.TabPanel>
  </Tabs.TabProvider>
);

export const TabsTabPanelLazy: React.FC = () => (
  <Tabs.TabProvider value="tab1" isLazy={true}>
    <Tabs>
      <Tabs.Tab label="Tab 1" value="tab1" />
      <Tabs.Tab label="Tab 2" value="tab2" />
      <Tabs.Tab label="Tab 3" value="tab3" />
    </Tabs>
    <Tabs.TabPanel value="tab1">Tab 1</Tabs.TabPanel>
    <Tabs.TabPanel value="tab2">Tab 2</Tabs.TabPanel>
    <Tabs.TabPanel value="tab3">Tab 3</Tabs.TabPanel>
  </Tabs.TabProvider>
);

export const TabsExampleLight: React.FC<{ size?: TSize }> = ({ size }) => (
  <Tabs.TabProvider value="tab1">
    <Tabs>
      <Tabs.Tab
        label="Tab 1"
        value="tab1"
        icon={<IconSetting1 />}
        size={size}
      />
      <Tabs.Tab label="Tab 2" value="tab2" size={size} />
      <Tabs.Tab label="Tab 3" value="tab3" isDisabled size={size} />
    </Tabs>
    <Tabs.TabPanel value="tab1">Tab 1</Tabs.TabPanel>
    <Tabs.TabPanel value="tab2">Tab 2</Tabs.TabPanel>
    <Tabs.TabPanel value="tab3">Tab 3</Tabs.TabPanel>
  </Tabs.TabProvider>
);
