const {readFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)

const start = async()=>{
    const first = await readFilePromise("./test.txt", 'utf-8')
    console.log(first)
    console.log("Hello world")
}

start()