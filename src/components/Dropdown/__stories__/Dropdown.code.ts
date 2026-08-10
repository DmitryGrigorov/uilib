export default "interface IItem {\n" +
  "  label: string;\n" +
  "  onClick?: () => void;\n" +
  "}\n" +
  "\n" +
  "const items: IItem[] = [\n" +
  "  {\n" +
  "    label: 'P1-1',\n" +
  "    isActive: false,\n" +
  "    onClick: () => alert('Clicked the first item')\n" +
  "  },\n" +
  "  {\n" +
  "    label: 'P1-2',\n" +
  "    isActive: true  },\n" +
  "  {\n" +
  "    label: 'P1-3',\n" +
  "    isActive: false\n" +
  "  }\n" +
  "];\n" +
  "\n" +
  "const App: React.FC = () => (\n" +
  "  <Dropdown \n" +
  "    items={items}\n" +
  "    getItemLeadContent={() => <IconSetting1 />}\n" +
  "    getItemDisabled={(item) => !item.isActive}\n" +
  "    onItemClick={() => alert('Clicked another item')}\n" +
  "    >\n" +
  "      <Button>Click</Button>\n" +
  "  </Dropdown>\n" +
  ");\n" +
  "\n" +
  "render(<App />)";
