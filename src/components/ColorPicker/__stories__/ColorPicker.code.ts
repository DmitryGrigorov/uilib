export default "const App: React.FC = () => {\n" +
  "  const [color, setColor] = React.useState('#8bd046');\n" +
  "\n" +
  "  return (\n" +
  "    <ColorPicker\n" +
  "      color={color}\n" +
  "      isInput={true}\n" +
  "      lastColors={[\n" +
  "      '#6fc74c',\n" +
  "      '#5BB9FF',\n" +
  "      '#835b11',\n" +
  "      '#ff5bd1',\n" +
  "      '#3b0a08',\n" +
  "      '#C7514C',\n" +
  "      '#628141',\n" +
  "      '#4c56c7'\n" +
  "    ]}" +
  "      onChange={({ color: _color }) => setColor(_color)}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />)";
