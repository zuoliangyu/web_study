# 复习

## 复习问题

1. 如何开启透视？如何开启三维立体空间？
在父元素身上开启透视，perspective:1000px;
在父元素身上开启三维立体空间： transform-style: preserve-3d

建议：
建议透视添加在爷爷元素身上
三维立体空间添加在父元素身上。

2. 如何进行立体转换平移？如何进行立体转换旋转？

transform: translateX()
transform: translateY()
transform: translateZ()

transform: rotateX()
transform: rotateY()
transform: rotateZ()


3. 如何设置css动画？

1). 使用@keyframes 定义动画
如：
@keyframes 动画名称 {
    from{}
    to{}
    10%{}
}

2). 使用animation 属性来使用动画
如：
.one {
    animation: 动画名称 动画时间 动画播放次数 延迟播放动画的时间 播放的方式;
}

4. 列举你所知道的css动画属性。

animation-name: 动画名称
animation-duration: 动画时长
animation-timing-function: 运动曲线
animation-delay: 动画延迟
animation-iteration-count: 动画的次数 (n, infinite)
animation-direction: 动画播放的方向
animation-fill-mode: 动画结束后的状态
animation-play-state: 动画播放状态

## 练习题讲解

# 移动web第三天 移动端开发常识及flex布局

## 1. 视口的设置

当我们使用浏览器进行手机模拟调试的时候，默认情况下，浏览器会将手机模拟器的逻辑像素宽度设置为980px.
实际上手机的逻辑分辨率是375，会导致你布局的内容看起来要小很多。

<!-- 通过meta标签来进行网页信息设置 -->
<!-- 通过name属性来告诉meta标签要设置 什么信息 viewport(视口：页面中的可视区域)  -->
<!-- 通过content属性来设置 viewport 区域的信息
    width=device-width ：width就是当前可视区域的宽度，  device-width(device：设备)
    , initial-scale=1.0：初始缩放比
    user-scalable=0  : 禁止用户进行缩放-->

<meta name="viewport" content="width=device-width, initial-scale=1.0">

## 注意事项

以后编写的移动端页面都必须添加视口设置的这一段代码
<meta name="viewport" content="width=device-width, initial-scale=1.0">

## 掌握程度
了解即可，要会复制粘贴。

## 补充
物理像素：指的是设备实际能够呈现的像素内容
逻辑像素: 指的是我们写代码的时候写的px
物理分辨率: 指的是设备出厂的时候，能呈现的像素比(宽度像素 * 高度像素)
逻辑分辨率: 指的是写代码的时候我们可以去写的宽度像素和高度像素。

二倍图：为了图片展示能够有更加清晰的效果，UI小姐姐会给到前端一些高清图片(2倍图，3倍图)
咱们去设置图片的时候使用二倍图肯定要比一倍图更加清晰。

使用场景：将来大家设置图片的时候如果感觉图片不清晰(客户反映图片不清晰)，要求ui小姐姐提供2倍图。

## 2. 移动端网页布局之百分比布局

在进行移动端网页开发的时候，我们主要采用的布局方式有： 百分比布局，flex布局，rem布局，vw/vh布局

百分比布局就是通过百分比的方式来设置元素的宽度，这种宽度自适应，高度固定的布局做法就是百分比布局。

## 注意事项
百分比布局是相对父元素设置宽度百分比的布局方式，要注意父元素的宽度进行设置

## 掌握程度
熟练掌握

## 3. flex布局

也被称为弹性盒子，伸缩盒子。是现今最为流行的前端布局方式。

flex布局的步骤：
1. 给父元素添加display:flex 开启flex布局（必须）  
2. 给父元素添加justify-content 属性，设置子盒子 主轴的对齐方式( 默认设置的是横向对齐方式 )(可选)  
3. 给父元素添加align-items 属性，设置子盒子 侧轴的对齐方式( 默认设置的是纵向对齐方式 )(可选)  
4. 给子元素添加flex 属性，可以分配父盒子的剩余宽度(按照所有子盒子的flex份数进行均分)(可选)  
5. 给子元素添加align-self 属性， 可以设置某一个子盒子在侧轴中的排列方式(可选。)

## 注意事项
设置flex布局之后，所有子盒子都会脱标，在父元素中排成一排进行展示。


## 掌握程度
熟练掌握