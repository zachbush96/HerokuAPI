const express = require('express')
const https = require('https')

const app = express()
const PORT = process.env.PORT || 3000

async function getData(zipCode){
 const api_url = "https://api.openweathermap.org/data/2.5/weather?zip=";
 const appid = "&units=imperial&appid=6ceb02706b07605db27fb252a1bf8521";
 const options = {
    hostname: 'api.openweathermap.org',
    port: 443,
    path: '/data/2.5/weather?zip=' + zipCode + appid,
    method: 'GET'
  }
  const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    return d
  })
})
req.on('error', error => {
  console.error(error)
})
req.end()
}

app.use(express.static("landing-page"))

app.get('/', (req,res) =>{
 res.sendFile('index.html', {root: __dirname + '/landing-pages'});
 
});
app.get('/api/v1/weatherbyZip', (req, res) => { 
 if(!req.query.zip){res.send("NO DATA SUMBITTED")}
 console.log("THIS DATA -->" + getData(req.query.zip))
 return res.send("Is this Getting Sent?")
});

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
})
 
