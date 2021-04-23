const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./test1.txt', 'utf8');

console.log(first)

const second = writeFileSync('./test.txt', "Hello worldddd",'utf8');

