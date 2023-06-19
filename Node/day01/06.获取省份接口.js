const fs = require('fs')
const path = require('path')
const http = require('http')
//创建服务器
const server = http.createServer()
//服务器对象要监听浏览器的请求
server.on('request',(req,res) =>{
    //设置兼容中文的编码
    res.setHeader('Content-Type',"application/json;charset=utf-8")
    console.log(req.url)
    res.end('xiaolu')
    if(req.url === '/api/province'){
        const filePath = path.join(__dirname,'data','province.json')
        fs.readFile(filePath,(err,data) =>{
            res.end(data)
        })
    }else{
        res.end('its ok')
    }
})
server.listen(6577)