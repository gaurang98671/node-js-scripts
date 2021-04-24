var first = ()=>console.log("First")
var second = ()=>console.log("Second")
var third = ()=>console.log("Third")

first()
setTimeout(second, 1000)
second()
third()