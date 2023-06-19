# JavaScript 进阶 - 第2天

> 了解面向对象编程的基础概念及构造函数的作用，体会 JavaScript 一切皆对象的语言特征，掌握常见的对象属性和方法的使用。

- 深入对象
- 内置构造函数
- 综合案例

## 深入对象

> 了解面向对象的基础概念，能够利用构造函数创建对象。

### 创建对象三种方式

~~~html
<body>
  <script>
    // 1. 利用字面量创建对象（常用的一种方式）
    const o = {
      name: '佩奇'
    }
    console.log(o)

    // 2. 利用 new Object 创建对象 （了解）
    // const oo = new Object({ name: '佩奇' })
    const oo = new Object()
    oo.name = '佩奇'
    console.log(oo)

    // 3. 利用构造函数创建对象

  </script>
~~~

### 构造函数

**构造函数：**是一种特殊的函数，主要用来创建对象(初始化对象)

**使用场景：**常规的 {...} 语法允许创建一个对象。比如我们创建了佩奇的对象，继续创建乔治的对象还需要重新写一遍，此时可以通过构造函数来快速创建多个类似的对象

```html
<body>
  <script>
    // 构造函数：是一种特殊的函数，用来创建对象（并完成初始化对象）
    // 1. 构造函数的2个约定 首字母要大写, 利用new关键字来调用函数
    // function Pig() {

    // }
    // console.log(new Pig)
    // console.log(Pig())
    function Pig(name, age, gender) {
      // this.name 属性   
      // name 是形参也就是属性值
      this.name = name
      this.age = age
      this.gender = gender
      // return 123
    }
    const peiqi = new Pig('佩奇', 6, '女')
    console.log(peiqi)
    const qiaozhi = new Pig('乔治', 3, '男')
    console.log(qiaozhi)

    // 2. 构造函数创建对象说明
    // 2.1 new 关键字 实例化对象
    // 2.2 如果构造函数没有参数，则可以省略小括号
    // 2.3 构造函数里面无需写 return
    // 2.4 new Object()  new Date() 也是在实例化对象
  </script>
</body>
```

说明：

1. 使用 new 关键字调用函数的行为被称为实例化
2. 实例化构造函数时没有参数时可以省略 ()
3. 构造函数内部无需写return，返回值即为新创建的对象
4. newObject（）  new Date（）也是实例化构造函数

#### new 实例化过程

1. 创建新空对象
2. 构造函数this指向新对象
3. 执行构造函数代码
4. 返回新对象

### 实例成员&静态成员

#### 实例成员

实例成员：

通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员(实例属性和实例方法）

```html
<body>
  <script>
    // 实例成员和静态成员
    // 1. 实例成员：实例对象上的属性和方法属于实例成员
    function Pig(name) {
      this.name = name
    }
    const peiqi = new Pig('佩奇')
    const qiaozhi = new Pig('乔治')
    peiqi.name = '小猪佩奇'  // 实例属性
    peiqi.sayHi = () => {  // 实例方法
      console.log('hi~~')
    }
    console.log(peiqi)
    console.log(qiaozhi)
    console.log(peiqi === qiaozhi)
  </script>
```

>说明：
>1. 为构造函数传入参数，创建结构相同但值不同的对象
>
>2. 构造函数创建的实例对象彼此独立互不影响

#### 静态成员

构造函数的属性和方法被称为静态成员（静态属性和静态方法）

```html
<script>
  // 2. 静态成员 ： 构造函数上的属性和方法称为静态成员
  function Pig(name) {
    this.name = name
  }
  Pig.eyes = 2  // 静态属性
  Pig.sayHi = function () {  // 静态方法
    console.log(this)
  }
  Pig.sayHi()
  console.log(Pig.eyes)  // 2
</script>
```

说明：

1. 静态成员只能构造函数来访问
2. 静态方法中的this指向构造函数

比如 Date.now()    Math.PI   Math.random()

### 一切皆对象

引用类型:  

  Object，Array，RegExp，Date等

基本数据类型：

  字符串、数值、布尔、undefined、null 

但是，我们会发现有些特殊情况：

其实字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型

**包装类型执行过程：**

- 创建一个 String 类型的实例
- 调用实例上的特定方法
- 销毁实例

JS中几乎所有的数据都可以基于构造函数创建，不同的构造器创建出来的数据拥有不同的属性和方法

~~~html
<body>
  <script>
    // 包装类型
    // const str = 'andy'
    // console.log(str.length)

    // 包装过程
    // const str = new String('andy')
    // str.substring()
    // str = null 
  </script>
</body>
~~~

## 内置构造函数

> 掌握各引用类型和包装类型对象属性和方法的使用。

### Object

Object是内置的构造函数，用于创建普通对象。

推荐使用字面量方式声明对象，而不是Object构造函数

学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）

```html
<body>
  <script>
    // Object 三种静态方法
    const o = { name: '佩奇', age: 6, gender: '女' }

    // 1. Object.keys()  得到对象所有属性（重点） 返回的是数组
    const key = Object.keys(o)
    console.log(key)

    // 2. Object.values()  得到对象所有属性值（重点）返回的是数组
    const value = Object.values(o)
    console.log(value)

    // 3. Object.assign(目标对象, 源对象)  对象的拷贝   assign 赋值的意思
    const oo = {}
    Object.assign(oo, o)
    oo.name = '小猪佩奇'
    console.log(oo)
    console.log(o)
    // 3.1 注意 拷贝对象之后是两个不同的对象，不会相互影响
  </script>
</body>
```

总结：

1. 推荐使用字面量方式声明对象，而不是 `Object` 构造函数
2. `Object.assign` 静态方法创建新的对象
3. `Object.keys` 静态方法获取对象中所有属性
4. `Object.values` 表态方法获取对象中所有属性值

### Array

Array 是内置的构造函数，用于创建数组

创建数组建议使用字面量创建，不用 Array构造函数创建

```html
<body>
  <script>
    // 数组reduce方法
    // arr.reduce(function(上一次值, 当前值){}, 初始值)
    // const arr = [1, 5, 8]

    // 1. 没有初始值 
    // const total = arr.reduce(function (prev, current) {
    //   return prev + current
    // })
    // console.log(total)

    // 上一次值    当前值    返回值  (第一次循环)
    //   1         5         6
    // 上一次值    当前值    返回值  (第二次循环)
    //   6         8        14

    const arr = [1, 5, 8]

    // 2. 有初始值
    const total = arr.reduce(function (prev, current) {
      return prev + current
    }, 10)
    console.log(total)

    // 上一次值    当前值    返回值  (第一次循环)
    //   10         1         11
    // 上一次值    当前值    返回值  (第二次循环)
    //   11         5         16
    // 上一次值    当前值    返回值  (第三次循环)
    //   16         8         24

  </script>
</body>
```



总结：

1. 推荐使用字面量方式声明数组，而不是 `Array` 构造函数

2. 实例方法 `forEach` 用于遍历数组，替代 `for` 循环 (重点)

3. 实例方法 `filter` 过滤数组单元值，生成新数组(重点)

4. 实例方法 `map` 迭代原数组，生成新数组(重点)

5. 实例方法 `join` 数组元素拼接为字符串，返回字符串(重点)

6. 实例方法  `find`  查找元素， 返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)

