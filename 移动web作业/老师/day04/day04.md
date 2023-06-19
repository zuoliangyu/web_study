# 复习

## 复习问题

1. 如何设置移动端的视口？

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

2. 开启flex布局的基本步骤是什么？我们可以给父元素设置哪些属性,有什么用？

.father{
    <!-- 敌死谱累： 佛来克死 -->
    display: flex;
    <!-- 假死题fai-砍腾特：死被死-比雀  -->
    justify-content: space-between; // space-around  space-evenly center
    <!-- 啊来-哎腾死： 森特 -->
    align-items: center;
}

3. 我们可以给子元素设置哪些属性，有什么用？

.son{
    <!-- 啊来-塞要父 -->
    align-self: center; // 设置某一个单一的子盒子他的 侧轴对齐方式
    <!-- 佛来克死 -->
    flex: 1; // flex属性可以设置当前子盒子在 所有子盒子的份数中占几份。
}

## 练习题讲解

# 移动web第四天 flex布局补充及案例

## 1. flex布局补充

给父元素可以设置 flex布局的方向 和 flex的子元素是否可以换行：
flex-direction: column; // (column 列 row 行(默认值)   column-reverse 列反转  row-reverse 行反转)
flex-wrap: wrap;  // wrap 换行    nowrap 不换行(默认值)
align-content: center; // align-content 可以设置 子盒子多行排列的情况下，侧轴如何对齐

练习：要求布局 2行4列 的8个盒子结构，并且盒子之间要有间距

## 注意事项
如果flex布局内容不换行，那么应该使用align-items更改侧轴对齐
如果flex布局内容会换行，应该使用align-content更改侧轴对齐

## 掌握程度
必须掌握。

## 2. css单行省略

给元素添加以下样式来形成单行省略文字的效果
text-overflow: ellipsis; // 超出部分的文字内容以 省略号的形式展示。
white-space: nowrap; // 文字不要换行
overflow: hidden; // 溢出隐藏

多行省略。

## 注意事项
添加设置单行省略的盒子要设置盒子宽度，否则盒子会被文字撑大，无法展示单行省略的效果。

## 掌握程度
了解即可

# 总结

1. flex补充讲解

flex-direction: column | row | column-reverse | row-reverse
flex-wrap: wrap | nowrap
align-content: flex-start | flex-end | center

2. 布局小兔仙儿pc端(补充讲解了单行省略) 

给元素添加以下样式来形成单行省略文字的效果
text-overflow: ellipsis; // 超出部分的文字内容以 省略号的形式展示。
white-space: nowrap; // 文字不要换行
overflow: hidden; // 溢出隐藏
width: 100px; // 