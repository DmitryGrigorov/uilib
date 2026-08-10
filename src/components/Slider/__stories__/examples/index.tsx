import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  SliderExampleBasic,
  SliderExampleBasicRange,
  SliderExampleDisabled,
  SliderExampleStatus,
  SliderExampleDirectionVertical
} from "./SliderExamples";

const SlidersExample: React.FC = () => {
  const RADIO_BUTTONS_ITEMS = [
    {
      key: "default",
      default: <SliderExampleBasic />,
      range: <SliderExampleBasicRange />
    },
    {
      key: "disabled",
      default: <SliderExampleDisabled />,
      range: <SliderExampleDisabled isRange />
    },
    {
      key: "success",
      default: <SliderExampleStatus status="success" />,
      range: <SliderExampleStatus status="success" isRange />
    },
    {
      key: "warning",
      default: <SliderExampleStatus status="warning" />,
      range: <SliderExampleStatus status="warning" isRange />
    },
    {
      key: "error",
      default: <SliderExampleStatus status="error" />,
      range: <SliderExampleStatus status="error" isRange />
    },
    {
      key: "vertical",
      default: <SliderExampleDirectionVertical />,
      range: <SliderExampleDirectionVertical isRange />
    }
  ];

  const SIZE_TABS = [
    { label: "Size M", value: "m" },
    { label: "Size S", value: "s" }
  ];

  return (
    <StorybookDocExamples items={RADIO_BUTTONS_ITEMS} sizeTabs={SIZE_TABS} />
  );
};

export default SlidersExample;
