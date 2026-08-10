# Overview

UI Lib is a design system with a distinctive orange brand theme.<br>
The principles behind the library reflect the rules we followed while building it.

1. Simplicity: We aim to make every product interaction intuitive.
2. Responsiveness: The interface should stay in conversation with users, answer their questions, and guide them toward the right next step.
3. Efficiency: Functionality takes priority over decoration.
4. Evolution: We improve the design system every day.

Components are styled with <a href="https://styled-components.com/">`styled-components`</a>.

# Browser support

| <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox </center> | <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome </center> | <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari </center> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Latest 2 versions                                                                                                                                                                                                                   | Latest 2 versions                                                                                                                                                                                                               | Latest 2 versions                                                                                                                                                                                                               |

# Quick start

## Installation

npm: <br>
`npm i @dmitrygrigorov/components`

yarn: <br>
`yarn add @dmitrygrigorov/components`

## Adding styles and fonts

<br>
Choose one of the following ways to include the styles.
### Importing styles at the project root

```
import React from "react";
import "@dmitrygrigorov/components/styles/index.css";

const App: React.FC = () => (
  <div>
     <...>
  </div>
)
```

### Importing from a stylesheet

```
@import "~@dmitrygrigorov/components/styles/index.css";
```

## Using components

```
import { Button } from "@dmitrygrigorov/components";

  <...>
    <Button viewType="primary">Button</Button>
  <...>
```

# Icons

To use icons, install <a href="https://www.npmjs.com/package/@dmitrygrigorov/icons">`@dmitrygrigorov/icons`</a> in your project.

## Installation

`npm i --save @dmitrygrigorov/icons`

# Theming

The library supports component theming. Components use variables defined by the default theme (`import { LIGHT_THEME } from '@dmitrygrigorov/components';`). Override those values to change component appearance. The theming mechanism is based on styled-components.

To add theming to your project:

1. Create a theme with `createTheme`. Pass an object containing the properties you want to override; `createTheme` merges those options with the default theme.
2. Import `ThemeProvider` from `@dmitrygrigorov/components` or `styled-components`. Wrap a single component or an entire application section to apply the theme to every nested component.
3. Pass the result of `createTheme` to the `theme` prop on `ThemeProvider`.

Read more about theming at https://styled-components.com/docs/advanced. Theme providers can also be nested.

Theming example:

```
import { ThemeProvider, createTheme, Button } from '@dmitrygrigorov/components';

 render (
  <ThemeProvider theme={createTheme({ borderWidth: '4px', shape: { borderRadiusSmall: '5px' } })}>
  <Button view="rounded">Hello</Button>
  </ThemeProvider>
 );
```
