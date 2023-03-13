import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/main.css";

import { Login } from "./pages";
import { Link } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);
