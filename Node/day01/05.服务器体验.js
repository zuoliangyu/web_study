//引入http
const http = require('http')
//创建服务器对象
const server = http.createServer()
//监听浏览器的请求，当浏览器发送请求给服务器的时候，给与响应
server.on('request',(req,res) =>{
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('小鹿的服务器')
})
//在特定端口开启服务器
server.listen(8888)