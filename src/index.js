import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create root and render the app
const root = createRoot(rootElement);
root.render(app);
