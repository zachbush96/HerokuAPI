const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
 return res.send("WERE HERE!")
  
});

app.listen(PORT, () => {
  console.log("Listending on port " + PORT)
});
 
