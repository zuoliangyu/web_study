# JavaScript 进阶 - 第1天

> 学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。

- 作用域
- 函数进阶
- 解构赋值
- 综合案例

## 作用域

> 了解作用域对程序执行的影响及作用域链的查找机制，使用闭包函数创建隔离作用域避免全局变量污染。

作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问，作用域分为全局作用域和局部作用域。

### 局部作用域

局部作用域分为函数作用域和块作用域。

#### 函数作用域

在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。

```html
<script>
  // 声明 counter 函数
  function counter(x, y) {
    // 函数内部声明的变量
    const s = x + y
    console.log(s) // 18
  }
  // 设用 counter 函数
  counter(10, 8)
  // 访问变量 s
  console.log(s)// 报错
</script>
```

总结：

1. 函数内部声明的变量，在函数外部无法被访问
2. 函数的参数也是函数内部的局部变量
3. 不同函数内部声明的变量无法互相访问

#### 块作用域

在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。

```html
<script>
  {
    // age 只能在该代码块中被访问
    let age = 18;
    console.log(age); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(age) // 报错
  
  let flag = true;
  if(flag) {
    // str 只能在该代码块中被访问
    let str = 'hello world!'
    console.log(str); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(str); // 报错
  
  for(let t = 1; t <= 6; t++) {
    // t 只能在该代码块中被访问
    console.log(t); // 正常
  }
  
  // 超出了 t 的作用域
  console.log(t); // 报错
</script>
```



总结：

1. `let` 声明的变量会产生块作用域，`var` 不会产生块作用域
2. `const` 声明的常量也会产生块作用域
3. 不同代码块之间的变量无法互相访问
4. 推荐使用 `let` 或 `const`

### 全局作用域

`<script>` 标签和 `.js` 文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。

```html
<script>
  // 此处是全局
  
  function sayHi() {
    // 此处为局部
  }

  // 此处为全局
</script>
```

全局作用域中声明的变量，任何其它作用域都可以被访问，如下代码所示：

```html
<script>
    // 全局变量 name
    const name = '小明'
  
  	// 函数作用域中访问全局
    function sayHi() {
      // 此处为局部
      console.log('你好' + name)
    }

    // 全局变量 flag 和 x
    const flag = true
    let x = 10
  
  	// 块作用域中访问全局
    if(flag) {
      let y = 5
      console.log(x + y) // x 是全局的
    }
</script>
```

总结：

1. 为 `window` 对象动态添加的属性默认也是全局的，不推荐！
2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！！！
3. 尽可能少的声明全局变量，防止全局变量被污染

JavaScript 中的作用域是程序被执行时的底层机制，了解这一机制有助于规范代码书写习惯，避免因作用域导致的语法错误。

### 作用域链

嵌套关系的作用域串联起来形成了作用域链

**作用：**作用域链本质上是底层的变量查找机制（就近原则）

- 在函数被执行时，会优先查找当前函数作用域中查找变量
- 如果当前作用域查找不到则会逐级向上查找父级作用域直到全局作用域

```html
<body>
  <script>
    // 全局作用域
    // let a = 11
    let b = 22
    // 局部作用域
    function f() {
      // let a = 1
      // 局部作用域
      function g() {
        // a = 2
        console.log(a)  // ?
      }
      g() // 调用g
    }
    f() // 调用 f

  </script>
</body>
```



总结：

1.嵌套关系的作用域串联起来形成了作用域链

2.查找规则：就近原则 

- 当前作用域用找不到，则会逐级查找父级作用域直到全局作用域
- 都找不到则提示错误，这个变量没有被定义过

3.子作用域能够访问父作用域，父级作用域无法访问子级作用域

### 垃圾回收机制

垃圾回收机制(Garbage Collection)  简称 GC

JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收

**内存的生命周期**

JS环境中分配的内存, 一般有如下生命周期： 

1.内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存 

2.内存使用：即读写内存，也就是使用变量、函数等 

3.内存回收：使用完毕，由垃圾回收器自动回收不再使用的内存 

**说明：**

- 全局变量一般不会回收(关闭页面回收)
- 一般情况下局部变量的值, 不用了, 会被自动回收掉

