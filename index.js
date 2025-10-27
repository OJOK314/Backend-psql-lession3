const express = require('express')


// use it
const app = express()

app.get('/', (req,res) =>{
    res.send("welcome to this API service")
})

const PORT = 5005;

app.listen(PORT, (req,res) =>{
    console.log(`server listening on PORT http://localhost:${PORT}`)
})