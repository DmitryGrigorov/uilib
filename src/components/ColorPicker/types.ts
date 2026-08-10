export interface IColorPickerProps {
  id?: string;
  className?: string;
  color: string;
  lastColors?: string[];
  onChange?: (color: { color: string; alpha?: number }) => void;
  isInput?: boolean;
  colorKey?: (index: number, color: string) => string | number;
  isTransparency?: boolean;
  alpha?: number;
  testId?: string;
  testIdInputColor?: string;
  testIdTransparency?: string;
}
