# 第一天.字体图标&平面转换

## 1. 字体图标

### 1.1 字体图标是什么，他可以运用在什么地方？

字体图标就是网站当中使用的一些小图片，小图标，现在主流的网站开发当中都会优先使用字体图标来展示小图片，小图标的内容。

使用方式：

```html
方式一：
1). 去 图标网站 下载图标，解压
2). 在网页中引入 图标css文件，如：<link rel="stylesheet" href="./fonts/iconfont.css">
3). 通过类名使用 图标
如：<i class="iconfont icon-shatanqiu"></i>

方式二：
UI小姐姐会给到你一些 svg 图标
我们可以通过 iconfont.cn 网站将 svg 图标 转换成 字体图标css 文件

```

### 1.2 注意事项
要注意的是 字体图标类型 iconfont 是类名，如果想要修改字体大小，需要提高权重

### 1.3 掌握程度
方式一引入字体图标的做法必须掌握
方式二了解即可。


## 2. 平面转换之位移

### 2.1 位移是什么，位移在什么场景中使用？

位移是可以将元素进行移动的一种做法，类似定位。
如果想要根据元素自身进行移动时会使用位移

位移和定位的区别：
定位一般是相对于最近的定位父元素进行定位。
位移相对的是元素自己本身

示例：
transform: translate(x, y);

transform: translate(100px, 20px);
transform: translate(-10px, -20px);
// translate移动百分比的时候是相对于元素自身的宽度来移动的
transform: translate(50%, 50%);
// 只写一个参数的情况就只会移动x轴
transform: translate(50%)

### 2.2 注意事项
translate移动百分比的时候是相对于元素自身的宽度来移动的

### 2.3 掌握程度
要求必须掌握平移代码的编写

## 3. 平面转换之旋转

### 3.1 旋转是什么，旋转在什么场景中使用？

如果元素需要进行旋转，就可以使用平面转换之旋转来做事情

示例：
transform: rotate(60deg);
// 正数的度数是顺时针旋转，负数的度数是逆时针旋转
transform: rotate(-60deg);
// 设置旋转的中心点是 x y
transform-origin: x y;

// 案例：花儿旋转
img:hover{
    transition: all 2s;
    transform: rotate(450deg) ;
}

### 3.2 注意事项
正数的度数是顺时针旋转，负数的度数是逆时针旋转
当元素旋转的时候，实际上会更改元素的坐标系,进而影响元素的其他转换效果
建议是先平移后旋转。
img:hover{
    transition: all 2s;
    // 如果先旋转的话，会改变元素的坐标系，再做平移的话会按照旋转之后的坐标系进行平移
    transform: rotate(600px) translate(450deg) ;
    // 先做平移再做旋转，因为是先平移的，所以不会影响坐标系，再做旋转
    transform: translate(600px) rotate(450deg) ;
}

### 3.3 掌握程度
了解即可

## 4. 平面转换之缩放

### 4.1 缩放是什么，缩放在什么场景中使用？

可以将元素放大或者缩小，在一些动画效果中可以进行放大缩小制作需要的动效

示例：
// scale( n ) 中的数字n小于1就是缩小，大于1就是放大
transform: scale(1)

面试题：
如果要在页面中设置8px 大小的文字要如何设置？
我们可以将字体设置为16px大小，缩放 0.5 倍即可

### 4.2 注意事项


### 4.3 掌握程度
了解即可

## 5. 渐变

### 5.1 渐变是什么，渐变在什么场景中使用？

可以通过渐变，设置背景颜色从一个颜色过渡到另一个颜色的效果，可以用于遮盖层或者特效使用。

示例
// 线性渐变
background-image: linear-gradient(
    red,
    blue
)
// 径向渐变
background-image: radial-gradient(
    red,
    blue
)

### 5.2 注意事项
linear-gradient和radial-gradient存在兼容性问题，有些浏览器不支持使用

### 5.3 掌握程度
了解即可