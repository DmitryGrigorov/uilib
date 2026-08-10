export default "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState<[number, number]>([20, 70]);\n" +
  "\n" +
  "  return (\n" +
  "    <Slider<true>\n" +
  "      leadText={`Value ${value[0]} - ${value[1]}`}\n" +
  "      value={value}\n" +
  "      onChange={(_, val) => setValue(val)}\n" +
  "      isRange\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
