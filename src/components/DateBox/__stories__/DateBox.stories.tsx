import { Meta } from "@storybook/react-vite";
import DateBox from "../index";
import doc from "./DateBox.doc.mdx";

export default {
  title: "Components/Neutrons/DateBox",
  component: DateBox,
  parameters: {
    docs: {
      page: doc
    }
  }
} as Meta<typeof DateBox>;

export const Default = {
  args: {
    children: 22
  }
};

export const Current = {
  args: {
    children: 22,
    viewType: "current"
  }
};

export const Selected = {
  args: {
    children: 22,
    viewType: "selected"
  }
};

export const RangeStart = {
  args: {
    children: 22,
    viewType: "start"
  }
};

export const RangeIn = {
  args: {
    children: 22,
    viewType: "in"
  }
};

export const Disabled = {
  args: {
    children: 22,
    isDisabled: true
  }
};

export const RangeFinish = {
  args: {
    children: 22,
    viewType: "finish"
  }
};

export const DarkMode = {
  args: {
    children: 22
  }
};

export const DarkModeCurrent = {
  args: {
    children: 22,
    viewType: "current"
  }
};

export const DarkModeSelected = {
  args: {
    children: 22,
    viewType: "selected"
  }
};

export const DarkModeRangeStart = {
  args: {
    children: 22,
    viewType: "start"
  }
};

export const DarkModeRangeIn = {
  args: {
    children: 22,
    viewType: "in"
  }
};

export const DarkModeRangeFinish = {
  args: {
    children: 22,
    viewType: "finish"
  }
};

export const DarkModeDisabled = {
  args: {
    children: 22,
    isDisabled: true
  }
};
