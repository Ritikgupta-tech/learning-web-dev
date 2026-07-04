import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.43,
    temp: 25.05,
    tempMin: 22.5,
    tempMax: 27.8,
    humidity: 65,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by KIPM</h2>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}