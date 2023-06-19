# 复习

## 复习问题

1. 设置字体图标的步骤是什么？
第一步，在 iconfont.cn 中下载需要的图标
第二步，在页面中引入字体图标的css文件：<link ref="./iconfont.css" />
第三步，在页面中的标签中通过类名来使用图标: <i class="iconfont xxx" ></i>

2. 如何进行平移？默认情况下，平面坐标系是怎样的？
平面坐标系的 x轴是 左正右负。  y轴是 下正上负。

transform: translate(x, y)

3. 如何进行旋转和缩放？

transform: rotate(30deg)
transform: scale(2)

// 设置转换的原点
transform-origin: x y 

4. 如何进行渐变的设置？

background-image: linear-gradient( transparent, red )

## 练习题讲解

# 移动web第二天

## 1. 空间转换之位移

如果想要进行空间转换，必须先设置透视：perspective: 1000px;(必须的)
如果想要看更好的三维立体空间效果，可以开启 transform-style:preserve-3d;(可选)

transform:translateX();// 将元素左右平移  
transform:translateY();// 将元素上下平移  
transform:translateZ();// 将元素前后平移  

### 注意事项
一定要开启透视，才能看到立体转换的效果。

### 掌握程度
了解即可
因为 有一个东西可以更好的来绘制 立体效果：canvas

## 2. 空间转换之旋转

transform:rotateX();// 沿着x轴进行旋转  
transform:rotateY();// 沿着y轴进行旋转  
transform:rotateZ();// 沿着Z轴进行旋转  

// 左手法则：想要知道元素旋转的方向，可以使用左手法则来判断
// 举起你的左手，用大拇指指向X,Y,Z轴的正方向，其他四个手指弯曲的方向就是对应轴的旋转方向

### 注意事项
除了使用左手法则判断旋转的方向以外，还可以使用调试工具来调试旋转方向

### 掌握程度
了解即可

## 3. 动画

动画是什么？如何使用？在什么场景下使用？
可以认为是高级的过渡。过渡是从A状态过渡到B状态。
动画可以设置多个过渡的节点。
去做一些网页的动态效果的时候都可以使用动画达成。

动画的使用分为两个步骤：
```css
1).定义动画：
@keyframes 动画名称 {
    from{

    }
    to{

    }
}

@keyframes 动画名称 {
    20%{

    }
    40%{
        
    }
}

2). 使用动画
div{
    animation: 动画名称 动画时间;
}

动画相关属性的讲解  
/* 设置动画名称 */
animation-name: move;  
/* 设置动画时长 */
animation-duration: 2s;  
/* 延迟多长时间开始动画 */ 
animation-delay: 1s;  
/* linear:匀速动画   ease: 先慢后快最后慢速结束 */
animation-timing-function: linear;  
/* 次数写几就播放几次，写 infinite 就是无限播放 */
animation-iteration-count: 3;  
/* 默认是normal 正常， alternate 来回播放 */
animation-direction: normal;  
/* forwards:保持动画最后的效果 */
animation-fill-mode: both;  
/* paused 就是暂停动画 */
animation-play-state: paused;  

可以通过 animation-timing-function 设置 steps 来进行逐帧动画的设置
大部分情况下我们所设置处理的都是补间动画，很少去做逐帧动画。
逐帧动画内容了解即可
```

### 注意事项
去记忆动画相关的属性。

### 掌握程度
熟练使用。