**内存泄漏：**程序中分配的内存由于某种原因程序未释放或无法释放叫做内存泄漏

### 闭包

**概念：**一个函数对周围状态的引用捆绑在一起，闭包让开发者可以从内部函数访问外部函数的作用域

>简单理解：闭包 =  内层函数 + 外层函数的变量 

```html
<body>
  <script>
    // 1. 闭包 : 内层函数 + 外层函数变量
    // function outer() {
    //   const a = 1
    //   function f() {
    //     console.log(a)
    //   }
    //   f()
    // }
    // outer()

    // 2. 闭包的应用： 实现数据的私有。统计函数的调用次数
    // let count = 1
    // function fn() {
    //   count++
    //   console.log(`函数被调用${count}次`)
    // }

    // 3. 闭包的写法  统计函数的调用次数
    function outer() {
      let count = 1
      function fn() {
        count++
        console.log(`函数被调用${count}次`)
      }
      return fn
    }
    const re = outer()
    // const re = function fn() {
    //   count++
    //   console.log(`函数被调用${count}次`)
    // }
    re()
    re()
    // const fn = function() { }  函数表达式
    // 4. 闭包存在的问题： 可能会造成内存泄漏
  </script>
</body>
```

总结：

1.怎么理解闭包？

- 闭包 = 内层函数 + 外层函数的变量

2.闭包的作用？

- 封闭数据，实现数据私有，外部也可以访问函数内部的变量
- 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来

3.闭包可能引起的问题？

- 内存泄漏

### 变量提升

变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问（仅存在于var声明变量）

**说明：**

1. 变量提升出现在当前作用域的最前面


2. 提升时，只提升变量声明，不提升变量赋值
3. let/const 声明的变量不存在变量提升
4. 实际开发中推荐先声明再访问变量

```html
<body>
  <script>
    var age
    // var变量提升
    // 1. 变量提升会提升到当前作用域的最前面
    // 2. 只提升变量声明，不提升变量赋值
    console.log(age) // ?
    age = 18
    console.log(age) // ?

    function fn() {
      var uname
      console.log(uname)
      uname = 'andy'
    }
    fn()
  </script>
</body>
```

>JS初学者经常花很多时间才能习惯变量提升，还经常出现一些意想不到的bug，正因为如此，ES6 引入了块级作用域，用let或者const声明变量，让代码写法更加规范和人性化。

