const { userInfo } = require('os');
const { cpuUsage } = require('process');
const util = require('util');

const test_callback = function (val){
   
    return new Promise((resolve, reject)=>{
        for(var i=0; i<1000; i++){
            for(var j=0; j<1000; j++)
            {
                var a
            }
        }
        resolve("hello")
    }) 
}

const test_method = (callback) => {
   
    testMethodAsync().then((val)=>console.log(val))
}

const promisify_test_method = util.promisify(test_method)
const foo = ()=> console.log('foo')

const start = async()=>{
    test_callback(1).then((val)=>console.log(val))
    foo()
}

const testMethodAsync = ()=>{
    return new Promise((resolve, reject)=>{
        resolve("helllo world")
    });
}
test_method()