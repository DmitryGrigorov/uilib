import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  ColorPickerExample,
  ColorPickerWithoutInput,
  ColorPickerWithoutInputWithTransparency,
  ColorPickerWithoutLastColorAndInput,
  ColorPickerExampleWithoutTransparency,
  ColorPickerWithoutLastColorAndInputWithTransparency
} from "./ColorPickerExamples";

export const ColorPickerExamples: React.FC = () => {
  const COLOR_PICKER_EXAMPLES = [
    { key: "default", example1: <ColorPickerExample /> },
    {
      key: "defaultWithoutTransparency",
      example1: <ColorPickerExampleWithoutTransparency />
    },
    { key: "withoutInput", example1: <ColorPickerWithoutInput /> },
    {
      key: "withoutInputWithTransparency",
      example1: <ColorPickerWithoutInputWithTransparency />
    },
    {
      key: "withoutLastColorsAndInput",
      example1: <ColorPickerWithoutLastColorAndInput />
    },
    {
      key: "withoutLastColorsAndInputWithTransparency",
      example1: <ColorPickerWithoutLastColorAndInputWithTransparency />
    }
  ];

  return <StorybookDocExamples items={COLOR_PICKER_EXAMPLES} />;
};
