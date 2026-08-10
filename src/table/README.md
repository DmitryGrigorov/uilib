# Overview

UI Lib is a design system with an orange brand theme.<br>
The following principles guide its development:

1. Simplicity: interactions should feel intuitive.
2. Responsiveness: the interface should answer questions and guide users toward the right action.
3. Efficiency: functionality takes priority over decoration.
4. Evolution: the design system improves continuously.

Components are styled with <a href="https://styled-components.com/">`styled-components`</a>.

# Browser support

| <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox </center> | <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome </center> | <center>[<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari </center> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Latest 2 versions                                                                                                                                                                                                                   | Latest 2 versions                                                                                                                                                                                                               | Latest 2 versions                                                                                                                                                                                                               |

# Quick start

The table uses components and icons from `@dmitrygrigorov/components` and `@dmitrygrigorov/icons`. Install these packages alongside the table package.

### Install the packages

#### NPM

`npm i @dmitrygrigorov/table @dmitrygrigorov/components @dmitrygrigorov/icons`

#### YARN

`yarn add @dmitrygrigorov/table @dmitrygrigorov/components @dmitrygrigorov/icons`

### Include styles and fonts

Choose one of the following ways to include the styles.

#### Import them at the project root

```tsx
import React from "react";
import "@dmitrygrigorov/components/styles/index.css";
```

#### Import them from a stylesheet

```css
@import "~@dmitrygrigorov/components/styles/index.css";
```

### Quick-start example

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import Table from "@dmitrygrigorov/table";

const App = () => {
  const column = [{ field: "make" }, { field: "model" }, { field: "price" }];

  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ];

  return <Table column={column} rowData={rowData} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```
