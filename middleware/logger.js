const express = require('express')
const {logger, logger2} = require('./middlewares')
const authorizer = require('./auth')

const app = express()
app.use(logger)
app.use(logger2)
app.use(authorizer)
app.get('/', (req, res)=>{
    const {userName, id} = req.user
    res.send("Hello "+ userName)

})


app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})