function test2(val) {
    return new Promise(function(resolve, reject) {
        if(val===1)
        {
            console.log("Hello world from test function 2")
            resolve(1)
        }
        else
        {
            reject("Error occured in test function 2")
        }
        
    })
}
function test(val) {
    
    return new Promise(function(resolve, reject){
        if(val==1)
        {
            console.log("Hello world from test func")
            resolve(1)
        }
        else
        {
            reject("Error occured in test function")
        }
        
    });
}

function test3(val) {
    
    return new Promise(function(resolve, reject){
        if(val==1)
        {
            console.log("Hello world from test func 3")
            resolve(2)
        }
        else
        {
            reject("Error occured in test function 3 value from previous call " +  val)
        }
        
    });
}

test(1).then(test2).then(test3).then(test3).catch(err=>{
    console.log(err)
})