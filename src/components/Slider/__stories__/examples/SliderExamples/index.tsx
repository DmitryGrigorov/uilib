import React, { useState } from "react";
import Slider from "../../../";
import { TSliderStatus, TSliderSize } from "../../../types";

export const SliderExampleBasic: React.FC<{ size?: TSliderSize }> = ({
  size
}) => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      size={size}
    />
  );
};

export const SliderExampleBasicRange: React.FC<{ size?: TSliderSize }> = ({
  size
}) => {
  const [value, setValue] = useState<[number, number]>([20, 70]);

  return (
    <Slider<true>
      leadText={`Value ${value[0]} - ${value[1]}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      isRange
      size={size}
    />
  );
};

export const SliderExampleMinMax: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      min={20}
      max={55}
    />
  );
};

export const SliderExampleStepSingle: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      step={10}
    />
  );
};

export const SliderExampleStepArray: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      step={25}
    />
  );
};

export const SliderExampleWithoutTooltip: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      isTooltip={false}
    />
  );
};

export const SliderExampleTooltipFormatter: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      tooltipFormatter={(val) => `${val || 0}%`}
    />
  );
};

export const SliderExampleLeadText: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText="Example label"
      value={value}
      onChange={(_, val) => setValue(val)}
      isTooltip={false}
    />
  );
};

export const SliderExampleTrailText: React.FC = () => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      trailText="Example label"
      value={value}
      onChange={(_, val) => setValue(val)}
      isTooltip={false}
    />
  );
};

export const SliderExampleDirectionVertical: React.FC<{
  size?: TSliderSize;
  isRange?: boolean;
}> = ({ size, isRange }) => {
  const [value, setValue] = useState<number | [number, number]>(
    isRange ? [20, 50] : 20
  );

  return (
    <Slider
      value={value}
      onChange={(_, val) => setValue(val)}
      isTooltip={false}
      direction="vertical"
      height="350px"
      size={size}
      isRange={isRange}
    />
  );
};

export const SliderExampleDisabled: React.FC<{
  size?: TSliderSize;
  isRange?: boolean;
}> = ({ size, isRange }) => {
  const [value, setValue] = useState<number | [number, number]>(
    isRange ? [20, 50] : 20
  );

  return (
    <Slider
      value={value}
      onChange={(_, val) => setValue(val)}
      isDisabled
      size={size}
      isRange={isRange}
    />
  );
};

export const SliderExampleStatus: React.FC<{
  status: TSliderStatus;
  size?: TSliderSize;
  isRange?: boolean;
}> = ({ status, size, isRange }) => {
  const [value, setValue] = useState<number | [number, number]>(
    isRange ? [20, 60] : 30
  );

  return (
    <Slider
      value={value}
      onChange={(_, val) => setValue(val)}
      status={status}
      size={size}
      isRange={isRange}
    />
  );
};

export const SliderExampleReset: React.FC<{ size?: TSliderSize }> = ({
  size
}) => {
  const [value, setValue] = useState(20);

  return (
    <Slider
      leadText={`Value ${value}`}
      value={value}
      onChange={(_, val) => setValue(val)}
      size={size}
      isReset
    />
  );
};
