/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  const htmlStr = data.toString()
  const resultStr = htmlStr.replace(/[\r\n]/g, '')

  // 2.1 读取 public/index.js 内容
  fs.readFile(path.join(__dirname, 'public', 'index.js'), (err, data) => {
    const jsStr = data.toString()
    // 2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
    const jsResultStr = jsStr.replace(/[\r\n]/g, '').replace(/console.log\('.+?'\);/g, '')
    const result = `<script>${jsResultStr}</script>`
    console.log(result)

    // 2.3 确认后，拼接 html 内容写入到 dist/index.html 内
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr + result, err => {
      if (err) console.log(err)
      else console.log('压缩成功')
    })
  })


})