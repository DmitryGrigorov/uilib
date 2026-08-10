import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollStyle from "../components/Scroll";
import { App } from "./containers/App";
import "../styles/index.css";
import "../../node_modules/highlight.js/styles/github-dark.css";

const Root: React.FC = () => (
  <BrowserRouter>
    <ScrollStyle />
    <App />
  </BrowserRouter>
);

createRoot(document.getElementById("app") as Element).render(<Root />);
