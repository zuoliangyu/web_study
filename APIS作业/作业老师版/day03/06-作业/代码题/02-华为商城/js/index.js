
// 因为js文件是在html文档顶部引入，因此需要添加页面加载事件
window.addEventListener('load', function () {


  // 业务1： 页面滚动，可以显示顶部导航栏
  // 顶部导航
  const productnav = document.querySelector(".productnav")
  // 可以先提前得到 navHeight 顶部导航的高度, 因为滑动之后，顶部导航会少了图片，盒子变小了，就不准了
  const navHeight = productnav.offsetHeight
  // 获取下面main盒子
  const main = document.querySelector(".main")
  window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop
    //固定导航 大于 80 即可
    if (scrollTop > 80) {
      productnav.classList.add("fixed")
      // 注意，顶部导航变为固定定位不占位置了，所以，下面main盒子会直接跳上去，所以要给main margin-top 
      main.style.marginTop = navHeight + "px"
    } else {
      productnav.classList.remove("fixed")
      // 复原之后，顶部盒子不是固定定位了，所以 main盒子不需要margin-top了
      main.style.marginTop = "0px"
    }
  })



  // 业务2： 点击顶部导航，页面可以滑动

  //1.获取元素
  const itemList = document.querySelectorAll(".productnav-item") //左侧列表
  const neirongList = document.querySelectorAll(".js-scroll-magic") //左侧列表

  // 因为黑色的底部条条可以滑动，所以先设置这个条条的宽度 和起始位置
  const line = document.querySelector('.line')
  console.log(line)
  line.style.width = itemList[0].offsetWidth + 'px'
  line.style.left = itemList[0].offsetLeft + 'px'


  //2.点击每一个list模块， 页面可以滚动到对应位置，并且 底部 line 滑动
  for (let i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener('click', function () {
      //  页面滚动到下标一致盒子的位置
      document.documentElement.scrollTop = neirongList[i].offsetTop + 100

      // 让 line盒子滑动到对应位置
      line.style.transform = `translateX(${this.offsetLeft}px)`
      // 因为每个item盒子宽度不一样，所以需要修改宽度
      line.style.width = this.offsetWidth + 'px'
    })
  }


  // 业务3 页面滚动到对应大盒子位置，底部的line线条跟随滑动

  window.addEventListener('scroll', function () {
    for (let i = 0; i < neirongList.length; i++) {
      if (document.documentElement.scrollTop >= neirongList[i].offsetTop) {
        // 让 line盒子滑动到对应位置
        line.style.transform = `translateX(${itemList[i].offsetLeft}px)`
        // 因为每个item盒子宽度不一样，所以需要修改宽度
        line.style.width = itemList[i].offsetWidth + 'px'
      }
    }
  })
}
)
