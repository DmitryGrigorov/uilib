export default "const RowStyled = styled.div`" +
  " display: flex;\n" +
  " flex-direction: column;\n" +
  " gap: 16px;\n" +
  "`;\n" +
  "const App: React.FC = () => (\n" +
  "  <RowStyled>\n" +
  "    <FileCard fileName='Image' fileExtension='png' />\n" +
  "    <FileCard\n" +
  "      style={{ maxWidth: '271px' }}\n" +
  "      fileName='Your file name is too long to fit here'\n" +
  "      fileExtension='ddd'\n" +
  "    />\n" +
  "  </RowStyled>\n" +
  ");\n" +
  "\n" +
  "render(<App />);";
