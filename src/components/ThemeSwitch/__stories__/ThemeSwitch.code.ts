export default "const App: React.FC = () => {\n" +
  "  const [theme, setTheme] = React.useState('light');\n" +
  "  const handleChange = (): void => {\n" +
  "    setTheme(theme === 'light' ? 'dark' : 'light');\n" +
  "  };\n" +
  "\n" +
  "  return <ThemeSwitch themeSelected={theme} onChange={handleChange} />;\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
