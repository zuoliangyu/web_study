/**
 * 需求：在这段代码的基础上，把 index.css 代码打包进同一个 dist/index.html 网页中并运行
 * 提示：css 包上 style 标签插入到 html 网页最后也可以运行
 */
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  const htmlStr = data.toString()
  const resultStr = htmlStr.replace(/[\r\n]/g, '')

  fs.readFile(path.join(__dirname, 'public', 'index.js'), (err, data) => {
    const jsStr = data.toString()
    const jsResultStr = jsStr.replace(/[\r\n]/g, '').replace(/console.log\('.+?'\);/g, '')
    const result = `<script>${jsResultStr}</script>`

    fs.readFile(path.join(__dirname, 'public', 'index.css'), (err, data) => {
      const cssStr = data.toString()
      const cssResultStr = cssStr.replace(/[\r\n]/g, '')
      const cssResult = `<style>${cssResultStr}</style>`

      fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr + result + cssResult, err => {
        if (err) console.log(err)
        else console.log('压缩成功')
      })
    })
  })
})