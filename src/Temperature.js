import React, { useState } from "react";
import "./Temperature.css";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function Temperature({ celsius, city, percentage, speed }) {
  let [temperature, setTemperature] = useState(celsius);
  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((celsius * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(celsius);
  }

  return (
    <div>
      <h2>Actually in {city} is </h2>
      <br />
      <h4>
        {temperature}
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
        <br />
        <br/>
        <Humidity percentage={percentage} />
        <Wind speed={speed} />
      </h4>
    </div>
  );
}
