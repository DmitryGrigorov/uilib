import React from "react";
import { useTheme } from "styled-components";
import { PrismLight as Highlight } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { IThemeSite } from "../../../../themes/types";
import P2 from "../../../../../components/typography/P2";
import Button from "../../../../../components/Button";
import { CodeStyled } from "./styles";
import { themeCode } from "./theme";

Highlight.registerLanguage("css", css);
Highlight.registerLanguage("json", json);
Highlight.registerLanguage("tsx", tsx);
Highlight.registerLanguage("typescript", typescript);
Highlight.registerLanguage("jsx", jsx);
Highlight.registerLanguage("javascript", javascript);

const mapLanguage: Record<string, boolean> = {
  css: true,
  json: true,
  tsx: true,
  typescript: true,
  jsx: true,
  javascript: true
};

const getLanguage = (className: string | undefined): string => {
  if (!className) {
    return "tsx";
  }

  const language = className.replace("language-", "");
  if (mapLanguage[language]) {
    return language;
  }
  return "tsx";
};

const Code: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme() as IThemeSite;

  const handleClick = (): void => {
    if (children) {
      navigator.clipboard.writeText(JSON.stringify(children));
    }
  };

  if (className) {
    return (
      <CodeStyled>
        <Highlight
          {...props}
          style={themeCode(theme)}
          language={getLanguage(className)}
          className={className}>
          {/* eslint-disable-next-line @typescript-eslint/no-base-to-string -- MDX always passes raw code text as a string child here */}
          {children?.toString() ?? ""}
        </Highlight>
        <Button viewType="ghost" size="s" onClick={handleClick}>
          Copy
        </Button>
      </CodeStyled>
    );
  }
  return (
    <P2 type="lynx" as={"code"} color={theme.colorSecondary}>
      {children}
    </P2>
  );
};

export default Code;
