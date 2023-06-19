const fs = require('fs')
const path = require('path')
const http = require('http')
//创建服务器
const server = http.createServer()
server.on('request',(req,res) =>{
    res.setHeader('Content-Type','application/json;charset=utf-8')
    console.log(req.url)
    if(req.url === '/api/province'){
       const filePath = path.join(__dirname,'data','province.json') 
       fs.readFile(filePath,(error,data) =>{
        res.end(data)
       })

    }else if(req.url.startwith('/api/city')){
        
    }
})
server.listen(6577)