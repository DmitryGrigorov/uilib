import React from "react";
import RadioButton from "../../../../RadioButton";
import { RollContentStyled } from "./styles";

const RollContent: React.FC = () => (
  <RollContentStyled>
    <RadioButton label="Unread first" />
    <RadioButton label="Read first" />
    <RadioButton label="Default" />
  </RollContentStyled>
);

export default RollContent;
