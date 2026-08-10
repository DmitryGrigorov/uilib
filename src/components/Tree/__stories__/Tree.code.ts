export default "const dataSource = [\n" +
  "  {\n" +
  "    id: '1',\n" +
  "    title: 'Heading-1',\n" +
  "    leadContent: <IconMoreCircle />,\n" +
  "    elements: [\n" +
  "      {\n" +
  "        id: '11',\n" +
  "        title: 'Heading-11',\n" +
  "        isDisabled: true,\n" +
  "        isOpened: true,\n" +
  "        elements: [{ id: '111', title: 'Heading 111' }]\n" +
  "      },\n" +
  "      { id: '12', title: 'Heading-12' }\n" +
  "    ]\n" +
  "  },\n" +
  "  {\n" +
  "    id: '2',\n" +
  "    title: 'Heading-2',\n" +
  "    leadContent: <IconMoreCircle />,\n" +
  "    elements: [\n" +
  "      {\n" +
  "        id: '21',\n" +
  "        title: 'Heading-21',\n" +
  "        elements: [{ id: '_211', title: 'Heading 211' }]\n" +
  "      },\n" +
  "      { id: '22', title: 'Heading-22' }\n" +
  "    ]\n" +
  "  }\n" +
  "];\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  return (\n" +
  "     <Tree\n" +
  "      dataSource={dataSource}\n" +
  "      isDragAllowed\n" +
  "      isEditAllowed></Tree>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
