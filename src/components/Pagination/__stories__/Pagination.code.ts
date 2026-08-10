export default "const App: React.FC = () => {\n" +
  "  const [currentPage, setCurrentPage] = React.useState(1);\n" +
  "  return (\n" +
  "    <Pagination\n" +
  "      totalPages={100}\n" +
  "      currentPage={currentPage}\n" +
  "      onPageChange={setCurrentPage}\n" +
  "      isShowSwitchers\n" +
  "      switcherTextPrev='Prev.'\n" +
  "      switcherTextNext='Next'\n" +
  "      isShowConfig\n" +
  "      isShowGoToPage\n" +
  "      paginationConf={{\n" +
  "        itemsPerPage: [" +
  "          { label: '100', value: 100 }," +
  "          { label: '200', value: 200 }," +
  "        ]" +
  "      }}\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
