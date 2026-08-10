export default "const App: React.FC = () => {\n" +
  "  const [checked, setChecked] = React.useState(false);\n" +
  "\n" +
  "  const handleChange = (event, value): void => {\n" +
  "    setChecked(value);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <CheckBox isChecked={checked} onChange={handleChange} label='Checkbox' />\n" +
  "  );\n" +
  "}\n" +
  "\n" +
  "render(<App />)";
