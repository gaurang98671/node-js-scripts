const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end("Home page")
    }
    if(req.url==='/about'){
        res.end("About page")
    }
    else{
        res.end(
            '<h1>404 not found</h1>')
    }
})

server.listen(8080)