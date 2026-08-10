import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Breadcrumbs from "../../../";

export const BreadcrumbsExample: React.FC = () => (
  <Breadcrumbs
    items={[
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-1",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-2"
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-3",
        isDisabled: true
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-4"
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-5",
        iconType: "trail"
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-6",
        viewType: "current"
      }
    ]}
    maxNoCollapsedItems={1}
  />
);

export const BreadcrumbsWithDropdown: React.FC = () => (
  <Breadcrumbs
    items={[
      {
        icon: <IconSetting1 width={16} height={16} />,
        text: "P2-l-1",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      },
      {
        text: "P2-l-2",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      },
      {
        icon: <IconSetting1 width={16} height={16} />,
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      },
      {
        text: "P2-l-4",
        subitems: [
          { label: "1", groupId: 1 },
          { label: "2", groupId: 2 },
          { label: "12", groupId: 1 },
          { label: "123", groupId: 1 },
          { label: "124", groupId: 1 },
          { label: "125", groupId: 1 }
        ]
      }
    ]}
  />
);
