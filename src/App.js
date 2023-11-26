import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by{" "}
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
            open-sourced on Github.{" "}
          </a>{" "}
          Hosted on{" "}
          <a
            href="https://idyllic-kitten-60c143.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
