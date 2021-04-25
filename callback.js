const test_callback = function(value, callback) {
    console.log("Doing something")
    
    callback(value)
    
}

const foo = async ()=>{console.log("foo")}
const bar = async ()=>console.log("bar")
const baz = async ()=>console.log("baz")


test_callback(2, val=>{
    setTimeout(bar,10000)
    
    console.log("calling callback function")
    console.log(val)
})


foo()