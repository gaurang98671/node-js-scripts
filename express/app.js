const express = require('express');
const path = require('path');
const app = express()

app.use(express.static('./nav-bar'))
//app.get
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './nav-bar/index.html'))
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