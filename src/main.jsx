import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CurrentUserContextProvider } from "./contexts/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </React.StrictMode>
);
