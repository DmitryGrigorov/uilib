import React from "react";
import StorybookDocExamples from "../../../helpers/StorybookDocExamples";
import { AccordionExample } from "./AccordionExamples/index";

const AccordionExamples: React.FC = () => {
  const ACCORDION_EXAMPLES = [
    {
      key: "default",
      example1: <AccordionExample />
    }
  ];

  return <StorybookDocExamples items={ACCORDION_EXAMPLES} />;
};

export default AccordionExamples;
