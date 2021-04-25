const { userInfo } = require('os');
const util = require('util');

const test_callback = function (val, callback){
   
    return new Promise((resolve, reject)=>{
        resolve("hello")
    })
  
}

const foo = ()=> console.log('foo')

test_callback(1).then((val)=>console.log(val))
foo()

