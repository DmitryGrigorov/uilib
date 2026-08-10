import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import {
  PaginationDefault,
  PaginationDisabled,
  PaginationMinimized,
  PaginationMinimizedDisabled
} from "./PaginationExamples";

export const PaginationExamples: React.FC = () => {
  const PAGINATION_EXAMPLES = [
    {
      key: "default",
      default: <PaginationDefault />
    },
    {
      key: "disabled",
      disabled: <PaginationDisabled />
    },
    {
      key: "minimized",
      minimized: <PaginationMinimized />
    },
    {
      key: "mindisabled",
      disabled: <PaginationMinimizedDisabled />
    }
  ];
  return <StorybookDocExamples items={PAGINATION_EXAMPLES} />;
};
