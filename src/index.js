import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";


const root = createRoot(window.bodyTag);
root.render(
  <>
    <main>
      <App />
    </main >
  </>
)

