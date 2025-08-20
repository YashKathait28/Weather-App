import "./App.css";
import { Search, MapPin, Wind } from "react-feather";
import getWeather from "./API/api";
import { useState } from "react";
import dateFormat from "dateformat";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);

    if (weatherData.cod === "404") {
      setWeatherData(""); // if wrong city
      alert("City not found! Please enter a valid city name.");
    } else {
      setWeatherData(weatherData); // if success
    }
  };

  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");
  };

  return (
    <div className="app">
      <h1>Weather app</h1>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          onKeyDown={(e) => e.key === "Enter" && getWeatherByCity()}
          autoFocus
        />
        <button onClick={() => getWeatherByCity()}>
          <Search></Search>
        </button>
      </div>

      {weatherData && weatherData.weather && (
        <div className="content">
          <div
            className="location"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <MapPin></MapPin>
            <h2 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {weatherData.name}
              <span style={{ fontSize: "0.6em", fontWeight: "normal" }}>
                ({weatherData.sys.country})
              </span>
            </h2>
          </div>
          <p className="datatext">{renderDate()}</p>

          <div className="weatherdesc d-flex flex-c">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
            <h3>{weatherData.weather[0].description}</h3>
          </div>

          <div className="tempstats d-flex flex-c">
            <h1>
              {weatherData.main.temp}
              <span>&deg;C</span>
            </h1>
            <h3>
              Feels like {weatherData.main.feels_like}
              <span>&deg;C</span>
            </h3>
          </div>

          <div className="windstats">
            <wind></wind>
            <h3>
              Wind is {weatherData.wind.speed} knots in {weatherData.wind.deg}
              &deg;
            </h3>
          </div>
        </div>
      )}

      {!weatherData.weather && (
        <div className="content">
          <h4>No Data Found!</h4>
        </div>
      )}

      {/* <p>{JSON.stringify(weather)}</p> */}
    </div>
  );
}

export default App;
