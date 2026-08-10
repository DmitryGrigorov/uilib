import React from "react";
import { observer } from "mobx-react-lite";
/*eslint import/namespace: ['error', { allowComputed: true }]*/
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as variants from "../../../../build/variants";
import ComponentVariants from "../../../../containers/ComponentVariants";
import { ComponentViewStyled, ComponentDesignStyled } from "./styles";

const ComponentDesign: React.FC<{ name: string }> = observer(({ name }) => {
  const Component =
    (variants as Record<string, React.ComponentType>)[name] || null;

  if (Component) {
    return (
      <ComponentDesignStyled>
        <ComponentViewStyled
          id={name}
          className="component-design__card component-design__card-component">
          <Component />
        </ComponentViewStyled>
        <ComponentVariants
          className="component-design__card"
          id={`${name}-variants`}
        />
      </ComponentDesignStyled>
    );
  }
  return null;
});

export default ComponentDesign;
