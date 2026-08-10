import { Meta } from "@storybook/react-vite";
import CheckBox from "../";
import doc from "./CheckBox.doc.mdx";
import UnselectedCheckBoxImg from "./assets/unselectCheckBox.png";
import SelectedCheckBoxImg from "./assets/selectedCheckBox.png";

export default {
  title: "Components/Protons/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XRchmIvTtZ29RfhWgjK2le/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=1478%3A10575"
    },
    assets: [UnselectedCheckBoxImg, SelectedCheckBoxImg]
  }
} as Meta<typeof CheckBox>;

export const Demo = {
  args: {
    label: "checkBox"
  }
};
