const { userInfo } = require('os');
const util = require('util');

const test_callback = function (val, callback){
    console.log("Inside test_callback function")
    return new Promise((resolve, reject)=>{
        resolve("hello")
    })
  
}

const foo = ()=> console.log('foo')

test_callback(1)
foo()

