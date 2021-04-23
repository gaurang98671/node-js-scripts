const {readFile, writeFile} = require('fs');

readFile("./test1.txt", 'utf8', (err, result)=>{
    if(err){
        console.log("Error")
        return
    }
    res = result
    console.log("Doing first read")

    readFile("./test.txt", 'utf8', (err, result)=>{
        if(err){
            console.log("Error")
            return
        }
        res2 = result
        console.log("Doing second read")
    })
})

console.log("Done with task")
console.log("Waiting for new task")