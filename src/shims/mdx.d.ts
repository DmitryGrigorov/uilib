declare module "*.mdx" {
  const MDXComponent: React.ComponentType<Record<string, unknown>>;

  export default MDXComponent;
}
