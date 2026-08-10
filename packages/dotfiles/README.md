# @dmitrygrigorov/dotfiles

---

Configuration files for JavaScript, TypeScript, and styled-components projects. The package includes:

- tsconfig
- prettier-config
- eslint-config
- stylelint-config

## Installation

---

```bash
npm i --save-dev @dmitrygrigorov/dotfiles
```

## Usage

---

1. Add the shared TypeScript configuration to your project’s `tsconfig.json`:

```json
{
  "extends": "@dmitrygrigorov/dotfiles/tsconfig"
}
```

2. Add the ESLint configuration to `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["./node_modules/@dmitrygrigorov/dotfiles/eslint-config"]
}
```

3. Use the Prettier configuration in `prettier.config.js`:

```js
module.exports = {
  ...require("@dmitrygrigorov/dotfiles/prettier-config")
};
```

4. Add the Stylelint configuration to `stylelint.config.js` or `.stylelintrc.json`:

```json
{
  "extends": ["@dmitrygrigorov/dotfiles/stylelint-config"]
}
```
