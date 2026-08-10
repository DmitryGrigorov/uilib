export type TSegmentedControlSize = "l" | "m" | "s" | "xs";

export interface ISegmentedControlProps<Value = string> {
  className?: string;
  options: Array<ISegmentedControlOption<Value>>;
  value?: Value;
  size?: TSegmentedControlSize;
  onChange?: (value: Value) => void;
}
export interface ISegmentedControlOption<Value> {
  label: string | JSX.Element;
  value: Value;
  icon?: JSX.Element;
  isDisabled?: boolean;
}
