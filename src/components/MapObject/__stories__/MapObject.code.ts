export default "const App: React.FC = () => {\n" +
  "  const [checked, setChecked] = React.useState(false);\n" +
  "\n" +
  "  const handleChange = (event, value): void => {\n" +
  "    setChecked(value);\n" +
  "  };\n" +
  "\n" +
  "  return <MapObject isChecked={checked} onChange={handleChange} icon={<IconSetting1 />} />;\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
