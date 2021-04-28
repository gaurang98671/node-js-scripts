const express = require('express')
const basic = require('./routes/routers')
const app = express()

app.use('/api', basic)

app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})