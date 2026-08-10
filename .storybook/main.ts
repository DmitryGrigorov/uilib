import type { StorybookConfig } from "@storybook/react-vite";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import mdxContainersPlugin from "../configs/mdxPlugins/containersPlugin.mjs";

const config: StorybookConfig = {
  stories: [
    // NOTE: Storybook 10 ships without an MDX story indexer (no package in
    // this dependency tree registers one), so *.stories.mdx files fail
    // story-index generation with "No matching indexer found". Scoped to
    // CSF (.stories.tsx/ts/js) until that's resolved upstream or the
    // remaining inline-MDX-story files are migrated to CSF + attached docs
    // (the pattern already used by every *.doc.mdx file, and by
    // docs/common/*.doc.mdx as of this change).
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm, remarkDirective, mdxContainersPlugin]
          }
        }
      }
    },
    "@storybook/addon-mcp"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    defaultName: "Documentation"
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    reactDocgen: false
  }
};

export default config;
