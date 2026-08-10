import React from "react";
import { P2 } from "../../../../../components/typography";

const Li: React.FC<React.PropsWithChildren> = ({ children }) => (
  <P2 type="corvus" as="li">
    {children}
  </P2>
);

export default Li;
