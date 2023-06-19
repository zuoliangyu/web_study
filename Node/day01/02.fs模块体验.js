const fs = require('fs')
fs.readFile('./1.txt',(err,data) =>{
    console.log(data.toString())
})
fs.writeFile('./1.txt','how are you',err=>{
    console.log(err)
})