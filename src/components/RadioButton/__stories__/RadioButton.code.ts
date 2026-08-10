export default "const App: React.FC = () => {\n" +
  "const [value, setValue] = React.useState();\n" +
  "  return (\n" +
  "    <RadioButton\n" +
  "      label='RadioButton'\n" +
  "      value='radio'\n" +
  "      isChecked={value=== 'radio'}\n" +
  "      onChange={(_, val) => setValue(val)}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />)";
