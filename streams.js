const { createReadStream } = require('fs')

const stream = createReadStream('./big-file.txt', 'utf-8');

stream.on('data', (data)=>{
    console.log(data)
})