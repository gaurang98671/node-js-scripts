const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){
    const stream = fs.createReadStream('./big-file.txt', 'utf-8');
    stream.on('open', ()=>{
        stream.pipe(res)
    })

    stream.on('error', ()=>{
        res.end('Error')
    })
    
    
}).listen(8080)
