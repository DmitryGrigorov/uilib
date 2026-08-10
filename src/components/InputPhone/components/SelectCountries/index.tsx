import React from "react";
import { FlagRussia, FlagDisabled } from "./FlagIcons";
import { SelectCountriesWrapper } from "./styles";
import { ISelectCountriesProps } from "./types";

const SelectCountries: React.FC<ISelectCountriesProps> = ({ isDisabled }) => (
  <SelectCountriesWrapper>
    {isDisabled ? (
      <FlagDisabled width={"24px"} height={"24px"} />
    ) : (
      <FlagRussia width={"24px"} height={"24px"} />
    )}
  </SelectCountriesWrapper>
);

export default SelectCountries;
