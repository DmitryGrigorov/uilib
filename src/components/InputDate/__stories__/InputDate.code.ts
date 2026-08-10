export default "const App = (): JSX.Element => {\n" +
  "  const [value, setValue] = React.useState<string>('');\n" +
  "\n" +
  "  return (\n" +
  "    <InputDate\n" +
  "      isShowClearIcon={true}\n" +
  "      placeholder='Warning label'\n" +
  "      value={value}\n" +
  "      onChange={(_e, val: string) => setValue(val)}\n" +
  "      status='warning'\n" +
  "      statusText='Warning text'\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
