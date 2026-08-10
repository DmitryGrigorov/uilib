export interface ITabContextProps {
  value: string | number;
  isLazy?: boolean;
}

export interface ITabContextValue {
  value: string | number;
  isLazy?: boolean;
  onChange: (value: string | number) => void;
}
