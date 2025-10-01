import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="flex flex-col items-center w-full">
      <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
