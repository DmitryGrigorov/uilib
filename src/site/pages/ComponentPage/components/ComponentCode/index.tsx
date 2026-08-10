import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import styled, { useTheme, css } from "styled-components";
import * as components from "@dmitrygrigorov/components";
import * as icons from "@dmitrygrigorov/icons";
import { IThemeSite } from "../../../../themes/types";
/*eslint import/namespace: ['error', { allowComputed: true }]*/
// These generated files are available only after the build step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as codes from "../../../../build/codes";
import {
  ComponentCodeStyled,
  ComponentEditorWrapper,
  ComponentViewStyled,
  styleLiveCode
} from "./styles";

const ComponentCode: React.FC<{ name: string }> = ({ name }) => {
  const theme = useTheme() as IThemeSite;
  return (
    <ComponentCodeStyled>
      <LiveProvider
        code={(codes as Record<string, string>)[name]}
        theme={styleLiveCode(theme)}
        noInline={true}
        scope={{ ...components, styled, useTheme, css, React, ...icons }}>
        <ComponentEditorWrapper>
          <LiveEditor />
          <LiveError />
        </ComponentEditorWrapper>
        <ComponentViewStyled>
          <LivePreview />
        </ComponentViewStyled>
      </LiveProvider>
    </ComponentCodeStyled>
  );
};

export default ComponentCode;
