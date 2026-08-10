export default "const SkeletonWrapper = styled.div`\n" +
  "display: flex;\n" +
  "flex-direction: column;\n" +
  "gap: 12px;\n" +
  "width: 100%;\n" +
  "`;\n" +
  "\n" +
  "const App: React.FC = () => {\n" +
  "  return (\n" +
  "    <SkeletonWrapper>\n" +
  "      <Skeleton type='smallText' width={210} rows={2} />\n" +
  "      <Skeleton type='circle' diameter={40} />\n" +
  "      <Skeleton type='rectangle' width={210} height={60} />\n" +
  "      <Skeleton type='rectangle' width={210} height={60} />\n" +
  "    </SkeletonWrapper>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "render(<App />);";
