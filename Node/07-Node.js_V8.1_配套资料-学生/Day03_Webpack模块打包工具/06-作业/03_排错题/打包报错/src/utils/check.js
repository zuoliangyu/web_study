/**
 * 目标：封装检验用户名和密码长度的函数
 */
export const checkUserName = uname => {
  return uname.length >= 8
}
export const checkPassWord = pwd => {
  return pwd.length >= 6
}

export default {
  checkUserName,
  checkPassWord
}