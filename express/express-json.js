const { json } = require('express');
const express = require('express')

const app = express();
var arr =[{
    name: 'gaurang',
    lastName : 'pawar'
},
{
    name: 'abc',
    lastName: 'xyz'
}
]
app.get('/',(req, res)=>{
    res.send("<html><a href='/users'>Users</a></html>")
})

app.get('/map/users', (req, res)=>{
    const newUsers = arr.map((product)=>{
        const {name} = product
        return {name}
    })
    res.json(newUsers)
})

app.get('/find/user/:userName', (req, res)=>{
    const {userName} = req.params
    const user = arr.find((user)=> user.name=== userName)
    
    if(!user){
        return res.send("User does not exists")
    }
    return res.json(user)
})

app.get('/query',(req, res)=>{
    const {query} = req.query
    let sortedUsers= [...arr]
    sortedUsers = arr.filter((user)=>{
        return user.name.startsWith(query)
    })


    res.json(sortedUsers)
})

app.get('/limit', (req, res)=>{
    const { limit } = req.query
    res.json(arr.slice(0, limit))
})
app.listen(5000, ()=>{
    console.log("Listening on 5000...")
})