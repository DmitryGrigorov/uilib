export default "const ITEMS_FOR_USE_EXAMPLE = [\n" +
  "  { key: 1, title: 'Step 1', description: 'P2-l-1' },\n" +
  "  { key: 2, title: 'Step 2', description: 'P2-l-2' },\n" +
  "  { key: 3, title: 'Step 3', description: 'P2-l-3' },\n" +
  "  { key: 4, title: 'Step 4', description: 'P2-l-4' },\n" +
  "  { key: 5, title: 'Step 5', description: 'P2-l-5' }\n" +
  "] as IStepsItem[];\n" +
  "\n" +
  "const generateKey = (step: IStepsItem): string =>\n" +
  "  step.key + new Date().getTime().toString();\n" +
  "\n" +
  "const App: React.FC = () => (\n" +
  "  <Steps\n" +
  "    width='900px'\n" +
  "    getItemKey={generateKey}\n" +
  "    style={{ margin: '20px 0' }}\n" +
  "    size='l'\n" +
  "    direction='vertical'\n" +
  "    steps={ITEMS_FOR_USE_EXAMPLE}\n" +
  "    current={3}\n" +
  "  />\n" +
  ");\n" +
  "\n" +
  "render(<App />);";
