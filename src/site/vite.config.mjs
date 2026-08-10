import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import mdxContainersPlugin from "../../configs/mdxPlugins/containersPlugin.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  const config = {
    plugins: [
      mdx({ remarkPlugins: [remarkDirective, mdxContainersPlugin, remarkGfm] }),
      nodePolyfills({
        include: ["process"]
      }),
      svgr(),
      react({
        babel: {
          plugins: [["babel-plugin-styled-components", { displayName: true }]]
        }
      }),
      tsconfigPaths()
    ],
    server: {
      historyApiFallback: true,
      port: 41001
    },
    build: {
      outDir: path.resolve(__dirname, "../../build-site"),
      emptyOutDir: true,
      chunkSizeWarningLimit: 300,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/react-dom") ||
              id.includes("node_modules/react/")
            ) {
              return "react";
            }
            if (id.includes("node_modules/styled-components")) {
              return "styled-components";
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        "@dmitrygrigorov/components": path.resolve(__dirname, "../components"),
        "@dmitrygrigorov/icons": path.resolve(__dirname, "../icons")
      }
    }
  };

  return config;
});
