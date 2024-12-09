import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);
root.render(
  <React.StrictMode>
    <Duster />{" "}
  </React.StrictMode>,
);

function Duster() {
  return (
    <h1 className="cursor-pointer text-3xl font-bold text-zinc-900 underline hover:text-red-700 md:text-4xl">
      I am a duster
    </h1>
  );
}
