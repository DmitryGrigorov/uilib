export default "const options = [\n" +
  "  { label: 'Moscow', value: 'Moscow' },\n" +
  "  { label: 'Paris', value: 'Paris' },\n" +
  "  { label: 'Prague', value: 'Prague' },\n" +
  "  { label: 'Amsterdam', value: 'Amsterdam', isDisabled: true },\n" +
  "  { label: 'Berlin', value: 'Berlin' },\n" +
  "  { label: 'London', value: 'London' },\n" +
  "  { label: 'Riga', value: 'Riga' }\n" +
  "];\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState('');\n" +
  "\n" +
  "  return (\n" +
  "    <Select\n" +
  "      placeholder={['Label 1', 'Label 2']}\n" +
  "      options={options}\n" +
  "      status='success'\n" +
  "      statusText='Success text'\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
