const { writeFileSync } = require('fs')

for(let i=0; i<1000; i++){
    writeFileSync('./big-file.txt', "hello world \n", {flag: 'a'})
}
