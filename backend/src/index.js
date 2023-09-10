//entry
const express = require("express");

const app = express();


const HOST = '0.0.0.0' 
const PORT =8008

app.get('/', (req, res)=>{
    res.send("hi");
})

app.listen(PORT,HOST)
console.log(`http://localhost:${PORT}`)
