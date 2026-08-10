import React from "react";
import { components } from "../../../../containers/MDXProvider";
import {
  VariantsContext,
  VariantStoreInit
} from "../../../../modules/variants";
import ComponentDesign from "../ComponentDesign";
/*eslint import/namespace: ['error', { allowComputed: true }]*/
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as docs from "../../../../build/docs";
import ComponentCode from "../ComponentCode";
import { ComponentDocsWrapper } from "./styles";
import { IComponentDataProps } from "./types";

const ComponentData: React.FC<IComponentDataProps> = ({
  componentName,
  tabName
}) => {
  const ComponentDocs =
    (docs as Record<string, React.ComponentType<Record<string, unknown>>>)[
      componentName
    ] || null;

  if (tabName === "design") {
    return (
      <VariantsContext.Provider value={VariantStoreInit}>
        <ComponentDesign name={componentName} />
      </VariantsContext.Provider>
    );
  }
  if (tabName === "docs" && ComponentDocs) {
    return (
      <ComponentDocsWrapper>
        <ComponentDocs components={components} />
      </ComponentDocsWrapper>
    );
  }

  if (tabName === "code") {
    return <ComponentCode name={componentName} />;
  }
  return null;
};

export default ComponentData;
