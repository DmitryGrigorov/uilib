import React, { useState } from "react";
import ColorPicker from "../../../";

export const ColorPickerExample: React.FC = () => {
  const [color, setColor] = useState("#8bd046");

  return (
    <ColorPicker
      style={{ margin: "20px 0" }}
      color={color}
      isInput
      onChange={({ color: _color, alpha: _alpha }) => setColor(_color)}
      isTransparency
      alpha={0.1}
    />
  );
};

export const ColorPickerExampleWithoutTransparency: React.FC = () => {
  const [color, setColor] = useState("#8bd146");

  return (
    <ColorPicker
      style={{ margin: "20px 0" }}
      color={color}
      isInput
      onChange={({ color: _color }) => setColor(_color)}
    />
  );
};

export const ColorPickerWithoutInput: React.FC = () => {
  const [color, setColor] = useState("#8bd046");

  return (
    <ColorPicker
      style={{ margin: "20px 0" }}
      color={color}
      lastColors={[
        "#6fc74c",
        "#5BB9FF",
        "#835b11",
        "#ff5bd1",
        "#3b0a08",
        "#C7514C",
        "#628141",
        "#4c56c7"
      ]}
      onChange={({ color: _color }) => setColor(_color)}
    />
  );
};

export const ColorPickerWithoutInputWithTransparency: React.FC = () => {
  const [color, setColor] = useState("#8bd046");

  return (
    <ColorPicker
      style={{ margin: "20px 0" }}
      color={color}
      lastColors={[
        "#6fc74c",
        "#5BB9FF",
        "#835b11",
        "#ff5bd1",
        "#3b0a08",
        "#C7514C",
        "#628141",
        "#4c56c7"
      ]}
      isTransparency
      onChange={({ color: _color }) => setColor(_color)}
    />
  );
};

export const ColorPickerWithoutLastColorAndInput: React.FC = () => {
  const [color, setColor] = useState("#8bd046");

  return (
    <ColorPicker
      style={{ margin: "20px 0" }}
      color={color}
      onChange={({ color: _color }) => setColor(_color)}
    />
  );
};

export const ColorPickerWithoutLastColorAndInputWithTransparency: React.FC =
  () => {
    const [color, setColor] = useState("#8bd046");

    return (
      <ColorPicker
        style={{ margin: "20px 0" }}
        color={color}
        onChange={({ color: _color }) => setColor(_color)}
        isTransparency
      />
    );
  };
