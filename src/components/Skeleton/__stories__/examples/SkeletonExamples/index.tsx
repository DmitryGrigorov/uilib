import React from "react";
import styled from "styled-components";
import Skeleton from "../../../";

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin: 20px 0;
`;

export const SkeletonRectangleExample: React.FC = () => (
  <Skeleton
    type="rectangle"
    height={30}
    width={800}
    style={{ margin: "20px 0" }}
  />
);

export const SkeletonCircleExample: React.FC = () => (
  <Skeleton type="circle" diameter={80} style={{ margin: "20px 0" }} />
);

export const SkeletonTextExample: React.FC = () => (
  <Skeleton type="text" rows={3} width={800} style={{ margin: "20px 0" }} />
);

export const SkeletonTextWidthHeaderExample: React.FC = () => (
  <Skeleton
    type="text"
    rows={4}
    width={800}
    isHeader
    style={{ margin: "20px 0" }}
  />
);

export const SkeletonSmallTextExample: React.FC = () => (
  <Skeleton
    type="smallText"
    rows={3}
    width={800}
    style={{ margin: "20px 0" }}
  />
);

export const SkeletonSmallTextHeaderExample: React.FC = () => (
  <Skeleton
    type="smallText"
    rows={2}
    width={800}
    isHeader
    style={{ margin: "20px 0" }}
  />
);

export const SkeletonTabExample: React.FC = () => (
  <Skeleton type="tab" count={3} width={800} style={{ margin: "20px 0" }} />
);

export const SkeletonTagExample: React.FC = () => (
  <Skeleton type="tag" count={3} width={800} style={{ margin: "20px 0" }} />
);

export const SkeletonListExample: React.FC = () => (
  <Skeleton type="list" rows={3} width={800} style={{ margin: "20px 0" }} />
);

export const SkeletonDemoExample: React.FC = () => (
  <SkeletonWrapper>
    <Skeleton type="smallText" width={210} rows={2} />
    <Skeleton type="circle" diameter={40} />
    <Skeleton type="rectangle" width={210} height={60} />
    <Skeleton type="rectangle" width={210} height={60} />
  </SkeletonWrapper>
);
