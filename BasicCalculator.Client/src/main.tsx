import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col items-center w-full">
      <App />
    </div>
    
  </React.StrictMode>
);
