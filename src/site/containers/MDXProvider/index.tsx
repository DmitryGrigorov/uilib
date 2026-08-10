import type { MDXComponents } from "mdx/types";

import H1 from "./components/H1";
import H2 from "./components/H2";
import H3 from "./components/H3";
import H4 from "./components/H4";
import H5 from "./components/H5";
import H6 from "./components/H6";
import P from "./components/P";
import Ul from "./components/Ul";
import A from "./components/A";
import Code from "./components/Code";
import Table from "./components/Table";
import Th from "./components/Th";
import Td from "./components/Td";
import Tr from "./components/Tr";
import Div from "./components/Div";
import Ol from "./components/Ol";
import Li from "./components/Li";

export const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: Ul,
  ol: Ol,
  a: A,
  code: Code,
  table: Table,
  th: Th,
  td: Td,
  tr: Tr,
  div: Div,
  li: Li
};
