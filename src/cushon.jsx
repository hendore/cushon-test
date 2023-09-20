import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import ReactDOM from "react-dom/client";
import Dashboard from "@cushon/ui/dashboard";
import reduxstore from "@cushon/state/store";

const rootElement = document.getElementById("cushon-root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ReduxProvider store={reduxstore}>
      <Dashboard />
    </ReduxProvider>
  </React.StrictMode>
);
