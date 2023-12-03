import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "833a46b69e94e5705dc61b3c66d24f97";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>{" "}
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">32º</span>
            <span className="WeatherForecast-temperature-min">16º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
