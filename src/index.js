import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontext";
import { FilterProvider } from "./context/filtercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AppProvider>
);

