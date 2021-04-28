
const logger = (req, res, next)=>{
    const method = req.method
    const url = req.url
    const date = new Date().getTime()
    console.log(method, url, date)
    next()
}

const logger2 = (req, res, next)=>{
    console.log("Logger 2")
    
    next()
}

module.exports = {
    logger, 
    logger2
}