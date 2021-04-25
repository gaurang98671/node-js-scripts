const { cpuUsage } = require('process')
const util = require('util')

const foo =()=>console.log("foo")
const bar =()=>console.log("bar")
const f = util.promisify(foo)

f()
bar()

