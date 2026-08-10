const convertStringToHexFormat = (string: string): string => {
  const matchHashSymbol = new RegExp("[\\s#,]+", "g");
  const matchNotHexSymbols = /[^\dA-Fa-f]/g;
  const hex = string
    .replace(matchHashSymbol, "")
    .replace(matchNotHexSymbols, "")
    .slice(0, 6)
    .toUpperCase();
  return hex.length > 0 ? "#" + hex : "";
};

export default convertStringToHexFormat;
