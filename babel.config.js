module.exports = {
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "displayName": true
      }
    ]
  ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
