import React, { ChangeEvent, MouseEvent, useState } from "react";
import SearchBox from "../../../";

export const SearchBoxExampleLabel: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => {
  const [search, setSearch] = useState("");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      width="400px"
      value={search}
      status={"error"}
      statusText="Error Label"
      size={size}
      onChange={handleChange}
      type={type}
    />
  );
};

export const SearchBoxExampleIsDisabled: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => (
  <SearchBox
    style={{ maxWidth: "480px" }}
    isDisabled
    type={type}
    size={size}
    width="400px"
  />
);

export const SearchBoxExampleDefault: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => {
  const [search, setSearch] = useState("");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      width="400px"
      value={search}
      size={size}
      onChange={handleChange}
      type={type}
    />
  );
};

export const SearchBoxExampleValue: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => {
  const [search, setSearch] = useState("Search query");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      placeholder="What are you looking for?"
      size={size}
      width="400px"
      value={search}
      onChange={handleChange}
      type={type}
    />
  );
};

export const SearchBoxExampleValueUsage: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => {
  const [search, setSearch] = useState("Search query");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      placeholder="What are you looking for?"
      size={size}
      value={search}
      onChange={handleChange}
      type={type}
    />
  );
};

export const SearchBoxExampleLabelUsage: React.FC<{
  type?: "global" | "basic";
  size?: "l" | "m";
}> = ({ type, size }) => {
  const [search, setSearch] = useState("");
  const handleChange = (
    _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string
  ): void => {
    setSearch(value);
  };

  return (
    <SearchBox
      value={search}
      status={"error"}
      statusText="Error Label"
      size={size}
      onChange={handleChange}
      type={type}
    />
  );
};
