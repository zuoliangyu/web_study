# 面经PC端 - Element (下)

## 面经管理 - 基本渲染

### 面经管理（准备代码）

`article/index.vue`

```jsx
<template>
  <div class="article-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>面经后台</el-breadcrumb-item>
      <el-breadcrumb-item>面经管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card shadow="never" border="false">
      <template #header>
        <div class="header">
          <span>共 300 条记录</span>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            round>
            添加面经
          </el-button>
        </div>
      </template>

    </el-card>
  </div>
</template>

<script>
export default {
  name: 'article-page',
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 25px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
  }
  .actions {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    color: #666;
    > i:hover {
      color: rgba(114, 124, 245, 1);
      cursor: pointer;
    }
  }
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
.el-breadcrumb {
  margin-top: 10px;
}
.el-form {
  padding-right: 40px;
}
.quill-editor {
  ::v-deep .ql-editor {
    height: 300px;
  }
}
.el-rate {
  padding: 10px 0;
}
.article-preview {
  padding: 0 40px 40px 40px;
  > h5 {
    font-size: 20px;
    color: #666;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 30px;
    margin: 0 0 20px 0;
  }
}
</style>

```





### 表格基本 **属性解读**

![image-20220707164218013](images/image-20220707164218013.png)



- data 数据源
- prop 设置数据源中对象中的键名，即可填入数据
- label 列名
- width 列宽

```jsx
<el-table :data="tableData" stripe style="width: 100%">
  <el-table-column prop="date" label="日期" width="180">
  </el-table-column>
  <el-table-column prop="name" label="姓名" width="180">
  </el-table-column>
  <el-table-column prop="address" label="地址"> </el-table-column>
</el-table>

data () {
  return {
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
},
```



### 发送请求获取数据

![image-20220707170311356](images/image-20220707170311356.png)

新建 `api/article.js`

```jsx
import request from '@/utils/request'

export const getArticleList = data => {
  return request.get('/admin/interview/query', {
    params: data
  })
}
```

`article/index.vue` created中发送初始化获取数据的请求

```jsx
data () {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    list: []
  }
},
created () {
  this.initData()
},
methods: {
  async initData () {
    const { data } = await getArticleList({
      current: this.current,
      pageSize: this.pageSize
    })
    this.list = data.rows
    this.total = data.total
    console.log(data)
  }
}
```





### 动态渲染表格

![image-20220619055559556](images/image-20220619055559556.png)

```jsx
<el-table :data="list" style="width: 100%">
  <el-table-column prop="stem" label="标题" width="400">
  </el-table-column>
  <el-table-column prop="creator" label="作者"> </el-table-column>
  <el-table-column prop="likeCount" label="点赞"> </el-table-column>
  <el-table-column prop="views" label="浏览数"> </el-table-column>
  <el-table-column prop="createdAt" label="更新时间" width="200">
  </el-table-column>
</el-table>
```



### 操作按钮部分

![image-20220619055609938](images/image-20220619055609938.png)

```jsx
<el-table :data="list" style="width: 100%">
  <el-table-column prop="stem" label="标题" width="400">
  </el-table-column>
  <el-table-column prop="creator" label="作者"> </el-table-column>
  <el-table-column prop="likeCount" label="点赞"> </el-table-column>
  <el-table-column prop="views" label="浏览数"> </el-table-column>
  <el-table-column prop="createdAt" label="更新时间" width="200">
  </el-table-column>
  <el-table-column label="操作" width="120px">
    <template #default="{ row }">
      <div class="actions">
        <i
          class="el-icon-view"
        ></i>
        <i
          class="el-icon-edit-outline"
        ></i>
        <i class="el-icon-delete" @click="del(row.id)"></i>
      </div>
    </template>
  </el-table-column>
</el-table>


del (id) {
  console.log(id)
}
```



### 分页渲染

```jsx
<el-pagination
  background
  @current-change="handleCurrentChange"
  :current-page="current"
  :page-size="pageSize"
  layout="prev, pager, next"
  :total="total"
>
</el-pagination>


handleCurrentChange (val) {
  // 处理当前页变化
  this.current = val
  this.initData()
}
```



## 面经管理 - 添加功能

### 打开抽屉 - 注册点击事件

`添加  预览  修改`，都要打开抽屉，可以复用

```jsx
<el-button @click="openDrawer('add')" icon="el-icon-plus" size="small" type="primary" round>
  添加面经
</el-button>

<el-table-column label="操作" width="120px">
  <template #default="{ row }">
    <div class="actions">
      <i class="el-icon-view" @click="openDrawer('preview', row.id, )"></i>
      <i class="el-icon-edit-outline" @click="openDrawer('edit', row.id)"></i>
      <i class="el-icon-delete" @click="del(row.id)"></i>
    </div>
  </template>
</el-table-column>

openDrawer (type, id) {
  console.log(type, id)
}
```



### 打开抽屉 - 显示抽屉

```jsx
<el-drawer
  :visible.sync="isShowDrawer"
  :before-close="handleClose"
  title="大标题"
  direction="rtl"
  size="50%"
>
  <span>我来啦!</span>
</el-drawer>

data () {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    list: [],
    isShowDrawer: false
  }
},


openDrawer (type, id) {
  console.log(type, id)
  this.isShowDrawer = true
},
handleClose () {
  this.isShowDrawer = false
}
```





### 计算属性控制标题

记录 drawerType， 提供计算属性

