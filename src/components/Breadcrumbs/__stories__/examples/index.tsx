import React from "react";
import { IconSetting1 } from "@dmitrygrigorov/icons";
import Breadcrumbs from "../../";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";

export const BreadcrumbsExamples: React.FC = () => {
  const BREADCRUMBS_EXAMPLES = [
    {
      key: "default",
      icon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />
            }
          ]}
        />
      ),
      text: <Breadcrumbs items={[{ text: "P2-l-1" }]} />,
      textPlusLeadIcon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />,
              text: "P2-l-2"
            }
          ]}
        />
      ),
      textPlusTrailIcon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />,
              text: "P2-l-3",
              iconType: "trail"
            }
          ]}
        />
      )
    },
    {
      key: "current",
      icon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />,
              viewType: "current"
            }
          ]}
        />
      ),
      text: <Breadcrumbs items={[{ text: "P2-l", viewType: "current" }]} />,
      textPlusLeadIcon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />,
              text: "P2-l-4",
              viewType: "current"
            }
          ]}
        />
      ),
      textPlusTrailIcon: (
        <Breadcrumbs
          items={[
            {
              icon: <IconSetting1 width={16} height={16} />,
              text: "P2-l-5",
              viewType: "current",
              iconType: "trail"
            }
          ]}
        />
      )
    }
  ];

  return <StorybookDocExamples items={BREADCRUMBS_EXAMPLES} />;
};
