import React, { forwardRef } from "react";
import { TPropsWithAttributes } from "../utils/types/propsWithAttributes";
import { TSkeletonProps } from "./types";
import {
  CircleSkeleton,
  ListSkeletonWrapper,
  RectangleSkeleton,
  RowSkeletonWrapper,
  TextSkeletonWrapper
} from "./styles";

const Skeleton = forwardRef<
  HTMLDivElement,
  TPropsWithAttributes<TSkeletonProps>
>((props, ref) => {
  switch (props.type) {
    case "circle":
      return <CircleSkeleton ref={ref} {...props} />;
    case "rectangle":
      return <RectangleSkeleton ref={ref} {...props} />;
    case "text":
    case "smallText": {
      const { rows, isHeader, ...otherProps } = props;
      return (
        <TextSkeletonWrapper ref={ref} {...otherProps}>
          {isHeader && <RectangleSkeleton height={24} />}
          {[...Array(Math.max(rows, 0)).keys()].map((number) => (
            <RectangleSkeleton key={number} height={4} />
          ))}
        </TextSkeletonWrapper>
      );
    }
    case "tab":
    case "tag": {
      const { count, ...otherProps } = props;
      return (
        <RowSkeletonWrapper ref={ref} {...otherProps}>
          {[...Array(Math.max(count, 0)).keys()].map((number) => (
            <RectangleSkeleton key={number} height="100%" />
          ))}
        </RowSkeletonWrapper>
      );
    }
    case "list": {
      const { rows, ...otherProps } = props;
      return (
        <ListSkeletonWrapper ref={ref} {...otherProps}>
          {[...Array(Math.max(rows, 0)).keys()].map((number) => (
            <div className="list-skeleton-row" key={number}>
              <CircleSkeleton diameter={32} />
              <RectangleSkeleton height={24} />
            </div>
          ))}
        </ListSkeletonWrapper>
      );
    }
    default:
      return null;
  }
});

Skeleton.displayName = "Skeleton";

export default Skeleton;