```jsx
data () {
  return {
    current: 1,
    pageSize: 10,
    total: 0,
    list: [],
    isShowDrawer: false,
    drawerType: ''
  }
},
methods: {  
    openDrawer (type, id) {
      // console.log(type, id)
      this.drawerType = type
      this.isShowDrawer = true
    },
},
    
computed: {
  drawerTitle () {
    let title = '大标题'
    if (this.drawerType === 'add') title = '添加面经'
    if (this.drawerType === 'preview') title = '面经预览'
    if (this.drawerType === 'edit') title = '修改面经'
    return title
  }
},
```

结构中渲染

```jsx
<el-drawer
  :visible.sync="isShowDrawer"
  :before-close="handleClose"
  :title="drawerTitle"
  direction="rtl"
>
  <span>我来啦!</span>
</el-drawer>
```



### 表单结构

![image-20220619062259040](images/image-20220619062259040.png)

```jsx
<el-form label-width="80px">
  <el-form-item label="标题">
    <el-input placeholder="输入面经标题"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    富文本编辑器
  </el-form-item>
  <el-form-item>
    <el-button type="primary">确认</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
```



### 富文本编辑器

https://www.npmjs.com/package/vue-quill-editor

装包

```jsx
npm install vue-quill-editor
```

导入,  局部注册

```jsx
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'
 
export default {
  components: {
    quillEditor
  }
}
```

使用， v-model 绑定数据

```jsx
form: {
  stem: '',
  content: ''
}
```

```jsx
<el-form label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.stem" placeholder="输入面经标题"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <quill-editor v-model="form.content"></quill-editor>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">确认</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
```



### 添加非空校验

```jsx
<el-form :model="form" :rules="rules" ref="form" label-width="80px">
  <el-form-item label="标题" prop="stem">
    <el-input v-model="form.stem" placeholder="输入面经标题"></el-input>
  </el-form-item>
  <el-form-item label="内容" prop="content">
    <quill-editor v-model="form.content"></quill-editor>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submit">确认</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

rules: {
  stem: [{ required: true, message: '请输入面经标题', trigger: 'blur' }],
  content: [{ required: true, message: '请输入面经标题', trigger: 'blur' }]
}
```

富文本编辑器，校验单独处理

```jsx
<quill-editor v-model="form.content" @blur="$refs.form.validateField('content')"></quill-editor>
```



### 封装接口 api 添加完成

`api/article.js`

```jsx
export const createArticle = data => {
  return request.post('/admin/interview/create', data)
}
```

发送请求添加，关闭弹框重新渲染

```jsx
async submit () {
  try {
    await this.$refs.form.validate()
    await createArticle(this.form)
    Message.success('添加成功')
    this.current = 1
    this.initData()
    this.handleClose()
  } catch (e) {
    console.log(e)
  }
}
```



### 重置表单

```jsx
this.$refs.form.resetFields()
```





## 面经管理 - 删除功能

`api/article.js`

```jsx
export const removeArticle = id => {
  return request.delete('/admin/interview/remove', {
    data: {
      id
    }
  })
}
```

页面中，注册点击事件调用

```jsx
<i class="el-icon-delete" @click="del(row.id)"></i>

async del (id) {
  // 删除请求
  await removeArticle(id)
  // 添加成功的提示
  this.$message.success('删除成功')

  // 处理删除当前页的最后一条
  if (this.tableData.length === 1 && this.current > 1) {
    this.current--
  }
  // 重新渲染
  this.initData()
},
```





## 面经管理 - 修改功能

### 修改回显

修改比添加多一层回显，显示弹框时，需要发送请求获取数据

`api/article.js`

```jsx
export const getArticleDetail = id => {
  return request.get('/admin/interview/show', {
    params: {
      id
    }
  })
}
```

回显展示

```jsx
async openDrawer (type, id) {
  // console.log(type, id)
  this.drawerType = type
  this.isShowDrawer = true

  if (type !== 'add') {
    const res = await getArticleDetail(id)
    this.form = {
      ...res.data
    }
  }
},
```

### 修改提交

`api/article.js`准备api

```jsx
export const updateArticle = data => {
  return request.put('/admin/interview/update', data)
}
```

判断，修改提交

```jsx
async submit () {
  try {
    // 校验表单
    await this.$refs.form.validate()
    // 如何区分, 当前是 编辑 还是 添加
    if (this.drawerType === 'add') {
      // 发送请求
      await createArticle(this.form)
      // 添加提示 $message.success
      this.$message.success('添加成功')
    }
    if (this.drawerType === 'edit') {
      // 发送的是编辑的请求
      const { id, stem, content } = this.form
      await updateArticle({ id, stem, content })
      this.$message.success('修改成功')
    }
    // 无论是修改还是添加, 都会回到第一页, 重置页码
    this.current = 1
    // 重新渲染
    this.initData()
    // 关闭弹框
    this.handleClose()
  } catch (e) {
    console.log(e)
  }
}
```



## 面经管理 - 预览功能

预览不需要展示表单，直接 v-html 渲染即可

```jsx
<div v-if="drawerType === 'preview'" class="article-preview">
  <h5>{{ form.stem }}</h5>
  <div v-html="form.content"></div>
</div>
<el-form v-else :model="form" :rules="rules" ref="form" label-width="80px">
  ...
</el-form>
```

处理关闭逻辑

```jsx
handleClose () {
  // 注意点: 由于公用的抽屉, 当预览时, 是没有表单的! 不能重置表单
  // 但是form的值还在, 会影响添加 => 需要手动重置一下
  // 关闭时将表单内容重置

  // 无论是哪种情况, 一律将form手动数据清零
  this.form = { stem: '', content: '' }

  if (this.drawerType !== 'preview') {
    // add edit 调用 resetFields 在此处的作用: 重置校验状态
    this.$refs.form.resetFields()
  }

  this.isShowDrawer = false // 关闭弹框
},
```



