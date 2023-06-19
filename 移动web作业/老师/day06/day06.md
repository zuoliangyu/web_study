# 复习

## 复习问题

1. rem是一个怎样的单位，它到底是多大？

rem是一个相对单位，它是根据 html 根元素的font-size大小来设置的。

2. rem适配方案有哪几种？请介绍一下

1). 可以通过 @media 媒体查询给特定的屏幕设置 html 的font-size大小来进行屏幕适配
缺点：如果需要适配的屏幕比较多，@media的媒体也需要写很多个。

2). 引入一个 flexible.js 这样的javascript 文件，由这个文件去进行 html 的font-size大小的设置.
优点：无论任何屏幕，都会将rem的大小设置为当前屏幕的十分之一
缺点：目前就只能设置为十分之一。如果想要修改，就要去 flexible.js 文件中修改 js 代码

3. less中如何定义一个变量？

定义变量：
@变量名: 值;

使用变量的时候：
width: @变量名;

## 练习题讲解

引入css文件的路径问题（css文件路径，进行中图片路径）
底部tabbar出现之后的处理

# 移动web第六天 vw，vh

## 1. vw,vh

vw和vh也是相对单位， vw和vh到底是多大呢？
vw(viewport width): 1vw = 当前屏幕宽度的百分之一，假设当前屏幕宽度为375px，1vw = 3.75px
vh(viewport height): 1vh = 当前屏幕高度的百分之一，假设当前屏幕的高度为667px，1vh = 6.67px

vw,vh 两个单位可以独立使用，不需要进行媒体查询的处理或者 flexible.js的引入。
缺点：兼容性问题，低版本的浏览器不支持(如果在移动端，大家可以放心使用这两个单位，如果在pc端，请慎重使用。)

使用 vw/vh 单位进行移动适配处理：
量取 设计稿中 元素的值(宽高)，用量取的值 除以 1vw的大小 ，最后得到的就是 真正vw值。

注意：
因为iphone手机系列有 全面屏手机，也有大按键手机，两种手机型号宽高比不一致
如果我们布局的时候，混用vwvh单位，在这两种手机上就可能会在不同的手机上呈现不同的效果。

最终结论：不要混用vw，vh, 进行适配的时候要么全用vw，要么全用vh



vmin：是取得vw和vh两个数据中最小的一个
vmax：是取得vw和vh两个数据中最大的一个

场景：
假设我们将iphone6手机正放，屏幕的宽度是375px，高度是667px
1vmin就是3.75  1vmax就是6.67

假设我们将iphone6手机侧放，屏幕的宽度是667px，高度是375px
1vmin就是3.75  1vmax就是6.67

所以我们在开发的时候如果要考虑手机侧放的时候的适配，就应该使用vmin或者vmax单位进行适配
如果在开发的时候不考虑手机侧放，只会正放，就可以使用vw，vh。

补充内容：
刘海屏处理
.phonex {
  padding-top: constant(safe-area-inset-top); //为导航栏+状态栏的高度 88px
  padding-top: env(safe-area-inset-top); //为导航栏+状态栏的高度 88px
  padding-left: constant(safe-area-inset-left); //如果未竖屏时为0
  padding-left: env(safe-area-inset-left); //如果未竖屏时为0
  padding-right: constant(safe-area-inset-right); //如果未竖屏时为0
  padding-right: env(safe-area-inset-right); //如果未竖屏时为0
  padding-bottom: constant(safe-area-inset-bottom); //为底下圆弧的高度 34px
  padding-bottom: env(safe-area-inset-bottom); //为底下圆弧的高度 34px
}








补充：
刘海屏处理
vmin vmax