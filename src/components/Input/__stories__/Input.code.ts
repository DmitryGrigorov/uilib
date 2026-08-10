export default "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState('');\n" +
  "\n" +
  "  return (\n" +
  "    <Input\n" +
  "      placeholder={['Error label', 'Focus label']}\n" +
  "      isRequired={true}" +
  "      value={value}\n" +
  "      onChange={(_e, val: string) => setValue(val)}\n" +
  "      status='error'\n" +
  "      statusText='Error text'\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
