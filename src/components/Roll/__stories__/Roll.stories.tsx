import { StoryFn, Meta } from "@storybook/react-vite";
import Roll from "../";
import doc from "./Roll.doc.mdx";
import RollContent from "./examples/RollContent";
import MainContent from "./examples/MainContent";
import Footer from "./examples/Footer";

export default {
  title: "Components/Organisms/Roll",
  component: Roll,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=1158%3A3102"
    }
  },
  argTypes: {
    size: {
      options: ["l", "m"]
    },
    textOverflow: {
      options: ["ellipsis", "clip"]
    },
    statusSubHeader: {
      control: "select"
    }
  }
} as Meta<typeof Roll>;

const Template: StoryFn<typeof Roll> = (args) => (
  <Roll
    {...args}
    rollContent={<RollContent />}
    mainContent={<MainContent />}
    footer={<Footer />}
  />
);

export const Demo = {
  render: Template,

  args: {
    style: { width: "400px", height: "500px" },
    titleHeader: "H-s",
    titleSubHeader: "P1-s",
    subTitleHeader: "P2-s",
    textOverflow: "ellipsis",
    size: "l",
    labelSubHeader: "Focused label"
  }
};
