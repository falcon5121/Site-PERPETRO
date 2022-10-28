import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./Global/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
