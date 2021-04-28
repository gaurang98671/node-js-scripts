const express = require('express')
const {logger, logger2} = require('./middlewares')
const authorizer = require('./auth')

const app = express()
app.use(logger)
app.use(logger2)
app.use(authorizer)
app.get('/', (req, res)=>{
    res.send("Home page")
})


app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})