import { Meta } from "@storybook/react-vite";
import doc from "../docs/fonts.doc.mdx";
import P1 from "./";

export default {
  title: "Typography/P1",
  component: P1,

  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof P1>;

export const Aquilla = {
  args: {
    children: "p1/m/Aquilla • 20|24 Semibold",
    type: "aquilla"
  }
};

export const Phoenix = {
  args: {
    children: "p1/s/Phoenix • 26|24 Semibold",
    type: "phoenix"
  }
};

export const Cygnus = {
  args: {
    children: "p1/s/Cygnus • 14|22 Semibold",
    type: "cygnus"
  }
};