注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 `let` 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可[查阅资料](https://segmentfault.com/a/1190000013915935)。

## 函数

> 知道函数参数默认值、动态参数、剩余参数的使用细节，提升函数应用的灵活度，知道箭头函数的语法及与普通函数的差异。

### 函数提升

函数提升与变量提升比较类似。

说明：

1. 函数提升提升到当前作用域最前面
2. 函数提升只提升声明，不提升调用
3. 函数表达式不存在提升的现象
4. 函数提升能够使函数的声明调用更灵活

```html
<body>
  <script>
    function fn() {
      console.log('函数提升')
    }
    var fun
    // 函数提升
    // 1.函数提升提升到当前作用域最前面
    // 2.函数提升只提升声明，不提升调用
    // 3.函数表达式不存在提升的现象
    // 4.函数提升能够使函数的声明调用更灵活
    fn()
    fun()
    fun = function () {
      console.log('函数表达式不存在提升')
    }
    fun()
  </script>

```

### 函数参数

#### arguments对象（了解）

`arguments` 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参。

```html
<body>
  <script>
    // arguments对象获取所有实参
    function sum() {
      // 1. arguments 只存在于函数中 伪数组
      // 2. arguments 可以得到传递过来的所有实参 [1, 2]
      // console.log(arguments)
      let sum = 0
      for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
      }
      console.log(sum)
    }
    sum(1, 2)
    sum(1, 2, 3)
    sum(1, 2, 3, 4)
    // console.log(arguments) 外面无法使用

  </script>
</body>
```

总结：

1. arguments是一个伪数组，只存在于函数中
2. arguments的作用是动态获取函数的实参
3. 可以通过for循环依次得到传递过来的实参

#### 剩余参数

**剩余参数:**  允许我们将一个不定数量的参数表示为一个数组

**简单理解：**用于获取多余的实参，并形成一个真数组

**使用场景：** 

也可以解决形参和实参个数不匹配的问题

```html
<body>
  <script>
    // 剩余参数获得多余的实参 返回真数组
    // function sum(x, y, ...other) {
    //   console.log(x, y, other)
    // }
    // sum(1, 2)
    // sum(1, 2, 3)
    // sum(1, 2, 3, 4)

    // 1. 求和效果
    function sum(...other) {
      // console.log(other)  // [1, 2, 3, 4]
      let sum = 0
      other.forEach(function (ele) {
        sum += ele
      })
      console.log(sum)
    }
    sum(1, 2)
    sum(1, 2, 3)
    sum(1, 2, 3, 4)

  </script>
</body>
```

**剩余参数和arguments区别**

1. ... 是语法符号，置于最末函数形参之前，用于获取多余的实参
2. 借助 ... 获取的剩余实参，是个真数组
3. 箭头函数不支持arguments，但是可以使用剩余参数

开发中，还是提倡多使用 剩余参数

#### 展开运算符(…)

展开运算符,将一个数组/对象进行展开

~~~html
<body>
  <script>
    // 展开运算符：将一个数组/对象进行展开，咱们先讲展开数组
    // 1. 基本使用, 不修改原数组
    const arr = [1, 2, 3]
    console.log(...arr)
    console.log(arr)

    //2. 使用场景： 求数组最大值/最小值，数组合并
    // console.log(Math.max(1, 3, 8))
    console.log(Math.max(...arr))  // 3
    console.log(Math.min(...arr))  // 1
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    // console.log([arr1, arr2])
    console.log([...arr1, ...arr2])

  </script>
</body>
~~~

>剩余参数：函数参数使用，把多个元素收集起来生成一个真数组 （凝聚）
>
>展开运算符：将数组展开成各个元素（拆散）

### 箭头函数

箭头函数比函数表达式更简洁的一种写法

使用场景：箭头函数更适用于那些本来需要匿名函数的地方，写法更简单

```html
<body>
  <script>
    // 箭头函数
    // 1. 基本语法
    // const fn = function () {
    //   console.log('我是函数表达式')
    // }
    // fn()
    // const fn = () => {
    //   console.log('我是箭头函数')
    // }
    // fn()

    // 2. 细节使用
    // 2.1 如果只有一个形参则可以省略小括号,其余个数不能省略，如果没有参数则写空的小括号
    // const sum = (x) => {
    //   console.log(x + x)
    // }
    // sum(2)
    // const sum = x => {
    //   console.log(x + x)
    // }
    // sum(2)

    // 2.2 如果函数体只有一句代码，则可以省略大括号，这句代码就是返回值（省略return）
    // const sum = x => {
    //   return x + x
    // }
    // const sum = x => x + x
    // console.log(sum(5))

    // 2.3 如果返回的是一个对象，则需要用小括号把对象包裹起来
    // const fn = function() {
    //   return {name: '佩奇'}
    // }
    // const fn = () => ({ name: '佩奇' })
    // console.log(fn())

    // 2.4 箭头函数里面没有 arguments，但是有剩余参数
    const fn = (...other) => {
      // console.log(arguments)
      console.log(other)
    }
    fn(1, 2)
  </script>
</body>
```

**用法细节：** 

1. 当箭头函数只有一个参数时，可以省略参数的小括号，其余个数不能省略（没有参数也需要写小括号）
2. 当箭头函数的函数体只有一句代码 可以省略函数体大括号，这句代码就是返回值（可以不用写return）
3. 如果返回的是个对象，则需要把对象用小括号包裹
4. 箭头函数里面没有arguments，但是有剩余参数

总结：

1. 箭头函数属于表达式函数，因此不存在函数提升
2. 箭头函数只有一个参数时可以省略圆括号 `()`
3. 箭头函数函数体只有一行代码时可以省略花括号 `{}`，并自动做为返回值被返回
4. 箭头函数中没有 `arguments`，只能使用 `...` 动态获取实参

####  箭头函数中的this

以前函数中的this指向是根据如何调用来确定的。简单理解就是this指向调用者

箭头函数本身没有this,它只会沿用上一层作用域的this 

~~~html
 <body>
  <button class="btn1">点击</button>
  <button class="btn2">5秒后启用</button>
  <script>
    // 1. 以前this的指向：  指向调用者
    // console.log(this)  // window
    // // 普通函数
    // function fn() {
    //   console.log(this)  // window
    // }
    // window.fn()
    // // 对象方法里面的this
    // const obj = {
    //   name: 'andy',
    //   sayHi: function () {
    //     console.log(this)  // obj
    //   }
    // }
    // obj.sayHi()

    // 2. 箭头函数的中this指向-沿用上一层作用域的this 
    const fn = () => {
      console.log(this)  // window
    }
    fn()
    // const obj = {
    //   name: 'andy',
    //   sayHi: () => {
    //     console.log(this)  // window
    //   }
    // }
    // obj.sayHi()

    const obj = {
      name: 'andy',
      sayHi: function () {
        const fun = () => {
          console.log(this)  // obj 
        }
        fun()
      }
    }
    obj.sayHi()

    // 3. 我们可以根据需求来选择是否使用箭头函数 this
    // document.querySelector('.btn1').addEventListener('click', function () {
    //   this.style.color = 'red'
    // })
    document.querySelector('.btn1').addEventListener('click', () => {
      // this.style.color = 'red'
      // 此处不能用 this 指向 Window不是 按钮了
      document.querySelector('.btn1').style.color = 'red'
    })

    document.querySelector('.btn2').addEventListener('click', function () {
      this.disabled = true
      // setTimeout(function () {
      //   console.log(this) //  定时器里面的this 指向 window 
      //   this.disabled = false
      // }, 5000)

      setTimeout(() => {
        console.log(this) //  
        this.disabled = false
      }, 5000)
    })
  </script>
</body>
~~~

### ES6对象简写

1. 在对象中，如果属性名和属性值一致，可以简写只写属性名即可
2. 在对象中，方法（函数）可以简写

~~~html
<body>
  用户名: <input type="text" class="username"> <br>
  密　码: <input type="password" class="password"> <br>
  <button>点击</button>
  <script>
    // ES6对象属性和方法的简写
    // 1. 对象属性的简写 (点击按钮生成对象)
    document.querySelector('button').addEventListener('click', function () {
      const username = document.querySelector('.username').value
      const password = document.querySelector('.password').value
      // const obj = {
      //   username: username,
      //   password: password
      // }
      // 属性名和属性值相同的时候，可以只写属性名
      // 2. 对象方法的简写
      // const obj = {
      //   username,
      //   password,
      //   sayHi: function() {
      //     console.log('hi~')
      //   }
      // }
      const obj = {
        username,
        password,
        sayHi() {
          console.log('hi~')
        }
      }
      console.log(obj)
    })


  </script>
~~~

## 解构赋值

> 知道解构的语法及分类，使用解构简洁语法快速为变量赋值。

解构赋值：可以将数组中的值或对象的属性取出，赋值给其他变量

解构：其实就是把一个事物的结构进行拆解

### 数组解构

基本语法：

1. 右侧数组的值将被赋值给左侧的变量
2. 变量的顺序对应数组值的位置依次进行赋值操作

```html
<body>
  <script>
    // 数组解构
    // 1. 基本语法
    const [a, b, c] = [1, 2, 3]
    console.log(a)
    console.log(b)
    console.log(c)

    // 2. 典型的使用场景  交换2个变量的值
    let x = 1
    let y = 2;
    [y, x] = [x, y]
    console.log(x, y);

    // 3. js 2个特殊情况需要加分号
    // 3.1 如果是小括号开头的则需要加分号
    (function () { })();
    (function () { })();
    // 3.2 如果是中括号开头的则需要加分号

  </script>
</body>
```

**变量和值不匹配的情况**

~~~html
<body>
  <script>
    // 数组解构变量和值不匹配的情况

    // 1. 变量多，值少的情况
    // const [a, b, c, d] = ['小米', '华为', '苹果']
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d) // undefined

    // 2. 防止undefined传值，可以设置默认值
    // const [a, b, c, d = '三星'] = ['小米', '华为', '苹果']
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)

    // 3. 变量少，值多的情况
    // const [a, b] = ['小米', '华为', '苹果']
    // console.log(a)
    // console.log(b)

    // 4. 利用剩余参数解决变量少值多的情况
    // const [a, ...b] = ['小米', '华为', '苹果']
    // console.log(a)
    // console.log(b)

    // 5. 按需导入，忽略某些值
    const [a, , c, d] = ['小米', '华为', '苹果', 'vivo']
    console.log(a)
    console.log(c)
    console.log(d)
  </script>
