export default "const App: React.FC = () => {\n" +
  "  const [isChecked, setIsChecked] = React.useState(false);\n" +
  "  const handleChange = (): void => {\n" +
  "    setIsChecked(!isChecked);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <Switch\n" +
  "      isChecked={isChecked}\n" +
  "      hasTextOrIcon\n" +
  "      textBefore='text_2'\n" +
  "      textAfter='text_1'\n" +
  "      onChange={handleChange}>\n" +
  "    >\n" +
  "    </Switch>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
