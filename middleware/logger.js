const express = require('express')

const app = express()

const logger = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const date = new Date().getTime()
    console.log(method, url, date)
    next()
}

app.get('/', logger,(req, res)=>{
    res.send("Home page")
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})