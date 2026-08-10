import { Meta } from "@storybook/react-vite";
import InputNumber from "../";
import doc from "./InputNumber.doc.mdx";

export default {
  title: "Components/Molecules/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  }
} as Meta<typeof InputNumber>;

export const Sum = {
  args: {
    suffix: "₽",
    placeholder: "Amount",
    thousandSeparator: " ",
    decimalScale: 2,
    value: "",
    min: 10,
    max: 100
  }
};

export const Days = {
  args: {
    maxLength: 5,
    placeholder: "Days",
    value: ""
  }
};
