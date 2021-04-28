const express = require('express')
const logger = require('./middlewares')

const app = express()
app.use(logger)

app.get('/', (req, res)=>{
    res.send("Home page")
})


app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})