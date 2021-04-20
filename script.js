const express = require('express')
const https = require('https')
const fetch = require('node-fetch')

const app = express()
const PORT = process.env.PORT || 3000

async function getData(zipCode){
 

app.use(express.static("landing-page"))

app.get('/', (req,res) =>{
 res.sendFile('index.html', {root: __dirname + '/landing-pages'});
 
});
app.get('/api/v1/weatherbyZip', (req, res) => { 
 if(!req.query.zip){res.send("NO DATA SUMBITTED")}
 
 const api_url = "https://api.openweathermap.org/data/2.5/weather?zip=";
 const appid = "&units=imperial&appid=6ceb02706b07605db27fb252a1bf8521";
 fetch(api_url + res.query.zip + appid)
   .then(res => res.json())
   .then(json => {
      console.log(json);
      res.send(json)
  }
});
 
 console.log("THIS DATA -->" + getData(req.query.zip))
res.send("Is this Getting Sent?")
});

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
})
 
