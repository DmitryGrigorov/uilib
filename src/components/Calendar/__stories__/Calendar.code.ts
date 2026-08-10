export default "const App = (): JSX.Element => {\n" +
  "  const [value, setValue] = React.useState('');\n" +
  "\n" +
  "  return (\n" +
  "    <Calendar\n" +
  "      date={value}\n" +
  "      isRangeMode='true'\n" +
  "      setDateToInput={(date) => {\n" +
  "        setValue(date);\n" +
  "      }}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
