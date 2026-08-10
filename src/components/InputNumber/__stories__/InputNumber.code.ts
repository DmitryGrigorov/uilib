export default "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState<number | undefined>();\n" +
  "\n" +
  "  return (\n" +
  "    <InputNumber\n" +
  "      placeholder='Number suffix'\n" +
  "      value={value}\n" +
  "      suffix=' ₽'\n" +
  "      onValueChange={(values) => setValue(values.value)}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
