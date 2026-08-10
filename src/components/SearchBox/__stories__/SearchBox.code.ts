export default "const App: React.FC = () => {\n" +
  "const [search, setSearch] = React.useState('Search query');\n" +
  "const handleChange = (\n" +
  "  _e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,\n" +
  "  value: string\n" +
  "): void => {\n" +
  "  setSearch(value);\n" +
  "};\n" +
  "return (\n" +
  "  <SearchBox\n" +
  "    placeholder='What are you looking for?'\n" +
  "    size='l'\n" +
  "    style={{ maxWidth: '480px' }}\n" +
  "    value={search}\n" +
  "    onChange={handleChange}\n" +
  "    status='error'\n" +
  "    statusText='Error Label'\n" +
  "  />\n" +
  " );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
