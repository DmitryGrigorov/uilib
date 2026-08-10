export type TSkeletonType = (typeof SKELETON_TYPE)[number];

export const SKELETON_TYPE = [
  "rectangle",
  "circle",
  "text",
  "list",
  "smallText",
  "tab",
  "tag"
] as const;

export interface ISkeletonBase {
  width?: string | number;
  className?: string;
}

export interface IRectangleSkeletonProps extends ISkeletonBase {
  type: "rectangle";
  height: string | number;
}

export interface ICircleSkeletonProps extends Omit<ISkeletonBase, "width"> {
  type: "circle";
  diameter: string | number;
}

export interface ITextSkeletonProps extends ISkeletonBase {
  type: "text" | "smallText";
  rows: number;
  isHeader?: boolean;
}

export interface IRowGroupSkeletonProps extends ISkeletonBase {
  type: "tab" | "tag";
  count: number;
}

export interface IListSkeletonProps extends ISkeletonBase {
  type: "list";
  rows: number;
}

export type TSkeletonProps =
  | IRectangleSkeletonProps
  | ICircleSkeletonProps
  | IRowGroupSkeletonProps
  | IListSkeletonProps
  | ITextSkeletonProps;
