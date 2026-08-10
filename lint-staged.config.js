"use strict";

module.exports = {
  "src/**/*.{ts,tsx}": [
    "prettier --config ./prettier.config.js --write",
    "eslint --cache --ext .js,.jsx,.ts,.tsx"
  ],
  "src/**/styles.ts": "stylelint",
  ".*.js": "prettier --config ./prettier.config.js --write"
};
