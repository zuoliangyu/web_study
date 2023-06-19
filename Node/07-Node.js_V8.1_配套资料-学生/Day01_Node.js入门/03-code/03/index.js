/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */
const fs = require('fs')
console.log(__dirname) // D:\备课代码\2_node_3天\Node_代码\Day01_Node.js入门\代码\03

// 1. 加载 path 模块
const path = require('path')
// 2. 使用 path.join() 来拼接路径
const pathStr = path.join(__dirname, '..', 'text.txt')
console.log(pathStr)

fs.readFile(pathStr, (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})
