//外链js在HTML文档顶部引入，所以添加页面加载事件
window.addEventListener('load',function(){
    let topNav = document.querySelector('.productnav')
    let lis = document.querySelectorAll('.productnav-item')
    let bigs = document.querySelectorAll('.js-scroll-magic')
    let line = document.querySelector('.line')
    line.style.width = lis[0].offsetWidth + 'px'
    line.style.left = lis[0].offsetLeft + 'px'
    //添加滚动事件,页面滑动大于80px的时候，改为固定定位
    window.addEventListener('scroll',function(){
        if(document.documentElement.scrollTop > 80){
            topNav.classList.add('fixed')   
        }else{
            topNav.classList.remove('fixed') 
        }
    })
    //点击顶部小模块，页面会滑到对应区域，底部的黑色线条会滑动到对应区域
    for(let i = 0; i < lis.length; i++){
        lis[i].addEventListener('click',function(){
            document.documentElement.scrollTop = bigs[i].offsetTop - topNav.offsetHeight
            line.style.transform = `translateX(${lis[i].offsetLeft}px)`
            line.style.width = lis[i].offsetWidth + 'px'
            
        })   
    }
    //页面滑动到大模块对应区域，顶部的黑色线条也会滑到部分区域
    window.addEventListener('scroll',function(){
        for(let i = 0;i < bigs.length;i++){
            if(document.documentElement.scrollTop > bigs[i].offsetTop - topNav.offsetHeight){
                line.style.transform = `translateX(${lis[i].offsetLeft}px)`
                line.style.width = lis[i].offsetWidth + 'px'
            }
        }
    })
})
