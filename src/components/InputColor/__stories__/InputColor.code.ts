export default "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState('');\n" +
  "\n" +
  "  return (\n" +
  "    <InputColor\n" +
  "      status='success'\n" +
  "      statusText='Success text'\n" +
  "      color={value}\n" +
  "      onChange={(val: string) => setValue(val)}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
