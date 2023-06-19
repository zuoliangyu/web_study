# 复习

## 复习问题

1. 如何设置flex方向，flex换行，flex换行之后的侧轴对齐方式？

flex-direction： 设置flex方向（横向，纵向）
flex-wrap: 设置flex是否要换行(换行，不换行)
align-content: 设置子盒子换行之后的对齐方式

2. 如何设置单行省略。

div{
    width: 100px; //需要设置宽度
    overflow: hidden;
    white-space: nowrap; // 文字不要换行
    text-overflow: ellipsis; // 文字超出的部分以省略号进行展示。
}

## 练习题讲解

# 移动web第五天 rem & less & 媒体查询

## 1. rem

rem是一个相对单位，rem 的大小是由 html 标签的 font-size 大小来决定的

## 掌握程度
一定要掌握如何设置 html 根元素的font-size 来改变rem大小的做法。

## 2. 媒体查询

css语法：
@media screen and (width:375px){
    <!-- 写在{ }里面的样式 只会在375px宽度的屏幕上展示 -->
}
@media screen and (min-width:375px){
    <!-- 这里编写的是最小屏幕宽度为375px的样式 -->
}
@media screen and (max-width:375px){
    <!-- 这里编写的是最大375px的屏幕的样式 -->
}

## 注意事项
一般rem和配合 媒体查询 一起使用
或者rem也会配合 flexible.js 一起使用

补充：
flexible.js 是一个通过 javascript 语言 设置html根字号大小的代码文件
我们可以通过script标签引入执行这个js文件如下：
<script src="flexible.js"></script>

## 掌握程度
要求必须掌握语法

## 3. less

less是一种 css 预处理的语言，其实就是让我们更便捷，更快速的进行css代码编写的语言。

我们可以创建一个 .less 为后缀名的文件，编写less代码
注意：
less代码里面写的还是css，但是它的写法非常优雅。

less特性：
嵌套：less可以编写嵌套css代码，在经过easy less处理之后，会生成后代形式的css代码
补充：如果需要编写伪元素，伪类的时候，可以通过&符号来找到父元素做处理
a{
    // 下面的代码等价于 a:hover
    &:hover{

    }
}

div{
    // 等价于 div:first-of-type
    &:first-of-type{

    }
}

计算：在less中 可以编写加减乘除的计算代码。如：
width: (100+20px)

变量：我们在编程的时候可以将一些经常使用的数值用变量保存起来，方便后续修改。

导入：如果有多个less文件的情况下，一个less文件的代码需要引用其他less文件的代码，就可以使用@import语法进行导入。

## 总结

1. rem单位：他是css中的一种相对单位，rem的大小是相对于 html根元素的font-size来决定。
2. 媒体查询：使用媒体查询语法就可以根据不同的手机型号屏幕宽度来设置不同的rem大小。

语法：
<!-- min-width: 375px   max-width:414px -->
@media screen and (min-width: 375px) and (max-width:414px){

}

通过媒体查询判断屏幕宽度并且引入对应的css：
<link rel="stylesheet" type="text/css" href="iphone678.css" media="screen and (min-width:375px)" />

<link rel="stylesheet" type="text/css" href="iphone678plus.css" media="screen and (min-width:414px)" />

补充：
也可以利用 flexible.js 文件完成 对所有手机屏幕设置html根字号的事情。
<script src="flexible.js"></script>
当引入flexible.js文件之后，会将html的font-size大小设置为当前屏幕的十分之一。

3. less语法
less变量，嵌套，导入，希望大家fc游乐园项目都采用less语法去编写。
目前来说，市场上最常用的css预处理语言，是sass。
