

var get_data = async function(data){
    console.log("Fetching data")
    console.log(data)
    for(var i=0; i<1000; i++){
        var a
    }
    return Error("Error")
    
}


get_data("First value").then((val)=>{
    get_data("second value")
}).catch((e)=>{
    console.log(e)
})
console.log("Done with fetchinf")
