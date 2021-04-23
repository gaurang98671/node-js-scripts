const {readFile, writeFile} = require('fs');

readFile("./test1.txt", 'utf8', (err, result)=>{
    if(err){
        console.log("Error")
        return
    }
    console.log(result)
})