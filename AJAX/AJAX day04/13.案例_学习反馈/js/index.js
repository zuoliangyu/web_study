/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */
//设置省份下拉菜单数据
async function getData(){
  const res = await axios({url:'http://hmajax.itheima.net/api/province'})
  console.log(res)
  document.querySelector('.province').innerHTML = '<option value="">省份</option>'+ res.data.list.map(item =>`<option value="${item}">${item}</option>`)

  const res2 = await axios({url:'http://hmajax.itheima.net/api/city',params:{pname:res.data.list[0]}})
  console.log(res2)
  document.querySelector('.city').innerHTML = '<option value="">城市</option>'+ res2.data.list.map(item =>`<option value="${item}">${item}</option>`).join('')

  const res3 = await axios({url:'http://hmajax.itheima.net/api/area',params:{pname:res.data.list[0],cname:res2.data.list[0]}})
  console.log(res3)
  document.querySelector('.area').innerHTML = '<option value="">地区</option>'+ res3.data.list.map(item =>`<option value="${item}">${item}</option>`).join('')
}
getData()
document.querySelector('.province').addEventListener('change',async function(){
  if(this.value === '省份'){
    return alert('请选择省份')
  }

  const res2 = await axios({url:'http://hmajax.itheima.net/api/city',params:{pname:this.value}})
  
  document.querySelector('.city').innerHTML = '<option value="">城市</option>'+ res2.data.list.map(item =>`<option value="${item}">${item}</option>`).join('')
})

document.querySelector('.city').addEventListener('change',async function(){
  if(document.querySelector('.province').value === '省份'){
    return alert('请选择省份')
  }
  if(this.value === '城市'){
    return alert('请选择城市')
  }

  const res3 = await axios({url:'http://hmajax.itheima.net/api/area',params:{pname:document.querySelector('.province').value,cname:this.value}})
  console.log(res3)
  document.querySelector('.area').innerHTML = '<option value="">地区</option>'+ res3.data.list.map(item =>`<option value="${item}">${item}</option>`).join('')
})
document.querySelector('.submit').addEventListener('click',async function(){
  const form = document.querySelector('.info-form')
  const data = serialize(form,{hash:true,empty:true})
  const res = await axios({
    url:'http://hmajax.itheima.net/api/feedback',
    method:'post',
    data
  })
  console.log(res)
  form.reset()
})

















// // 1.1 设置省份下拉菜单数据
// axios({
//   url: 'http://hmajax.itheima.net/api/province'
// }).then(result => {
//   const optionStr = result.data.list.map(pname => `<option value="${pname}">${pname}</option>`).join('')
//   document.querySelector('.province').innerHTML = `<option value="">省份</option>` + optionStr
// })

// // 1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
// document.querySelector('.province').addEventListener('change', async e => {
//   // 获取用户选择省份名字
//   // console.log(e.target.value)
//   const result = await axios({ url: 'http://hmajax.itheima.net/api/city', params: { pname: e.target.value } })
//   const optionStr = result.data.list.map(cname => `<option value="${cname}">${cname}</option>`).join('')
//   // 把默认城市选项+下属城市数据插入select中
//   document.querySelector('.city').innerHTML = `<option value="">城市</option>` + optionStr

//   // 清空地区数据
//   document.querySelector('.area').innerHTML = `<option value="">地区</option>`
// })

// // 1.3 切换城市，设置地区下拉菜单数据
// document.querySelector('.city').addEventListener('change', async e => {
//   console.log(e.target.value)
//   const result = await axios({url: 'http://hmajax.itheima.net/api/area', params: {
//     pname: document.querySelector('.province').value,
//     cname: e.target.value
//   }})
//   console.log(result)
//   const optionStr = result.data.list.map(aname => `<option value="${aname}">${aname}</option>`).join('')
//   console.log(optionStr)
//   document.querySelector('.area').innerHTML = `<option value="">地区</option>` + optionStr
// })

// /**
//  * 目标2：收集数据提交保存
//  *  2.1 监听提交的点击事件
//  *  2.2 依靠插件收集表单数据
//  *  2.3 基于axios提交保存，显示结果
//  */
// // 2.1 监听提交的点击事件
// document.querySelector('.submit').addEventListener('click', async () => {
//   // 2.2 依靠插件收集表单数据
//   const form = document.querySelector('.info-form')
//   const data = serialize(form, { hash: true, empty: true })
//   console.log(data)
//   // 2.3 基于axios提交保存，显示结果
//   try {
//     const result = await axios({
//       url: 'http://hmajax.itheima.net/api/feedback',
//       method: 'POST',
//       data
//     })
//     console.log(result)
//     alert(result.data.message)
//   } catch (error) {
//     console.dir(error)
//     alert(error.response.data.message)
//   }
// })
