import React from "react";
import { BooleanCell, NoIconStyled, YesIconStyled } from "./style";
import { YesNoParamsBasic } from "./types";

const YesNo = ({ value }: YesNoParamsBasic): JSX.Element => (
  <BooleanCell>
    {value ? (
      <YesIconStyled width={24} height={24} />
    ) : (
      <NoIconStyled width={24} height={24} />
    )}
  </BooleanCell>
);

export default YesNo;
