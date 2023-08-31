import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootEl = document.getElementById("app") as HTMLDivElement;
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
