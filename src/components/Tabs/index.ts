import TabsComponent from "./components/Tabs";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";
import { TabProvider } from "./components/TabContext";
import type { ITabsItem } from "./components/Tabs/types";

type TTabs = typeof TabsComponent & {
  Tab: typeof Tab;
  TabPanel: typeof TabPanel;
  ITabsItem: ITabsItem;
  TabProvider: typeof TabProvider;
};

export type { TTabs, ITabsItem };

const Tabs = TabsComponent as TTabs;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
Tabs.TabProvider = TabProvider;

export default Tabs;
