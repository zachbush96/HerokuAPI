const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
 return res.send("WERE HERE!")
  
});
app.post('/api/v1/weatherbyZip', (req, res) => {
 const api_key = precess.env.OpenWeatherAPIKey;
 const zip_url = "api.openweathermap.org/data/2.5/weather?zip=";
 
 
 return res.send(weatherInfo)
  
});

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
})
 
