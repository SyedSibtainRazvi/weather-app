import React, { useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/weather/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setWeather(response.weather);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <p>WeatherU</p>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p> {weather.name}</p>
          </div>
          <div className="temp">
            {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {weather.weather ? (
              <p className="bold">{weather.weather[0].main}</p>
            ) : null}
          </div>
        </div>

        {weather.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {weather.main ? (
                <p className="bold">{weather.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Minimum</p>
            </div>
            <div className="humidity">
              {weather.main ? (
                <p className="bold">{weather.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weather.wind ? (
                <p className="bold">{weather.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
