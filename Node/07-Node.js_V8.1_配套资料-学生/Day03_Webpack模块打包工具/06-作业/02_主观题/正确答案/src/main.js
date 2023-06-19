/**
 * 目标：引入工具函数使用
 */
import { checkUserName, checkPassWord } from '@/utils/check.js'
const unameResult = checkUserName('itheima007')
const pwdResult = checkPassWord('7654321')
console.log(unameResult, pwdResult)

/**
 * 目标：点击注册，检验用户名和密码长度
 */
// document.querySelector('.login-btn').addEventListener('click', () => {
//   const username = document.querySelector('.username').value
//   const password = document.querySelector('.password').value

//   if (!checkUserName(username)) {
//     alert('用户名长度要大于等于8位')
//     return
//   } else if (!checkPassWord(password)) {
//     alert('密码长度要求大于等于6位')
//     return
//   }

//   console.log('用户名和密码长度符合要求')
// })

/**
 * 目标：引入 css 文件内容
 */
import '@/css/index.css'

/**
 * 目标：引入 less 文件内容
 */
import '@/less/index.less'

/**
 * 目标：要给 img 标签设置一个 logo 图片
 * 注意：再赋予给 img 的 src 属性图片的时候，需要把图片数据对象引入过来
 */
import imgObj from '@/assets/logo.png'
document.querySelector('.logo-img').src = imgObj

/**
 * 目标：让 Webpack + Babel 编译降级 JS 语法
 */
const arr = [1, 2, 3]
const result = arr.map(val => val + 1)
console.log(result)

/**
 * 目标：基于 axios 完成注册用户功能
 */
import axios from 'axios'
document.querySelector('.login-btn').addEventListener('click', () => {
  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value

  if (!checkUserName(username)) {
    alert('用户名长度要大于等于8位!!!')
    return
  } else if (!checkPassWord(password)) {
    alert('密码长度要求大于等于6位')
    return
  }

  console.log('用户名和密码长度符合要求')
  axios({
    url: 'http://hmajax.itheima.net/api/register',
    method: 'POST',
    data: {
      username,
      password
    }
  }).then(result => {
    alert(result.data.message)
  }).catch(error => {
    alert(error.response.data.message)
  })
})

console.log(123)