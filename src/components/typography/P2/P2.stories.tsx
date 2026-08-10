import { Meta } from "@storybook/react-vite";
import doc from "../docs/fonts.doc.mdx";
import P2 from "./";

export default {
  title: "Typography/P2",
  component: P2,
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof P2>;

export const Pisces = {
  args: {
    children: "p2/xl/Pisces • 20|24 Regular",
    type: "pisces"
  }
};

export const Aquarius = {
  args: {
    children: "p2/xl/Aquarius • 20|28 Regular",
    type: "aquarius"
  }
};

export const Corvus = {
  args: {
    children: "p2/l/Corvus • 16|24 Regular",
    type: "corvus"
  }
};

export const Lynx = {
  args: {
    children: "p2/l/Lynx • 14|22 Regular",
    type: "lynx"
  }
};

export const Cetus = {
  args: {
    children: "p2/m/Cetus • 12|16 Regular",
    type: "cetus"
  }
};

export const Pavo = {
  args: {
    children: "p2/m/Pavo • 12|16 Semibold",
    type: "pavo"
  }
};

export const Musca = {
  args: {
    children: "p2/s/Musca • 10|14 Regular",
    type: "musca"
  }
};

export const Columba = {
  args: {
    children: "p2/s/Columba • 10|14 Semibold",
    type: "columba"
  }
};
