const express = require('express')
const fetch = require('node-fetch')

const app = express()
const PORT = process.env.PORT || 3000
 
//Hosting index page
app.use(express.static("landing-page"))
app.get('/', (req,res) =>{
 res.sendFile('index.html', {root: __dirname + '/landing-pages'});
});
 
//Listening for get requests
 app.get('/api/v1/weatherbyZip', (req, res) => { 
 //Make sure they sent the required zip code
 if(!req.query.zip){res.send("NO DATA SUMBITTED")}
 //Getting setup to send get request
 const api_url = "https://api.openweathermap.org/data/2.5/weather?zip=";
 const appid = "&units=imperial&appid="+process.env.OpenWeatherAPIKey;
 fetch(api_url + req.query.zip + appid)
  //take the response and convert to json 
  .then(res => res.json())
  //Using that json console.log the result 
  .then(json => {
      console.log(json);
      //Send json object back as the response to the original get request
      res.send(json);
  })
});
 

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
});
 
