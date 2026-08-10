const path = require("path");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

module.exports = [
  {
    ignores: [
      "src/components_deprecated/*",
      "src/entities_deprecated/*",
      "src/pages_deprecated/*",
      "src/mocks_deprecated/*",
      "src/vendor/*",
      "configs/**",
      "babel.config.js",
      "release.config.js",
      "src/*/release.config.js",
      "analyzeCommits.js",
      "src/site/build/script.js",
      "src/modules/Reports/helpers/*",
      "packages/**",
      "node_modules/**",
      "build/**",
      "publish-*/**",
      "storybook-static/**",
      "build-site/**",
      "src/table/shims-jsx.d.ts",
      "src/icons/shims-jsx.d.ts"
    ]
  },
  ...compat.config(require("./packages/dotfiles/eslint-config")),
  ...compat.extends("plugin:storybook/recommended"),
  {
    rules: {
      "prefer-promise-reject-errors": "off",
      "@typescript-eslint/prefer-promise-reject-errors": "off"
    }
  },
  {
    files: [
      "**/__test__/**",
      "**/__tests__/**",
      "**/*.test.ts",
      "**/*.test.tsx"
    ],
    rules: {
      // Widespread pre-existing pattern: String(hexToRgb(...))/String(css`...`)
      // used in toHaveStyle assertions across many component test suites.
      "@typescript-eslint/no-base-to-string": "off"
    }
  },
  {
    files: ["src/table/__stories__/examples/**"],
    rules: {
      // Demo-only code: every example fetches its dataset with the same
      // `useEffect(() => { loadData(); }, [])` on-mount idiom.
      "react-hooks/set-state-in-effect": "off"
    }
  }
];
