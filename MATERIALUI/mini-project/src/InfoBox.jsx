import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"
export default function InfoBox({info}) {
 

  return (
    <div className="InfoBox">
      
<div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}
          image="https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
          </Typography>

          <Typography variant="body1">
            🌡 Temperature: {info.temp}°C
          </Typography>

          <Typography variant="body1">
            🤗 Feels Like: {info.feelsLike}°C
          </Typography>

          <Typography variant="body1">
            ⬇ Min Temp: {info.tempMin}°C
          </Typography>

          <Typography variant="body1">
            ⬆ Max Temp: {info.tempMax}°C
          </Typography>

          <Typography variant="body1">
            💧 Humidity: {info.humidity}%
          </Typography>

          <Typography variant="body1">
            ☁ Weather: {info.weather}
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}