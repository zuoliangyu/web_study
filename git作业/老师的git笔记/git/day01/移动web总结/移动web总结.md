# 移动web课程总结

## 1. 移动web第一天：字体图标，平面转换

### 1. 字体图标【非常重要】

字体图标该如何使用？
1). 下载，转换字体图标 (在iconfont.cn 或者其他网站可以下载，转换)
2). 在网页中可以引入字体图标 ( <link href="iconfont.css" /> )
3). 使用字体图标 ( <span class="iconfont iconfont-dianshiji"></span> )

### 重要程度： ★★★★★
### 难度：★
### 要求必须掌握

### 2. 平面转换【重要】

平面转换的位移，旋转和缩放是怎样的？

transform: translate()  平移
transform: rotate()  旋转
transform: scale()  缩放

### 重要程度： ★★★★
### 难度：★★
### 要求必须掌握

### 3. 线性渐变【了解】

如何设置线性渐变？

background-image: linear-gradient( red, yellow )

### 重要程度： ★
### 难度：★★
### 要求了解即可

## 2. 移动web第二天：立体转换，动画

### 1. 立体转换【了解】

立体转换的位移，旋转和缩放是怎样的？

transform: translateX() translateY() translateZ()
transform: rotateX() rotateY() rotateZ()  旋转
transform: scaleX() scaleY() scaleZ()  缩放

### 重要程度： ★
### 难度：★★★★
### 要求了解即可
在实际开发中，如果要呈现立体效果，一般不会使用立体转换，一般会使用 <canvas> 进行立体内容呈现。

### 2. 在网页中开启透视，三维空间【了解】

在网页中如果想要看到立体效果，我们应该至少开启透视
perspective: 800px;   (800px~1200px)

如果想要看到更好的效果，我们可以继续开启三维空间
transform-style: preserve-3d;

### 重要程度： ★
### 难度：★★★
### 要求了解即可

### 3. 动画【重要】

如何创建一个动画？如何使用一个动画？

创建动画：
@keyframes 动画名称 {
    to{}
    from{}

    50%{}
    100%{}
}

使用动画：
.one {
    animation: 动画名称 动画时间;
    animation-timing-function: steps(12); // 逐帧动画
}

### 重要程度： ★★★
### 难度：★★
### 要求掌握创建和使用动画的操作。

## 2. 移动web第三四天：flex布局【非常重要】

如何开启flex布局？flex布局的效果是什么？

给父元素添加 display:flex ，以此开启flex布局
开启flex布局之后的效果就是，将父元素下属的所有直接子元素进行flex布局( 将所有子盒子并排放在一起 )

开启flex布局之后，如何设置子元素主轴的排列方式？如何设置子元素侧轴的排列方式？
主轴排列方式： justify-content: center;  (center居中， space-between 两端贴边，space-evenly 平均分配)
侧轴排列方式： align-items: center; (flex-start 上方对齐, flex-end 下方对齐, center 垂直居中)

如何设置flex布局的主轴方向？如何设置flex布局的子盒子能否换行？
更改flex布局的主轴方向：flex-direction: column; (row 更改为水平主轴 , column 更改为垂直主轴)
设置flex子元素换行： flex-wrap: wrap; (wrap：子元素可以换行，  nowrap: 不换行(默认值))

如果在单行和多行的情况下，该如何实现侧轴居中效果？
align-items: center; /* align-items 考虑的是单行子元素的情况下的垂直居中*/
align-content: center; /* align-content 考虑的是多行子元素的情况下，如何垂直居中*/

---------------------我是分割线，上面的内容都是设置给flex布局父盒子的属性----------------------------------
---------------------我是分割线，下面的内容是设置给flex布局子盒子的属性------------------------------------

子盒子可以通过 flex属性设置占据剩余空间的几份：
.father>div{
    flex:1;
}
当我们给子元素设置flex属性的时候，将会按照父盒子的剩余空间进行flex份数的分配。
此时子元素的宽度属性将会失效。

我们也可以单独设置某个子盒子的侧轴对齐方式：
align-self: flex-start;

### 重要程度： ★★★★★
### 难度：★★
### 要求掌握flex布局基本写法，flex布局相关属性的作用。

## 3. 移动端布局相关概念【了解】

物理分辨率：指的是设备自己本身的实际分辨率情况
逻辑分辨率：指的是写代码的时候所编写的像素情况

在移动端开发的时候，都必须设置视口
<meta name='viewport' content="width=device-width, initial-scale=1.0" />

二倍图：就是ui小姐姐给你提供了更清晰的图片。

### 重要程度： ★★
### 难度：★
### 其他概念了解即可，视口设置的代码需要记忆一下。

## 移动web第五天，rem+媒体查询【非常重要】

## 1. rem【非常重要】

rem是什么？他到底有多大？
rem是一种相对单位，rem的大小是由 html 元素的 font-size 大小来决定的

如果想要实现rem移动端适配，有哪几种实现方案呢？
1). 使用媒体查询设置每一个手机屏幕的html根元素的font-size，来设置rem大小，再将布局单位从px改换为rem即可
假设需要适配 iphone6(375px) iphone6plus(414px) iphone4s(320px)
@media screen and (width:320px){
    // iphone4s
    html{
        font-size: 32px;
    }
}

@media screen and (width:375px){
    // iphone6
    html{
        font-size: 37.5px;
    }
}

@media screen and (width:414px){
    // iphone6plus
    html{
        font-size: 41.4px;
    }
}

