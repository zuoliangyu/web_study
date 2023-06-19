/**
 * 目标：基于 Web 服务，开发-城市列表数据接口
 * 步骤：
 *  1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
 *  2. 借助 querystring 模块的方法，格式化查询参数字符串
 *  3. 读取 city.json 城市数据，匹配省份名字下属城市列表
 *  4. 返回城市列表，启动 Web 服务测试
 */
const qs = require('querystring')
const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  // 省份列表接口
  if (req.url === '/api/province') {
    fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(data.toString())
    })
    // 1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
  } else if (req.url.startsWith('/api/city')) {
    // 城市列表接口
    // 2. 借助 querystring 模块的方法，格式化查询参数字符串
    // req.url: '/api/city?pname=辽宁省'
    // 以?分隔符分割，拿到'pname=辽宁省'查询参数字符串
    const str = req.url.split('?')[1]
    // 把查询参数字符串 转成 JS 对象结构
    const query = qs.parse(str)
    // 获取前端发来的省份名字
    const pname = query.name
    // 3. 读取 city.json 城市数据，匹配省份名字下属城市列表
    fs.readFile(path.join(__dirname, 'data/city.json'), (err, data) => {
      // 把 JSON 文件内对象格式字符串，转成对象结构
      const obj = JSON.parse(data.toString())
      // 省份名字作为 key，去obj对象里取到对应城市列表 value 值
      const cityList = obj[pname]
      // 4. 返回城市列表，启动 Web 服务测试
      // 响应的是 JSON 字符串内容
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify(cityList))
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('你要访问的资源路径不存在')
  }
})
server.listen(3000, () => {
  console.log('Web 服务启动了')
})
