import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTempeture() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTempeture() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTempeture()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTempeture()}
        </span>
      </div>
    </div>
  );
}
