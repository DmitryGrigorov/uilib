export default "const FooterWrapper = styled.div`\n" +
  "  display: flex;\n" +
  "  align-items: center;\n" +
  "  justify-content: space-between;\n" +
  "  color: ${({ theme }) => theme.colors.neutral12};" +
  "\n" +
  "  .buttons {\n" +
  "    margin-left: 12px;\n" +
  "    display: flex;\n" +
  "    gap: 16px;\n" +
  "\n" +
  "  }\n" +
  "\n" +
  "  .header {\n" +
  "    display: flex;\n" +
  "  }\n" +
  "\n" +
  "  .icon {\n" +
  "    margin-right: 16px;\n" +
  "  }\n" +
  "`;\n" +
  "\n" +
  "const Footer: React.FC = () => (\n" +
  "  <FooterWrapper>\n" +
  "    <div className='header'>\n" +
  "      <H type='capricornus'>Save changes?</H>\n" +
  "    </div>\n" +
  "    <div className='buttons'>\n" +
  "      <Button size='s' viewType='secondary'>\n" +
  "        No\n" +
  "      </Button>\n" +
  "      <Button size='s'>Yes</Button>\n" +
  "    </div>\n" +
  "  </FooterWrapper>\n" +
  ");\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  const [isOpenRoll, setIsOpenRoll] = React.useState(false);\n" +
  "\n" +
  "  const handleClick = (): void => {\n" +
  "    setIsOpenRoll((prevState) => !prevState);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <Roll\n" +
  "      titleHeader='H-s'\n" +
  "      subTitleHeader='P2-l'\n" +
  "      mainContent={<div>main content</div>}\n" +
  "      rollContent={<div>roll content</div>}\n" +
  "      titleSubHeader='P1-s'\n" +
  "      statusSubHeader='info'\n" +
  "      labelSubHeader='Focused label'\n" +
  "      isIconStatusSubHeader\n" +
  "      footer={<Footer />}\n" +
  "      isOpenRoll={isOpenRoll}\n" +
  "      trailContentHeader={\n" +
  "        <Button icon={<IconSetting1 />} size='s' onClick={handleClick} />\n" +
  "      }\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
