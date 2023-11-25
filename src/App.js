import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This projected was coded by{" "}
          <a
            href="https://precious-zabaione-7d1d9f.netlify.app/about"
            target="_blank"
            rel="noreferrer"
          >
            Palesa Masiteng{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/PalesaMas/incredible-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
