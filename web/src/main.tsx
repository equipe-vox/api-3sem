import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/main.css";

import { Login } from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
