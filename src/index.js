import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import StoreProvider from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

