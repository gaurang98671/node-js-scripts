const express = require('express');
const app = express()

//app.get
app.get('/', (req, res)=>{
    res.end("Home page")
})

app.get("/about", (req, res)=>{
    res.end("About page")
})

app.get('/greet', (req, res)=>{
    
        res.send("Hello")
    
})
//app.all
app.all("*", (req, res)=>{
    res.send("404")
})

//app.post

//app.put

//app.delete

//app.delete

//app.use

//app.listen


app.listen(5000, ()=>{
    console.log("Listening on port 5000...")
})