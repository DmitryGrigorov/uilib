import { StoryFn, Meta } from "@storybook/react-vite";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import { TabProvider } from "../components/TabContext";
import TabPanel from "../components/TabPanel";
import doc from "./Tabs.docs.mdx";

export default {
  title: "Components/Foundations/Tabs",
  component: Tabs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=2998%3A46889"
    },
    docs: {
      page: doc
    }
  }
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="P2-m" icon={<IconSetting1 />} />
    <Tab label="tab2" />
  </Tabs>
);

const TemplateContext: StoryFn<typeof TabProvider> = (args) => (
  <TabProvider value={args.value}>
    <Tabs>
      <Tab label="tab1" icon={<IconSetting1 />} value="tab1" />
      <Tab label="tab2" value="tab2" />
    </Tabs>
    <TabPanel value="tab1">TAB1</TabPanel>
    <TabPanel value="tab2">TAB2</TabPanel>
  </TabProvider>
);

export const TabsExample = {
  render: Template,

  args: {
    value: 0
  }
};

export const TabContextExample = {
  render: TemplateContext,

  args: {
    value: "tab1"
  }
};
