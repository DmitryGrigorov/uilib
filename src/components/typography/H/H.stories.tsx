import { Meta } from "@storybook/react-vite";
import doc from "../docs/fonts.doc.mdx";
import H from "./";

export default {
  title: "Typography/H",
  component: H,
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof H>;

export const Aries = {
  args: {
    children: "h/xl/Aries • 64|64 Bold",
    type: "aries"
  }
};

export const Taurus = {
  args: {
    children: "h/xl/Taurus • 56|56 Bold",
    type: "taurus"
  }
};

export const Gemini = {
  args: {
    children: "h/xl/Gemini • 40|48 Bold",
    type: "gemini"
  }
};

export const Cancer = {
  args: {
    children: "h/l/Cancer • 32|40 Bold",
    type: "cancer"
  }
};

export const Leo = {
  args: {
    children: "h/l/Leo • 28|36 Bold",
    type: "leo"
  }
};

export const Virgo = {
  args: {
    children: "h/l/Virgo • 24|32 Bold",
    type: "virgo"
  }
};

export const Libra = {
  args: {
    children: "h/m/Libra • 20|24 Bold",
    type: "libra"
  }
};

export const Scorpius = {
  args: {
    children: "h/m/Scorpius • 20|28 Bold",
    type: "scorpius"
  }
};

export const Capricornus = {
  args: {
    children: "h/s/Capricornus • 16|24 Bold",
    type: "capricornus"
  }
};

export const Saggitarius = {
  args: {
    children: "h/s/Saggitarius • 16|20 Bold",
    type: "saggitarius"
  }
};
