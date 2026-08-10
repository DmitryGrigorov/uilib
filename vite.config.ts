import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development";

  return {
    plugins: [
      nodePolyfills({
        include: ["fs"]
      }),
      isDevelopment
        ? react({
            plugins: [["@swc/plugin-styled-components", { displayName: true }]]
          })
        : react()
    ],
    assetsInclude: ["/sb-preview/runtime.js"],
    resolve: {
      alias: {
        "@dmitrygrigorov/components": path.resolve(__dirname, "./src/components"),
        "@dmitrygrigorov/icons": path.resolve(__dirname, "./src/icons")
      }
    },
    esbuild: {
      keepNames: true
    }
  };
});
