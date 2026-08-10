export default "const App = () => {\n" +
  "  const [phone, setPhone] = React.useState<string>('null');\n" +
  "\n" +
  "  const handleChange = (event, value) => setPhone(value);\n" +
  "\n" +
  "  return <InputPhone value={phone} onChange={handleChange} />;\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
