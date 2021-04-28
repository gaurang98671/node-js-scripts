//Can be used for JWT token authorization
//Decrypting cookies
//Check data in cache

const authorizer = (req, res, next)=>{
    const {userName} = req.query
    if(userName==='gaurang'){
        req.user = {'userName': 'gaurang', 'id': 2}
        next()
    }
    else{
        res.status(401).send("Unauthorized request")
    }
}


module.exports = authorizer