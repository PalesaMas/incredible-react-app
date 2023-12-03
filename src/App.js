import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather-app-wrapper">
          <Weather defaultCity="Johannesburg" />
        </div>
        <footer>
          Coded by{" "}
          <a
            href="https://precious-zabaione-7d1d9f.netlify.app/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palesa Masiteng{" "}
          </a>
          using React and it's{" "}
          <a
            href="https://github.com/PalesaMas/incredible-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github.{" "}
          </a>{" "}
          Hosted on{" "}
          <a
            href="https://idyllic-kitten-60c143.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