7. 实例方法`every` 检测数组所有元素是否都符合指定条件，如果**所有元素**都通过检测返回 true，否则返回 false(重点)

8. 实例方法`some` 检测数组中的元素是否满足指定条件   **如果数组中有**元素满足条件返回 true，否则返回 false

9. 实例方法 `concat`  合并两个数组，返回生成新数组

10. 实例方法 `sort` 对原数组单元值排序

11. 实例方法 `splice` 删除或替换原数组单元

12. 实例方法 `reverse` 反转数组

13. 实例方法 `findIndex`  查找元素的索引值


### String

`String` 是内置的构造函数，用于创建字符串。

```html
<body>
  <script>
    // 字符串方法split 
    const str = '传智播客'
    // 1. split('分隔符')  把字符串转换为数组
    console.log(str.split(''))
    const str1 = '小米,华为,苹果'
    console.log(str1.split(','))

    // 2. join('分隔符')可以把数组转换为字符串

    // 3. 把传智播客这字符串做一个翻转 变成 客播智传

    // 把字符串转换为数组， 数组里面reverse翻转，再把数组转换为字符串
    console.log(str.split('').reverse())
    console.log(str.split('').reverse().join(''))
  </script>
</body>
```

总结：

1. 实例属性 `length` 用来获取字符串的度长(重点)
2. 实例方法 `split('分隔符')` 用来将字符串拆分成数组(重点)
3. 实例方法 `substring（需要截取的第一个字符的索引[,结束的索引号]）` 用于字符串截取(重点)
4. 实例方法 `startsWith(检测字符串[, 检测位置索引号])` 检测是否以某字符开头(重点)
5. 实例方法 `includes(搜索的字符串[, 检测位置索引号])` 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false(重点)
5. 实例方法 `toUpperCase` 用于将字母转换成大写
7. 实例方法 `toLowerCase` 用于将就转换成小写
8. 实例方法 `indexOf`  检测是否包含某字符
9. 实例方法 `endsWith` 检测是否以某字符结尾
10. 实例方法 `replace` 用于替换字符串，支持正则匹配
13. 实例方法 `match` 用于查找字符串，支持正则匹配

注：String 也可以当做普通函数使用，这时它的作用是强制转换成字符串数据类型。

### Number

`Number` 是内置的构造函数，用于创建数值。

```html
<body>
  <script>
    // 数字 toFixed 方法
    const num = 12.345
    console.log(num.toFixed(2))  // 12.35
    console.log(num.toFixed(1))  // 12.3
    const num1 = 12
    console.log(num1.toFixed(2))  // 12.00
  </script>
</body>
```

总结：

1. 推荐使用字面量方式声明数值，而不是 `Number` 构造函数
2. 实例方法 `toFixed` 用于设置保留小数位的长度











