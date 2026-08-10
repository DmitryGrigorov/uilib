import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { TreeExample } from "./TreeExamples";

const TreeExamples: React.FC = () => {
  const TREE_EXAMPLES = [
    {
      key: "default",
      example1: <TreeExample />
    }
  ];

  return <StorybookDocExamples items={TREE_EXAMPLES} />;
};

export default TreeExamples;
