import { StoryFn, Meta } from "@storybook/react-vite";
import Slider from "../";
import doc from "./Slider.doc.mdx";

export default {
  title: "Components/Molecules/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      page: doc
    }
  },
  argTypes: {
    max: {
      control: {
        type: "number"
      }
    },
    min: {
      control: {
        type: "number"
      }
    },
    step: {
      control: {
        type: "number"
      }
    },
    leadText: {
      control: {
        type: "text"
      }
    },
    trailText: {
      control: {
        type: "text"
      }
    },
    isTooltip: {
      control: {
        type: "boolean"
      }
    },
    direction: {
      options: ["horizontal", "vertical"],
      control: {
        type: "radio"
      }
    },
    status: {
      options: ["info", "success", "warning", "error"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["m", "s"],
      control: {
        type: "radio"
      }
    },
    isDisabled: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<typeof Slider>;

const SingleTemplate: StoryFn<typeof Slider> = (args) => (
  <div style={{ width: "350px", height: "350px" }}>
    <Slider {...args} />
  </div>
);

const RangeTemplate: StoryFn<typeof Slider> = (args) => (
  <div style={{ width: "350px", height: "350px" }}>
    <Slider {...args} isRange />
  </div>
);

export const Single = {
  render: SingleTemplate,

  args: {
    value: 0,
    defaultValue: 15,
    isReset: false
  }
};

export const Range = {
  render: RangeTemplate,

  args: {
    value: [0, 100],
    defaultValue: [15, 55],
    isReset: false
  }
};