div{
    width:200px;
    height:200px;
    // 如果要将px转换rem，一定要考虑200px*200px是从多大的设计稿上量取的
    // 我们应该是用 量取的宽高 / 设计稿宽度的十分之一
    // 假设设计稿是750px宽度的
    width: 2.666667rem;   // 200px / 75px
    height: 2.666667rem;
}

第一套方案的优缺点：
优点：所有代码都是我自己写的，我掌握所有核心技术。
缺点：如果需要适配的手机很多，@media也要写很多个。

2). 使用 flexible.js 文件将 html 元素的font-size设置为当前屏幕宽度的十分之一，然后将布局单位从px转换为rem
利用script标签引入flexible.js
<script src='flexible.js'></script>

div{
    width:200px;
    height:200px;
    // 如果要将px转换rem，一定要考虑200px*200px是从多大的设计稿上量取的
    // 我们应该是用 量取的宽高 / 设计稿宽度的十分之一
    // 假设设计稿是750px宽度的
    width: 2.666667rem;   // 200px / 75px
    height: 2.666667rem;
}

### 重要程度： ★★★★★
### 难度：★★★
### 重点记忆第二套rem适配方案(flexible.js)

## 2. less【重要】

less基本写法
1) less变量： @变量名: 值;
2) less嵌套： 编写less代码的时候，元素和元素之间可以以嵌套的方式来表达父子层次结构关系
div{
    p{

    }
}
3) less导入： @import 'less文件的路径';

### 重要程度： ★★★
### 难度：★★★
### 要求掌握用less编写样式的做法。

## 移动web第六天 vw,vh,vmin,vmax

## 1. vw,vh,vmin,vmax【非常重要】

vw,vh是什么单位？他们有多大？
vw,vh也是相对单位，他们是相对于当前屏幕设备的宽度和高度来设置大小的单位
假设当前屏幕是iphone6, 宽 375px， 高 667px
1vw = 3.75px // 不需要任何其他的设置，1vw一定是当前屏幕宽度的百分之一、
1vh = 6.67px

如何使用vw,vh 进行移动端适配呢？
假设当前设计稿宽度是750px，量取的div盒子宽度高度是300*300
div{
    width:300px;
    height:300px;
    // 转换为vw，怎么做？
    // 在750px的设计稿中，1vw = 7.5px
    // 转换就应该除以 7.5
    width: 40vw;  // 300 / 7.5
    height: 40vw;
}

这个盒子在iphone6中有多大？在iphone6plus中有多大？
在iphone6中150*150
在iphone6plus中165*165

vmin和vmax是什么？
vmin是取得 vw，vh中较小的那个值
vmax是取得 vw,vh 中较大的那个值
假设当前屏幕是iphone6, 宽 375px， 高 667px
1vw = 3.75px // 不需要任何其他的设置，1vw一定是当前屏幕宽度的百分之一、
1vh = 6.67px
vmin就是 3.75px
vmax就是 6.67px

### 重要程度： ★★★★★
### 难度：★★★
### 要求必须掌握使用vw,vh进行屏幕适配的方案。

## 移动web第七天，媒体查询，bootstrap

### 1. 媒体查询补充【重要】

注意媒体查询进行多屏幕适配的时候，如果书写min-width或者max-width，要注意书写顺序
如果媒体查询全部使用的是 min-width，我们就应该从小到大进行编写
@media screen and (min-width:768px){

}

@media screen and (min-width:992px){
    
}

@media screen and (min-width:1200px){
    
}
如果是全部使用的 max-width，就应该从大到小编写

@media screen and (max-width:1200px){

}

@media screen and (max-width:992px){
    
}

@media screen and (max-width:768px){
    
}

使用link标签引入不同的css，并且可以使用media进行媒体查询的判断
<!-- 编写媒体查询根据设备宽度引入不同的css -->
<link rel="stylesheet" href="./css/mobile.css" media="(max-width: 768px)">
<link rel="stylesheet" href="./css/pad.css" media="(min-width: 768px)">
<link rel="stylesheet" href="./css/pc.css" media="(min-width: 992px)">

### 重要程度： ★★
### 难度：★★
### 要求了解如何使用媒体查询做响应式布局

补充：
什么是移动端适配？什么是响应式布局？
移动端适配 利用rem，vw,vh进行 移动端布局的做法，整个的页面只有一套css样式，当设备变化的时候，会将页面的元素进行放大缩小
响应式布局 利用媒体查询去区分不同的设备，让不同的设备可以使用不同的css布局方式
也就是说响应式布局中，一个页面可以搭配多套css布局方案，





what where why how  3W1H
what: 这是啥？
where: 在哪里用？
why: 为什么要用他？
how：怎么用？

### 2. bootstrap【了解】

bootstrap这个东西是什么？这个东西在哪里用？我们为什么要使用它？该怎么用？
bootstrap是一套ui框架，他提供了很多的样式，他提供了很多组件。
如果我们在进行项目开发的时候，没有设计稿，没有对布局的强制要求，我们就可以考虑使用bootstrap来进行页面布局、
使用bootstrap之后，我们可以少写很多的样式代码。
查阅官方文档，进行复制粘贴使用。

常用类名：
.container : 版心容器
.container-fluid : 全屏容器
.row : 代表的就是一行元素
col-xs-4 col-sm-3 col-lg-2:
hidden-xs:

### 重要程度： ★
### 难度：★★★★
### 了解即可，将来大家开发，大概率不会使用bootstrap