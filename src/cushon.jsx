import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import ReactDOM from "react-dom/client";
import Dashboard from "./ui/dashboard";
import reduxstore from "./state/store";

const rootElement = document.getElementById("cushon-root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ReduxProvider store={reduxstore}>
      <Dashboard />
    </ReduxProvider>
  </React.StrictMode>
);
