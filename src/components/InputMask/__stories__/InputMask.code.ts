export default "const MASK = [/[0-3]/, /\\d/, '.', /[01]/, /\\d/, '.', /\\d/, /\\d/, /\\d/, /\\d/];\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState('');\n" +
  "\n" +
  "  return (\n" +
  "    <InputMask\n" +
  "      placeholder={'Date input example'}\n" +
  "      value={value}\n" +
  "      mask={MASK}\n" +
  "      onChange={(_e, val: string) => setValue(val)}\n" +
  "      isGuide={true}\n" +
  "      isShowMask={true}\n" +
  "      isKeepCharPositions={true}\n" +
  "      placeholderChar='_'\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
