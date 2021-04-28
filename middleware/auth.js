const authorizer = (req, res, next)=>{
    const {userName} = req.query
    if(userName==='gaurang'){
        next()
    }
    else{
        res.status(401).send("Unauthorized request")
    }
}

module.exports = authorizer