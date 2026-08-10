export default "const App: React.FC = () => {\n" +
  "  const [isPressed, setIsPressed] = React.useState(false);\n" +
  "  const handleClick = (): void => {\n" +
  "    setIsPressed(!isPressed);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <Tag\n" +
  "      isClosable\n" +
  "      isStroke\n" +
  "      size='m'\n" +
  "      leadIcon={<IconSetting1 />}\n" +
  "      isPressed={isPressed}\n" +
  "      onClick={handleClick}>\n" +
  "      P2-l\n" +
  "    </Tag>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
