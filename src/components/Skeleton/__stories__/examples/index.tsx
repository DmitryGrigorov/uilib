import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  SkeletonCircleExample,
  SkeletonListExample,
  SkeletonRectangleExample,
  SkeletonSmallTextExample,
  SkeletonTabExample,
  SkeletonTagExample,
  SkeletonTextExample
} from "./SkeletonExamples";

export const SkeletonExamples: React.FC = () => {
  const SKELETON_EXAMPLES = [
    {
      key: "rectangle",
      rectangleSkeleton: <SkeletonRectangleExample />
    },
    {
      key: "circle",
      circleSkeleton: <SkeletonCircleExample />
    },
    {
      key: "text",
      textSkeleton: <SkeletonTextExample />
    },
    {
      key: "list",
      listSkeleton: <SkeletonListExample />
    },
    {
      key: "smallText",
      smallTextSkeleton: <SkeletonSmallTextExample />
    },
    {
      key: "tab",
      tabSkeleton: <SkeletonTabExample />
    },
    {
      key: "tag",
      tagSkeleton: <SkeletonTagExample />
    }
  ];

  return <StorybookDocExamples items={SKELETON_EXAMPLES} />;
};
