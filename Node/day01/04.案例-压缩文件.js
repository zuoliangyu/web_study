const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'01.Promise.all()方法.html')
console.log(filePath)
fs.readFile(filePath,(err,data)=>{
    console.log(data.toString())
    let str = data.toString()
    str = str.replace(/[\r\n]/g,"")
    let newFilePath = path.join(__dirname,'newFile.html')
    fs.writeFile(newFilePath,str,err=>{
        console.log(err)
    })
})