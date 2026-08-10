import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  EmptyStateDefault,
  EmptyStateNoButton,
  EmptyStateNoButtonAndHeader,
  EmptyStateNoButtonAndIcon,
  EmptyStateNoButtonAndText,
  EmptyStateNoTextAndIcon
} from "./EmptyStateExamples";

export const EmptyStateExamples: React.FC = () => {
  const EMPTYSTATE_EXAMPLES = [
    {
      key: "emptyState",
      default: <EmptyStateDefault />
    },
    {
      key: "EmptyStateNoButton",
      noButton: <EmptyStateNoButton />
    },
    {
      key: "EmptyStateNoButtonAndHeader",
      noButtonHeader: <EmptyStateNoButtonAndHeader />
    },
    {
      key: "EmptyStateNoButtonAndIcon",
      noButtonAndIcon: <EmptyStateNoButtonAndIcon />
    },
    {
      key: "EmptyStateNoButtonAndText",
      noButtonAndText: <EmptyStateNoButtonAndText />
    },
    {
      key: "EmptyStateNoTextAndIcon",
      noIconAndText: <EmptyStateNoTextAndIcon />
    }
  ];

  return <StorybookDocExamples items={EMPTYSTATE_EXAMPLES} />;
};
