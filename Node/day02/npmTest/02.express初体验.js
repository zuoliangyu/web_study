import express from 'express'
const server = express()
server.get('/api/province',(req,res)=>{
    res.send({
        username:'QQ',
        age:22
    })
})
server.listen(6577)