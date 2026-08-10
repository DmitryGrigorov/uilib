module.exports = {
  extends: ["stylelint-config-recommended"],
  rules: {
    "font-family-no-missing-generic-family-keyword": null,
    "selector-type-no-unknown": null,
    "no-descending-specificity": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "no-empty-source": null
  },
  customSyntax: "postcss-styled-syntax"
};