</body>
~~~

### 对象解构

对象解构赋值：可以将对象的属性取出，赋值给其他变量

```html
<body>
  <script>
    const username = 'andy'
    const user = {
      username: '小明',
      age: 18
    }
    // 1. 对象解构赋值基本使用
    // const { username, age, gender } = user
    // console.log(username)  // 小明
    // console.log(age)  // 18
    // console.log(gender)  // undefined

    // 1.1 要求变量名和属性名必须一致
    // 1.2 如果变量名和属性名不一致，则默认为 undefined
    // 1.3 变量名不要和外面的变量名冲突，否则会报错

    // 2. 更改解构变量名（重命名）  变量名: 新变量名
    // const { username: uname, age } = user
    // console.log(uname)  // 小明
    // console.log(age)  // 18

    // 3. 对象数组解构
    const arr = [
      {
        username: '小明',
        age: 18
      }
    ]

    const [{ username: uname, age }] = arr
    console.log(uname)
    console.log(age)
  </script>
</body>
```

注：支持多维解构赋值

~~~html
<body>
  <script>
    // 1. 这是后台传递过来的数据
    const msg = {
      "code": 200,
      "msg": "获取新闻列表成功",
      "data": [
        {
          "id": 1,
          "title": "5G商用自己，三大运用商收入下降",
          "count": 58
        },
        {
          "id": 2,
          "title": "国际媒体头条速览",
          "count": 56
        },
        {
          "id": 3,
          "title": "乌克兰和俄罗斯持续冲突",
          "count": 1669
        },

      ]
    }

    // 需求1： 请将以上msg对象  采用对象解构的方式 只选出  data 方面后面使用渲染页面
    // const { data } = msg
    // console.log(data)
    // 需求2： 上面msg是后台传递过来的数据，我们需要把data选出当做参数传递给 函数
    // const { data } = msg
    // msg 虽然很多属性，但是我们利用解构只要 data值
    function render({ data }) {
      // const { data } = arr
      // 我们只要 data 数据
      // 内部处理
      console.log(data)

    }
    render(msg)

    // 需求3， 为了防止msg里面的data名字混淆，要求渲染函数里面的数据名改为 myData
    function render({ data: myData }) {
      // 要求将 获取过来的 data数据 更名为 myData
      // 内部处理
      console.log(myData)

    }
    render(msg)

  </script>
