function myAxios(obj){
    //返回一个Promise对象
    return new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest()
        // xhr.open(obj.method || 'get',obj.url)
        if(!obj.url){
            reject(new Error('必须配置请求地址'))
        }
        if(obj.params){
            let mySearch = new URLSearchParams(obj.params)
            let str = mySearch.toString()
            xhr.open(obj.method || 'get',obj.url + '?' + str)
        }else{
            xhr.open(obj.method || 'get',obj.url)
        }
        //post请求需要设置请求头，把参数转换成json格式的字符串并通过send方法传递参数
        if(obj.method === 'post' || obj.method === 'put' || obj.method === 'patch'){
            xhr.setRequestHeader('Content-Type','application/json')
            let dataStr = obj.data && JSON.stringify(obj.data)
            if(dataStr){
                xhr.send(dataStr)
            }else{
                xhr.send()
            }
        }else{
            xhr.send()
        }
        // xhr.send()
        xhr.addEventListener('loadend',function(){
            if(xhr.status >=200 && xhr.status <300){
                const result = JSON.parse( xhr.responseText )
                resolve(result)
            }else{
                reject(new Error(xhr.response))
            }
        })
    })
}