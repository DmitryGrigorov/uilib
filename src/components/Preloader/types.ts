export interface IPreloaderProps {
  progress?: number;
  isShowLabel?: boolean;
  width?: string;
  height?: string;
  className?: string;
  children?: any;
  type?: "star" | "circular" | "loading";
}
