/**
 * 目标：Web 服务支持中文字符
 * 问题：返回响应内容为，中文字符，浏览器无法正确显示
 * 原因：Web 服务没有设置响应头，指定说明内容类型和编码格式
 * 解决：设置响应头内容类型，让请求方能正确解析
 * 语法：res.setHeader('Content-Type', 'text/html;charset=utf-8')
 */

const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  res.end('你好，亲爱的世界') 
})
server.listen(3000, () => {
  console.log('Web 服务启动了')
})