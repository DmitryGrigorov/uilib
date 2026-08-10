export default "const options = [\n" +
  "  {\n" +
  "    id: 'Moscow',\n" +
  "    country: {\n" +
  "      city: 'Moscow'\n" +
  "    }\n" +
  "  },\n" +
  "  {\n" +
  "    id: 'Paris',\n" +
  "    country: {\n" +
  "      city: 'Paris'\n" +
  "    }\n" +
  "  },\n" +
  "  {\n" +
  "    id: 'Prague',\n" +
  "    country: {\n" +
  "      city: 'Prague'\n" +
  "    }\n" +
  "  },\n" +
  "  {\n" +
  "    id: 'Amsterdam',\n" +
  "    country: {\n" +
  "      city: 'Amsterdam'\n" +
  "    },\n" +
  "    isDisabled: true\n" +
  "  }\n" +
  "];\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  const [value, setValue] = React.useState([]);\n" +
  "\n" +
  "  return (\n" +
  "    <MultiSelect\n" +
  "      placeholder='Label'\n" +
  "      value={value}\n" +
  "      onChange={(val) => setValue(val)}\n" +
  "      options={options}\n" +
  "      fieldNames={{ value: 'id', label: 'country.city' }}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
