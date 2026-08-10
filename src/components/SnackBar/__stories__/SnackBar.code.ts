export default "const Page: React.FC = () => {\n" +
  "  const [openSnackBar, closeSnackBar] = useSnackBar();\n" +
  "  const onOpenSnackBar = (): void => {\n" +
  "    const key = openSnackBar({\n" +
  "      message: 'Message',\n" +
  "      duration: 5000\n" +
  "    });\n" +
  "  };\n" +
  "  return (\n" +
  "    <Button typeColor='primary' onClick={onOpenSnackBar}>\n" +
  "      Click here\n" +
  "    </Button>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "const App: React.FC = () => (\n" +
  "  <SnackBarProvider>\n" +
  "    <Page />\n" +
  "  </SnackBarProvider>\n" +
  ");\n" +
  "\n" +
  "render(<App />);";