~~~

## 综合案例

### filter遍历数组

filter() 方法创建一个新的数组，新数组中的元素是符合条件的所有元素

主要使用场景： 筛选数组符合条件的元素，并返回筛选之后元素的新数组，不影响原数组

~~~html
<body>
  <script>
    // filter 筛选数组元素
    const arr = [10, 20, 30, 40]
    // const newArr = arr.filter(function (ele, index) {
    //   // console.log(ele)
    //   // console.log(index)
    //   // return 筛选条件
    //   return ele >= 30
    //   // return ele + 30 都是真的所以都选出来了
    // })

    const newArr = arr.filter(ele => ele >= 30)
    console.log(newArr)
  </script>
</body>
~~~

## 拓展-垃圾回收机制算法

堆栈空间分配区别：

1. 栈（操作系统）: 由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面。
2. 堆（操作系统）: 一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型放到堆里面。

下面介绍两种常见的浏览器垃圾回收算法: 引用计数法 和 标记清除法

### 引用计数

IE采用的引用计数算法, 定义“内存不再使用”，就是看一个对象是否有指向它的引用，没有引用了就回收对象

算法： 

1. 跟踪记录被引用的次数
2. 如果被引用了一次，那么就记录次数1,多次引用会累加 ++
3. 如果减少一个引用就减1 -- 
4. 如果引用次数是0 ，则释放内存

### 标记清除法

现代的浏览器已经不再使用引用计数算法了。

现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。

核心：

1. 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。 
2. 就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。

3.那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。 