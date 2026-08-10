import React from "react";
import {
  IconSetting1,
  IconArrowLeft2,
  IconSmileys2
} from "@dmitrygrigorov/icons";
import PageHeader from "../../../";

export const PageHeaderExampleText: React.FC = () => (
  <PageHeader style={{ padding: "10px" }} text="Heading text" />
);

export const PageHeaderExampleTrail: React.FC = () => (
  <PageHeader
    style={{ padding: "10px" }}
    text="Heading text"
    trailIcon={<IconSetting1 />}
  />
);

export const PageHeaderExampleLeadIcon: React.FC = () => (
  <PageHeader style={{ padding: "10px" }} text="Heading text" isLeadIcon />
);

export const PageHeaderExampleAll: React.FC = () => (
  <PageHeader
    style={{ padding: "10px" }}
    text="Heading text"
    isLeadIcon
    trailIcon={<IconSetting1 />}
  />
);

export const PageHeaderUsageExample: React.FC = () => (
  <PageHeader
    style={{ margin: "20px 0 20px" }}
    width="200px"
    text="Heading text"
  />
);

export const PageHeaderLeadIconExamples: React.FC = () => (
  <div
    style={{
      margin: "20px 0 20px",
      width: "200px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
    <PageHeader text="Default leading icon" isLeadIcon />
    <PageHeader
      text="Custom leading icon"
      isLeadIcon
      leadIcon={<IconArrowLeft2 />}
    />
  </div>
);

export const PageHeaderTrailIconExamples: React.FC = () => (
  <div
    style={{
      margin: "20px 0 20px",
      width: "200px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
    <PageHeader text="Trailing icon" trailIcon={<IconSmileys2 />} />
    <PageHeader text="Heading" isLeadIcon trailIcon={<IconSmileys2 />} />
  </div>
);
