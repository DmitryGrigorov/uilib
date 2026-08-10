export default "const App = () => {\n" +
  "  const handleBannerShow = (): void => {\n" +
  "    bannerShow({\n" +
  "      status: 'info',\n" +
  "      isIcon: true,\n" +
  "      title: 'Weak internet connection',\n" +
  "      message:\n" +
  "        'Your internet signal is weak, which may cause an unstable connection.',\n" +
  "      secondaryButton: {\n" +
  "        title: 'Secondary action',\n" +
  "      },\n" +
  "      type: 'overlay'\n" +
  "    });\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <Button viewType='primary' onClick={handleBannerShow}>\n" +
  "      Open banner\n" +
  "    </Button>\n" +
  "  );\n" +
  "};\n" +
  "render(<App />)";
