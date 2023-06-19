/**
 * 目标：使用 fs 模块，读写文件内容
 * 语法：
 * 1. 引入 fs 模块
 * 2. 调用 writeFile 写入内容
 * 3. 调用 readFile  读取内容
 */
// 1. 引入 fs 模块
const fs = require('fs')
// 2. 调用 writeFile 写入内容
// 注意：建议写入字符串内容，会覆盖目标文件所有内容
fs.writeFile('./text.txt', '欢迎使用 fs 模块读写文件内容', err => {
  if (err) console.log(err)
  else console.log('写入成功')
})
// 3. 调用 readFile  读取内容
fs.readFile('./text.txt', (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString()) // 把 Buffer 数据流转成字符串类型
})