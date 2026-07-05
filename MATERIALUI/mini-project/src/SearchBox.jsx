import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "*";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );

      const data = await response.json();

      if (data.cod !== 200) {
        alert("City not found!");
        return;
      }

      const results = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].description,
        windSpeed: data.wind.speed,
      };

      console.log(results);
       return results;
    } catch (err) {
      console.log(err);
    }
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setCity("");
    let newinfo= await getWeatherInfo();
    updateInfo(newinfo);
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <br /> <br></br>
        <div>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
        &nbsp;
      </form>
    </div>
  );
}
