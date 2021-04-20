const express = require('express')
const https = require('https')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("landing-page"))

app.get('/', (req,res) =>{
 res.sendFile('index.html', {root: __dirname + '/landing-pages'});
 
});
app.get('/api/v1/weatherbyZip', (req, res) => {
  weatherData = {} 
 if(!req.query.zip){res.send("NO DATA SUMBITTED")} 
 const api_url = "https://api.openweathermap.org/data/2.5/weather?zip=";
  const appid = "&units=imperial&appid=6ceb02706b07605db27fb252a1bf8521";
  const zipCode = req.query.zip
  const options = {
    hostname: 'api.openweathermap.org',
    port: 443,
    path: '/data/2.5/weather?zip=' + zipCode + appid,
    method: 'GET'
  }

  const req2 = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      weatherData = d
    })
  })

  req.on('error', error => {
    res.send("ERROR ENCOUNTERED")
  })

  req.end()
 
 
 return res.send(weatherData)
  
});

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
})
 
