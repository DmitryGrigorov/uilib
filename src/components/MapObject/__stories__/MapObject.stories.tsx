import { Meta } from "@storybook/react-vite";
import { IconInformation } from "@dmitrygrigorov/icons";
import MapObject from "../";
import doc from "./MapObject.doc.mdx";

export default {
  title: "Components/Foundations/MapObject",
  component: MapObject,
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof MapObject>;

export const Demo = {
  args: {
    icon: <IconInformation />,
    typeColor: "additional"
  }
};
