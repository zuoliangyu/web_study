import check from '@/utils/check.js'
console.log(check)
import '@/css/index.css'
import '@/less/index.less'
//引入图片
import logo from '@/assets/logo.png'
import axios from 'axios'
import test from '@/utils/test.js'
document.querySelector('.logo-img').src = logo

document.querySelector('.login-btn').addEventListener('click',function(){
    // alert('注册了点击事件')
    const username = document.querySelector('.username').value.trim()
    const password = document.querySelector('.password').value.trim()
    if(!check.checkUserName(username)){
        return alert('您输入的用户名长度不足8位')
    }
    if(!check.checkPassWord(password)){
        return alert('您输入的密码长度不足6位')
    }
    axios({
        url:'http://hmajax.itheima.net/api/register',
        method:'post',
        data:{
            username,
            password
        }
    }).then(
        alert('注册成功')
    ).catch(
        alert('注册失败')
    )
})
const arr = [1,2,3]
const res = arr.map(item => item*item)
console.log(res)

