const { json } = require('express');
const express = require('express')
const {logger, logger2} = require('./middlewares')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.get('/', (req, res)=>{
    res.send("welcome")
})
app.post('/data', (req, res)=>{ 
    console.log(req.body)
    res.send("Hello")
})




app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})