export const lowerCaseAndReplace = (value: string): string =>
  String(value).toLowerCase().replaceAll(" ", "-");
